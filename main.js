var http = require('http');
var https = require('https');
var fs = require ('fs');
var querystring = require('querystring');
var env = require('env2')('./config.env');
var sessions = {};


function handler (req, res){
  if (req.url === '/'){
    res.end('<a href=https://github.com/login/oauth/authorize?client_id=3704f4fe34f8b65350b3>DANGER!!! RESTRICTED AREA AUTHORISED ACCESS ONLY, ENTER AT OWN RISK</a>');
  }else if(req.url.match('/login')){
    loginHandler(req,res);
  }
}

function loginHandler(req,res){
  console.log('im in the loginhandler');
  var code = req.url.split('code=')[1];
  var postData = querystring.stringify({
    client_id: process.env.client_id,
    client_secret: process.env.client_secret,
    code: code
  });
  https.request({
    hostname: 'github.com',
    path: '/login/oauth/access_token',
    method: 'POST'
  }, function(responseFromGithub) {
    console.log('im in the github response:---->'+responseFromGithub);
    responseFromGithub.on('data', function(chunk) {
      var accessToken = chunk.toString().split('access_token=')[1].split('&')[0];
      console.log(accessToken);
      var cookie = Math.floor(Math.random() * 100000000);
      sessions[cookie] = accessToken;
      console.log(sessions);
      res.writeHead(200, { "Set-Cookie": 'access=' + cookie });
      res.end('Logged in');
    });
  }).end(postData);
}



http.createServer(handler).listen(2000);
console.log('listening on 2000');
