// cod for sending msg to verified no.s

const accountSid = "ACec38368789ef94cb321246badf2642ab"; 
const authToken = "8fad90fa07dc95abcfcabf3cc7283551";   // modified for security
const client = require('twilio')(accountSid, authToken);

client.messages
      .create({
         from: 'whatsapp:+14155238886',
         body: 'Bro first msg send by Twilio!!',
         to: 'whatsapp:+919836880657'
       })
      .then(message => console.log(message.sid));


