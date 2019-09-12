var api = require('./config/axios');
var client = require('./config/twitter');

api
  .get('/')
  .then(() => {
    postarTwitter(
      'O #sagres da #UESB esta online ? R: SIM. #sagresbot #sagresuesbbot'
    );
  })
  .catch(() => {
    postarTwitter(
      'O #sagres da #UESB esta online ? R: NÃO. #sagresbot #sagresuesbbot'
    );
  });

function postarTwitter(msg) {
  client.post('statuses/update', { status: msg });
}
