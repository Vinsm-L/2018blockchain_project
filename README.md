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
为了更直观地看到函数调用的结果，使用remix进行测试。在测试中，规定商家账户为**0xca35b7d915458ef540ade6068dfe2f44e8fa733c**，账户1为**0x14723a09acff6d2a60dcdf7aa4aff308fddc160c**，账户2为**0x4b0897b0513fdc7c541b6d9d7e929c4e5364d2db**，账户3为**0x583031d1113ad414f02576bd6afabfb302140225**。

账户1拥有1个商品，商品序列号和保修卡号均为1。账户2拥有2个商品，其中一个商品序列号和保修卡号均为2，另一个商品序列号和保修卡号均为3。账户3无商品。

由商家账户部署智能合约，所以变量 merchant 的值为商家账户地址。

![](https://github.com/Vinsm-L/2018blockchain_project/blob/master/pics/1.png)

测试 uploadItemInfo 函数。账户 1 上传其商品信息成功，如下。

![](https://github.com/Vinsm-L/2018blockchain_project/blob/master/pics/2.png)

![](https://github.com/Vinsm-L/2018blockchain_project/blob/master/pics/3.png)

同理，账户 2 也上传其两件商品的信息。

![](https://github.com/Vinsm-L/2018blockchain_project/blob/master/pics/4.png)

![](https://github.com/Vinsm-L/2018blockchain_project/blob/master/pics/5.png)

可通过调用查询商品函数进一步验证上传函数的正确性。下面测试searchItemInfo 函数。账户 1 查询其第 1 件商品， index 为 0，返回信息正确。

![](https://github.com/Vinsm-L/2018blockchain_project/blob/master/pics/6.png)

当传入 index 的值为 1 时，由于其超出了账户 1 拥有的商品数量，所以显示错误信息，如下。

![](https://github.com/Vinsm-L/2018blockchain_project/blob/master/pics/7.png)

账户 2 查询其第一、二件商品的信息，返回结果正确。

![](https://github.com/Vinsm-L/2018blockchain_project/blob/master/pics/8.png)

![](https://github.com/Vinsm-L/2018blockchain_project/blob/master/pics/9.png)

下面测试 applyForRepair 函数。账户 1、 2 填入申请信息分别如下。

![](https://github.com/Vinsm-L/2018blockchain_project/blob/master/pics/10.png)

![](https://github.com/Vinsm-L/2018blockchain_project/blob/master/pics/11.png)

通过查看 uploaded 数组的内容，可验证函数被正确执行。

![](https://github.com/Vinsm-L/2018blockchain_project/blob/master/pics/12.png)

![](https://github.com/Vinsm-L/2018blockchain_project/blob/master/pics/13.png)

此时账户 1、 2 调用 searchRequestStatus 函数，返回结果为其申请已上传。

![](https://github.com/Vinsm-L/2018blockchain_project/blob/master/pics/14.png)

![](https://github.com/Vinsm-L/2018blockchain_project/blob/master/pics/15.png)

现在测试 acceptRequest 函数。如果由非商家账户调用该函数，将会报错。

![](https://github.com/Vinsm-L/2018blockchain_project/blob/master/pics/16.png)

由商家进行调用后，结果如下。

![](https://github.com/Vinsm-L/2018blockchain_project/blob/master/pics/17.png)

![](https://github.com/Vinsm-L/2018blockchain_project/blob/master/pics/18.png)

此时 uploaded 数组已空，而两个申请转移至 accepted 数组。

![](https://github.com/Vinsm-L/2018blockchain_project/blob/master/pics/19.png)

![](https://github.com/Vinsm-L/2018blockchain_project/blob/master/pics/20.png)

![](https://github.com/Vinsm-L/2018blockchain_project/blob/master/pics/21.png)

此时账户 1、 2 查询申请状态，得到结果是已受理。

![](https://github.com/Vinsm-L/2018blockchain_project/blob/master/pics/22.png)

![](https://github.com/Vinsm-L/2018blockchain_project/blob/master/pics/23.png)

现在测试 completeRequest 函数。同理，非 merchant 账户调用该函数会报错。

![](https://github.com/Vinsm-L/2018blockchain_project/blob/master/pics/24.png)

由商家调用该函数，结果如下。

![](https://github.com/Vinsm-L/2018blockchain_project/blob/master/pics/25.png)

![](https://github.com/Vinsm-L/2018blockchain_project/blob/master/pics/26.png)

当已经不存在已受理的申请，会报错。

![](https://github.com/Vinsm-L/2018blockchain_project/blob/master/pics/27.png)

完成操作后可看到 accepted 数组已空，申请被转移到 completed 数组中。

![](https://github.com/Vinsm-L/2018blockchain_project/blob/master/pics/28.png)

![](https://github.com/Vinsm-L/2018blockchain_project/blob/master/pics/29.png)

![](https://github.com/Vinsm-L/2018blockchain_project/blob/master/pics/30.png)

此时账户 1、 2 再查询申请状态，得到结果为申请已完成。

![](https://github.com/Vinsm-L/2018blockchain_project/blob/master/pics/31.png)

![](https://github.com/Vinsm-L/2018blockchain_project/blob/master/pics/32.png)

由于账户 3 无商品信息、未上传保修申请，所以其调用 searchRequestStatus 函数时返回结果为无相关信息。

![](https://github.com/Vinsm-L/2018blockchain_project/blob/master/pics/33.png)
