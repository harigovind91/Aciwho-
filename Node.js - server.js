const express = require('express');
const Razorpay = require('razorpay');
const app = express();

const instance = new Razorpay({
  key_id: 'YOUR_RAZORPAY_KEY',
  key_secret: 'YOUR_SECRET'
});

// नया डोनेशन ऑर्डर बनाना
app.post('/create-order', async (req, res) => {
  const options = {
    amount: req.body.amount * 100, // Amount in paisa
    currency: "INR", // सिर्फ भारत के लिए फिक्स
    receipt: "receipt_1",
  };
  const order = await instance.orders.create(options);
  res.json(order);
});

// विड्रॉल रिक्वेस्ट (Withdrawal Request)
app.post('/request-withdrawal', (req, res) => {
  const { userId, campaignId, bankProof, amount } = req.body;
  // यहाँ डेटाबेस में 'Pending' स्टेटस के साथ सेव होगा
  console.log(`Withdrawal requested for ${amount} by ${userId}`);
  res.send("Request Submitted for Admin Approval");
});

app.listen(3000, () => console.log("Aciwho Server Running..."));
