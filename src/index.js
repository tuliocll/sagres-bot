var http = require('http');
var client = require('./config/twitter');

http
  .get('http://sagres.uesb.br', function(res) {
    postarTwitter(
      'O #sagres da #UESB esta online ? R: SIM. #sagresbot #sagresuesbbot'
    );
  })
  .on('error', function(e) {
    postarTwitter(
      'O #sagres da #UESB esta online ? R: NÃO. #sagresbot #sagresuesbbot'
    );
  });

function postarTwitter(msg) {
  client.post('statuses/update', { status: msg });
}
