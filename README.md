# Projec-Viona

`Projec-Viona` is a platform that enables users to try out products, from the comfort of their own home. <br/>
Presented by <b>Team Mozzarella</b>


Contents
========

 * [Installation](#installation)
 * [Tech Stacks Used](#Tech-Stacks-Used)
 * [API Used](#API-Used)


### Installation
---

1. Clone the repository
2. Open with code editor and run following commands on the terminal.
    + `$ npm install 
    + `$ node index.js
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


### Tech Stacks Used
---
1. Node
2. Express
3. Javascript
4. Pytorch
5. Keras
6. AWS
7. Azure
8. Unity
9. C#

### API Used
---
<ol>
<li>RCS Notification API <br/>
We confirm users' numbers by sending them an auto-generated OTP using RCS text API while placing the order; if the OTP matches, we complete the order and give them a confirmation message with a snapshot of the product
<br/>
<li>WBS API
<br/>
We've given users the option of utilising Whatsapp to communicate with us about their concerns, and we'll respond using Route mobile's Watsapp callback API and session API.
<br/>
<li>SMS API
<br/>
We are using the JavaScript set interval function and fetch API method to send asynchronous messages to all of our customers (whitelisted numbers). We're reminding them about the best deals available using route mobile's SMS API.
</ol>
