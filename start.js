var http = ;
var https = ;
var querystring = ;
var env = ;
var sessions = ;

function handler (req, res){
  if (req.url === '/'){
    //end response with html link to github authorisation page
  }else if(req.url.match('/login')){
    //call the login handler function
  }
}

function loginHandler(req,res){
  var code = //extract the code from the url
  var postData = querystring.stringify({
    client_id: //get the client id from the congiv.env
    client_secret: //get the client secret from the congiv.env
    code: code
  });
  https.request({
    //set up the request object
  }, function(responseFromGithub) {
    responseFromGithub.on('data', function(chunk) {
      var accessToken = //extract access token from chunk
      var cookie = //set cookie as random integer
      sessions[cookie] = accessToken;
      //write the head of the response, also set cookie in header
      //end response
    });
  }).end(postData);
}

//create server
//log the port the server is listening on
