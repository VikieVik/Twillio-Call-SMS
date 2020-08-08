/**
 * This nodejs app sends sms alerts
 * using twillio API
 *
 */

require("dotenv/config");
const accountSid = process.env.TWILLIO_ACCOUNT_SID;
const authToken = process.env.TWILLIO_AUTH_TOKEN;

const client = require("twilio")(accountSid, authToken);

// Sending messages using twillio
/**
client.messages
  .create({
    to: process.env.TARGET_MOBILE_NUMBER,
    from: process.env.TWILLIO_MOBILE_NUMBER,
    body: "test alert from Forest AI",
  })
  .then((message) => console.log(message.sid));
*/

// Download the helper library from https://www.twilio.com/docs/node/install

// Sending calls using twillio

client.calls.create(
  {
    twiml:
      "<Response> <Say voice='alice'> Intrusion detected in your forest! check the forest application</Say>  </Response>",
    to: process.env.TARGET_MOBILE_NUMBER,
    from: process.env.TWILLIO_MOBILE_NUMBER,
  },
  function (err, call) {
    if (err) {
      console.log(err);
    } else {
      console.log(call.sid);
    }
  }
);
