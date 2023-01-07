
Technical Report

================

  

(intro)

  
  

Server Framework Features

-------------------------


### Routing


An application's routing describes how its endpoints (URIs) are connected with a specific function that is invoked when a client requests that endpoint. Routing is an integral part of every web application, as it directs incoming requests to the correct controllers or handlers.

``` javascript
const  express = require('express')

const  app = express()

// GET

app.get('/', (req, res) => {

res.send('<html><body>Your Items</body></html>')

})
```

This code creates a route that will handle GET requests to the root path ('/'). When a client makes a GET request to this route, the callback function is called and an HTML document with the text "Your Items" is returned to the client.

(https://www.simplilearn.com/tutorials/nodejs-tutorial/what-is-express-js#:~:text=Express%20is%20a%20node%20js,helps%20manage%20servers%20and%20routes.

https://expressjs.com/en/guide/routing.html)


### (Middleware)

Middleware functions have access to the request and response objects, as well as the next function in the request-response cycle of the application. Middleware methods may be used to do things like parse request contents, add CORS headers, log requests, and more.

```javascript
const  express = require('express')

const  app = express()


app.use((req, res, next) => {

console.log('Time:', Date.now())

next()

})
```

The 'app.use()' function is used to register the middleware function, which will apply it to all routes in the application. The 'next' function is a specific function supplied to middleware functions that is used to transmit control to the next middleware function in the request-response cycle of the application. If the middleware function does not call 'next', the request-response cycle is terminated and the client receives no response.


(https://expressjs.com/en/guide/using-middleware.html
https://www.tutorialspoint.com/expressjs/expressjs_middleware.htm)


### Debug

Debugging is the process of detecting and correcting faults or bugs in an application. It is possible to use tools such as the 'console.log()' function, the Node.js debugger, linters, and request/response tests to do this. Debugging is essential for increasing an application's stability and dependability, as well as making it easier to maintain and upgrade.

```shell
$ DEBUG=express:* node index.js
``` 
The 'DEBUG' environment variable is used to enable debugging output for a Node.js application. It can be set to a specific module name or prefix to enable debugging output for that module or group of modules. Running 'node' with the name of the script you want to debug and the DEBUG environment variable set will enable debugging output for the Express.js application. This can help to identify problems in the code.

(https://expressjs.com/en/guide/debugging.html
https://www.tutorialspoint.com/expressjs/expressjs_debugging.htm)


Server Language Features
-----------------------

### (name of Feature 1)

(Technical description of the feature - 40ish words - 1 mark)
(A code block snippet example demonstrating the feature - 1 mark)
(Explain the problem-this-is-solving/why/benefits/problems - 40ish words - 1 mark)
(Provide reference urls to your sources of information about the feature - required)


### (name of Feature 2)

(Technical description of the feature - 40ish words - 1 mark)
(A code block snippet example demonstrating the feature - 1 mark)
(Explain the problem-this-is-solving/why/benefits/problems - 40ish words - 1 mark)
(Provide reference urls to your sources of information about the feature - required)


Client Framework Features
-------------------------

### (name of Feature 1)

(Technical description of the feature - 40ish words - 1 mark)
(A code block snippet example demonstrating the feature - 1 mark)
(Explain the problem-this-is-solving/why/benefits/problems - 40ish words - 1 mark)
(Provide reference urls to your sources of information about the feature - required)


### (name of Feature 2)

(Technical description of the feature - 40ish words - 1 mark)
(A code block snippet example demonstrating the feature - 1 mark)
(Explain the problem-this-is-solving/why/benefits/problems - 40ish words - 1 mark)
(Provide reference urls to your sources of information about the feature - required)


### (name of Feature 3)

(Technical description of the feature - 40ish words - 1 mark)
(A code block snippet example demonstrating the feature - 1 mark)
(Explain the problem-this-is-solving/why/benefits/problems - 40ish words - 1 mark)
(Provide reference urls to your sources of information about the feature - required)


Client Language Features
------------------------

### (name of Feature 1)

(Technical description of the feature - 40ish words - 1 mark)
(A code block snippet example demonstrating the feature - 1 mark)
(Explain the problem-this-is-solving/why/benefits/problems - 40ish words - 1 mark)
(Provide reference urls to your sources of information about the feature - required)

### (name of Feature 2)

(Technical description of the feature - 40ish words - 1 mark)
(A code block snippet example demonstrating the feature - 1 mark)
(Explain the problem-this-is-solving/why/benefits/problems - 40ish words - 1 mark)
(Provide reference urls to your sources of information about the feature - required)


Critique of Server/Client prototype
---------------------

### (Issue with error codes)

(A code snippet example demonstrating the feature - 1 mark)

``` python

RESPONSE_CODES = {
    200: 'OK',
    201: 'Created',
    204: 'No Content',
    301: 'Moved Permanently',
    304: 'Not Modified',
    400: 'Bad Request',
    401: 'Unauthorized',
    403: 'Forbidden',
    404: 'Not Found',
    405: 'Method Not Allowed',
    500: 'Internal Server Error',
    501: 'Not Implemented',
}
```
(Explain why this pattern is problematic - 40ish words 1 mark)

Not all the status codes have been stated. Only 12 out of the main 16 status codes have been identified. 


### (name of Issue 2)

(A code snippet example demonstrating the feature - 1 mark)
(Explain why this pattern is problematic - 40ish words 1 mark)


Future Technology Suggestions
-----------------------------

### (name of technology/feature 1)

(Description of a feature or tool - 40ish words - 1 mark)
(Why/benefits/problems with using this - 40ish words - 1 mark)
(Provide reference urls to your source of information about this technology - required)


### (name of technology/feature 2)

(Description of a feature or tool - 40ish words - 1 mark)
(Why/benefits/problems with using this - 40ish words - 1 mark)
(Provide reference urls to your source of information about this technology - required)


### (name of technology/feature 3)

(Description of a feature or tool - 40ish words - 1 mark)
(Why/benefits/problems with using this - 40ish words - 1 mark)
(Provide reference urls to your source of information about this technology - required)
