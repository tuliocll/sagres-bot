var http = require('http');
var Twitter = require('twitter');
require('dotenv/config');

var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

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
