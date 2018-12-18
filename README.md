# 制品文档
## 选题背景，依据
随着生活水平的提高，个人购买的电子产品越来越多，如手机、笔记本电脑、智能家具等等，而且这些产品也趋向于精密，一旦出现故障，申请保修是最好也可能是唯一的选择。

然而向商家申请保修时，消费者需要提供一些凭证，如发票、保修卡、产品ID等等，这些信息大多记载在纸质材料上，若没有良好的整理习惯，这些材料在需要用到时通常很难找到；当商家要验证保修信息的真伪时，如果事先没有设计完整的防伪体系，那么验证起来是有困难的。

为了解决商品保修中的种种困难，让商家和消费者达成共识，我希望利用区块链公开透明、不可篡改、不可伪造的特点，设计一份商品保修智能合约，服务于商家和消费者双方。
## 使用说明
智能合约实现的功能面向商家方和消费者方。本商品保修系统服务于顾客和商家，其主要功能是，顾客上传保修信息、查询保修信息、申请保修、查询保修申请的状态，商家受理保修申请、完成保修申请。

进入保修系统后界面如下图，上半部分是顾客服务界面，下半部分是商家服务界面，分别对应上述功能。
![](https://github.com/Vinsm-L/2018blockchain_project/blob/master/pics/home.PNG)

下面是对本保修系统的功能介绍。

### 上传保修信息
由于不同商家的要求可能不一样，以下约定，“保修信息”指申请保修时所需的保修卡号和产品ID。

顾客在收货后，可以把商品的保修信息上传到系统。第一个输入栏填入的是产品ID，第二个输入栏填入保修卡号。点击upload，即可完成保修信息的上传。
![](https://github.com/Vinsm-L/2018blockchain_project/blob/master/pics/uploadItemInfo.PNG)

### 查询保修信息
当顾客需要申请保修时，可以在系统上查询商品的保修信息。由于一个顾客可能有多件商品，所以需要使用序号进行区分。如下图，在输入栏中填入商品序号。
![](https://github.com/Vinsm-L/2018blockchain_project/blob/master/pics/searchItemInfo1.PNG)

点击search按钮后，显示商品保修信息如下。
![](https://github.com/Vinsm-L/2018blockchain_project/blob/master/pics/searchItemInfo2.PNG)

### 申请保修
拿到保修信息后，接下来进行保修申请。如下图，在5个输入栏中分别输入商品ID，保修卡号，手机号，个人地址，预约维修日期，然后点击apply按钮，提交保修申请。

![](https://github.com/Vinsm-L/2018blockchain_project/blob/master/pics/applyForRepair.PNG)

### 查询保修申请状态
进行申请后，现在来查询保修申请的状态。点击search request status按钮，显示当前状态如下图。当前状态是已上传，但商家还未进行受理。

![](https://github.com/Vinsm-L/2018blockchain_project/blob/master/pics/searchRequestStatus1.PNG)

### 受理保修申请
接下来是面向商家的功能。商家可以通过点击accept request按钮，从已上传队列中选取一个申请，并将它加入已受理队列，如下图。

![](https://github.com/Vinsm-L/2018blockchain_project/blob/master/pics/acceptRequest.png)

此时被受理申请的顾客再查询保修申请状态，会得到如下反馈。

![](https://github.com/Vinsm-L/2018blockchain_project/blob/master/pics/searchRequestStatus2.PNG)

### 完成保修申请
商家可以通过点击complete request按钮，从已受理队列中选取一个申请，并将它加入已完成队列，如下图。

![](https://github.com/Vinsm-L/2018blockchain_project/blob/master/pics/completeRequest.png)

此时申请已完成的顾客再查询保修申请状态，会得到如下反馈。

![](https://github.com/Vinsm-L/2018blockchain_project/blob/master/pics/searchRequestStatus3.PNG)
## 测试
