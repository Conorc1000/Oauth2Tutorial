# OAuth2 Tutorial

The following is a walkthrough to set up a simple OAuth2 authenticated application.

Come join our chat to discuss cookies and authentication!

[![Join the chat at https://gitter.im/Conorc1000/Oauth2Tutorial](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/Conorc1000/Oauth2Tutorial?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

1) Add a **developer application** on Github and give the URL of your page to generate client id (use your localhost address as your homepage URL for now). Set ‘authorisation callback URL’ to the page you want the user to be redirected to *after* they have logged in. Once you have done this, github will generate a **client ID** and **client secret**

2) Require ```http``` and ```https``` and create a global empty object called sessions:

> ```var sessions = {};```

3) Set up your handler and run your server

4) Create a login link for your ‘/’ url:

> ```res.end('<a href=https://github.com/login/oauth/authorize? clientid=YourClientID><LOGIN</a>’)```

4) require ```querystring``` and create a ```postData``` variable which holds your id, secret and code. Remember to put your client id and client secret in a ```config.env``` file!

5) Create an https request to github with the *hostname*, *path* and *method* and an anonymous function for the response. This function should retrieve the access token from the github chunk

6) We created a cookie using a random number between 1 and 100 million, but there are better ways to make a cookie :cookie:

7) Set a key-value pair in your ```sessions``` object which corresponds to the cookie :cookie: and ```accessToken```

8) Set your created cookie within your ```res.writeHead```

9) End your respose with ```(‘logged in’)```

10) use the  ```.end``` method after the ```https request``` and give it ```(postData)``` as a parameter
