var express = require('express');
var router = express.Router();
const webpush = require('web-push');
var Noti = require('../models/noti');

// web push notifications
const dummyDb = { subscription: null } //dummy in memory store

const saveToDatabase = async subscription => {
  // Since this is a demo app, I am going to save this in a dummy in memory store. Do not do this in your apps.
  // Here you should be writing your db logic to save it.
  dummyDb.subscription = subscription
}

const vapidKeys = {
  publicKey:
    'BIZ8E6td2p2qwepGtOt8IG-JZz1VVFt7F1MTNj4LZE6VFXlmKxl4cZKM8qP5kJIHdJvHZPVqfbrpiSBb6iLXILI',
  privateKey: '0weW0g14laEgJTeCombeIkjB_vZ-f0o0Eii-tiNpfSE',
};

//setting our previously generated VAPID keys
webpush.setVapidDetails(
  'mailto:myuserid@email.com',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

//function to send the notification to the subscribed device
const sendNotification = (subscription, dataToSend='') => {
  webpush.sendNotification(subscription, dataToSend);
};

// The new /save-subscription endpoint
router.post('/save-subscription', async (req, res) => {
  const subscription = req.body;
  let noti = new Noti({
    name: 'quan',
    device_token: subscription
  });
  console.log(noti);
  noti.save();
  await saveToDatabase(subscription); //Method to save the subscription to Database
  res.json({ message: 'success' });
});

//route to test send notification
router.get('/send-notification', async (req, res) => {
  var notis = await Noti.find({});
  const subscription = dummyDb.subscription; //get subscription from your databse here.
  const message = req.query.title;
  notis.forEach(noti => {
    console.log(1111, notis);
    sendNotification(noti.device_token, JSON.stringify({title: req.query.title, description: req.query.desc, icon: req.query.icon }));
  });
  res.json({ message: 'message sent' });
});

module.exports = router;
