# Project-Viona : `THEME : E-COMMERCE & RETAIL`

`Project-Viona` is a platform that enables users to try out products, from the comfort of their own home. <br/>
<br/>
Presented by <b>Team Mozzarella</b>


Contents
========

 * [Installation](#installation)
 * [API Used](#API-Used)


### Installation
---

1. Clone the repository
2. Open with code editor and run following commands on the terminal.
    + ` npm install `
    + ` node index.js`
3. Open the localhost link.

`.env file hasnt been pushed`
<br/>
You can provide your own env file of your cloudinary account and specifying details in the given format.
<br/>
CLOUD_NAME=
<br/>
API_KEY=
<br/>
API_SECRET=
<br/>


### API Used
---
<ol>
<li>RCS Notification API <br/>
We confirm users' numbers by sending them an auto-generated OTP using RCS text API while placing the order; if the OTP matches, we complete the order and give them a confirmation message with a snapshot of the product
<br/>
<li>WBS API
<br/>
When a user selects the customer service button, an auto-generated message is sent to the specified phone number using WhatsApp API, where they can express their concerns.
<br/>
<li>SMS API
<br/>
We are using the JavaScript set interval function and fetch API method to send asynchronous messages to all of our customers (whitelisted numbers). We're reminding them about the best deals available using route mobile's SMS API.
<br/>
<li>WBS Message Callback URL
<br/>
We've given users the option of utilising Whatsapp to communicate with us about their concerns, and we'll respond using WBS Message Callback URL and WhtasApp session API.
<br/>    
<li>ML API
<br/>
We hosted our Makeup GAN Model at aws ec2 p2.2xlarge instance with K80 Tesla GPU and NVIDIA CUDA .The api passes the received arguments to the MLmodel.
The final generated image is then displayed on the client side.
</ol>
