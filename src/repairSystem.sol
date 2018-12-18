pragma solidity ^0.4.0;

contract repairSystem {
	// the repair infomation of item, including the ID of item and warranty card
	struct itemInfo {
		uint itemID;
		uint warrantyCardID;
	}

	// the repair request of customer
	struct repairRequest {
		address blockchainAddr;  // user's address in the system
		uint itemID;  
		uint warrantyCardID;
		uint tel;  // user's telephone number
		string customerAddr;  // user's real world address
		string date;  // user arranges to repair on this date
	}

	address public merchant;  // merchant's address in the system

	mapping(address => itemInfo[]) user2items;  // map user's address to item infomations

	repairRequest[] public uploaded;  // store the repair requests uploaded

	repairRequest[] public accepted;  // store the repair requests accepted

	repairRequest[] public completed;  // store the repair requests completed

	// the contract is created by merchant
	constructor() public {
        merchant = msg.sender;
    }

    // user uploads the item infomation to the system
    function uploadItemInfo(uint _itemID, uint _warrantyCardID) public {
    	user2items[msg.sender].push(itemInfo({
    		itemID: _itemID,
    		warrantyCardID: _warrantyCardID
    	}));
    }

    // user searches for the items infomation uploaded by index
    function searchItemInfo(uint index) public constant returns (uint _itemID, uint _warrantyCardID) {
    	require(index < user2items[msg.sender].length, "Index exceeds the number of your items.");
    	
    	return (user2items[msg.sender][index].itemID, user2items[msg.sender][index].warrantyCardID);
    }

    // user applies for repair
    function applyForRepair(uint _itemID, uint _warrantyCardID, uint _tel, string _customerAddr, string _date) public {
    	uploaded.push(repairRequest({
    		blockchainAddr: msg.sender,
    		itemID: _itemID,
    		warrantyCardID: _warrantyCardID,
    		tel: _tel,
    		customerAddr: _customerAddr,
    		date: _date
    	}));
    }

    // merchant accepts a repair request
    function acceptRequest() public {
    	require(msg.sender == merchant, "Only merchant can do this operation.");

    	require(uploaded.length > 0, "There's no request left in the uploaded queue.");

    	accepted.push(uploaded[uploaded.length - 1]);
    	uploaded.length = uploaded.length - 1;
    }

    // merchant completes a repair request
    function completeRequest() public {
    	require(msg.sender == merchant, "Only merchant can do this operation.");

    	require(accepted.length > 0, "There's no request left in the accepted queue.");

    	completed.push(accepted[accepted.length - 1]);
    	accepted.length = accepted.length - 1;
    }

    // user searches for the status of request
    function searchRequestStatus() public constant returns (string status) {
    	for (uint i = 0; i < uploaded.length; i++) {
    		if (uploaded[i].blockchainAddr == msg.sender) {
    			return "Your request is uploaded.";
    		}
    	}

    	for (uint j = 0; j < accepted.length; j++) {
    		if (accepted[j].blockchainAddr == msg.sender) {
    			return "Your request is accepted.";
    		}
    	}

    	for (uint k = 0; k < completed.length; k++) {
    		if (completed[k].blockchainAddr == msg.sender) {
    			return "Your request is completed.";
    		}
    	}

    	return "No such request.";
    }
}