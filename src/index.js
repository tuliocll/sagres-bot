var api = require('./config/axios');
var client = require('./config/twitter');

api
  .get('/')
  .then(function(response) {
    postarTwitter(
      'O #sagres da #UESB esta online ? R: SIM. #sagresbot #sagresuesbbot'
    );
  })
  .catch(function(error) {
    postarTwitter(
      'O #sagres da #UESB esta online ? R: NÃO. #sagresbot #sagresuesbbot a'
    );
  });

async function postarTwitter(msg) {
  var datetime = new Date();
  client
    .post('statuses/update', { status: msg + ' ' + datetime })
    .then(function(tweet) {
      console.log('enviado');
    })
    .catch(function(error) {
      throw error;
    });
}
