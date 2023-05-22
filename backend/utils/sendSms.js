const twilio = require("twilio")(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

const sendSms = async (options) => {
  twilio.messages
    .create({
      from: process.env.TWILIO_PHONE_NO,
      to: `+91${options.phone_no}`,
      body: options.body,
    })
    .then((res) => {})
    .catch((err) => {
      console.log(err);
    });
};

module.exports = sendSms;
