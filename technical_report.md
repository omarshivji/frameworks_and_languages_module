
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

Referencing
https://www.simplilearn.com/tutorials/nodejs-tutorial/what-is-express-js#:~:text=Express%20is%20a%20node%20js,helps%20manage%20servers%20and%20routes.
https://expressjs.com/en/guide/routing.html


### Middleware

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


Referencing
https://expressjs.com/en/guide/using-middleware.html
https://www.tutorialspoint.com/expressjs/expressjs_middleware.htm


### Debug

Debugging is the process of detecting and correcting faults or bugs in an application. It is possible to use tools such as the 'console.log()' function, the Node.js debugger, linters, and request/response tests to do this. Debugging is essential for increasing an application's stability and dependability, as well as making it easier to maintain and upgrade.

```shell
$ DEBUG=express:* node index.js
``` 
The 'DEBUG' environment variable is used to enable debugging output for a Node.js application. It can be set to a specific module name or prefix to enable debugging output for that module or group of modules. Running 'node' with the name of the script you want to debug and the DEBUG environment variable set will enable debugging output for the Express.js application. This can help to identify problems in the code.

References
https://expressjs.com/en/guide/debugging.html
https://www.tutorialspoint.com/expressjs/expressjs_debugging.htm


Server Language Features
-----------------------

### Statement looping 

Looping statements let you to run a section of code again. Looping statements are classified into three types: 'for' loops, 'while' loops, and 'do-while' loops. Each form of loop has its own syntax and behaviour, but they all enable you to give a condition for when the loop should continue as well as a method to update the condition on each iteration.

```javascript
for (let i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
}
```
Looping is a very helpful programming feature since it allows you to execute an action on numerous objects without having to write code for each item separately. This can save you a lot of time and improve the efficiency of your code.

References:
https://www.w3schools.com/js/js_loop_for.asp
https://www.educba.com/features-of-javascript/


### Default Parameters

If the function's caller does not supply arguments for certain parameters, you can set default values for those parameters using default parameters. The '=' operator in the function declaration is used to create default parameters. When the function is used with less than the specified number of parameters, the missing values are set to undefined.

```javascript
function myFunction(x, y) {
  if (y === undefined) {
    y = 2;
  }
}
```
Default parameters are used to define default values for function parameters if the function's caller does not supply arguments for those parameters. They are defined in the function definition by using the '=' operator. Default parameters in JavaScript are helpful because they allow you to build a function with optional arguments that have default values. This can make it easier to develop code that is both versatile and user-friendly.

References:
https://www.w3schools.com/howto/howto_js_default_parameters.asp
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters


Client Framework Features
-------------------------

### Data Binding

The method by which the template and the data of the component are linked is referred to as data binding. It enables you to update the template when the data in the component changes, and vice versa.
```javascript
<div id="app">
  <p>{{ message }}</p>
  <p><input v-model="message"></p>
</div>

<script>
var myObject = new Vue({
    el: '#app',
    data: {message: 'Hello Vue!'}
})
</script>
```
This establishes a two-way data connection between an input field and a message, allowing the user to easily update the message and see the changes reflected in real-time. The Vue instance may keep track of the value of the input field and update the displayed message if the value changes by using the 'v-model' directive to tie the value of the input field to the 'message' property. 

References:
https://www.w3schools.com/whatis/whatis_vue.asp
https://www.tutorialspoint.com/vuejs/vuejs_overview.htm


### Virtual DOM

The Virtual DOM is a lightweight in-memory replica of the real DOM. It is used to optimise DOM updates by reducing the amount of DOM operations necessary. Vue.js refreshes the Virtual DOM in reaction to data changes, and the Virtual DOM then efficiently updates the real DOM.

```javascript
const vnode = {
  type: 'div',
  props: {
    id: 'hello'
  },
  children: [
    /* more vnodes */
  ]
}
```
The objective of this vnode is to define a DOM element with the type "div" and the prop "id" with the value "hello." This vnode may also have child vnodes, which represent any child elements that the div element may have; the problem this is attempting to solve is efficient DOM update.

Reference:
https://vuejs.org/guide/extras/rendering-mechanism.html
https://www.tutorialspoint.com/vuejs/vuejs_overview.htm


### Routing

The process of mapping URLs to components is referred to as routing. The router looks for a related component to show when a user navigates to a given URL in a Vue.js application. This enables you to create single-page applications (SPAs) with several "pages" that are just various components that are displayed dependent on the current URL.

```javascript
<script>
import Home from './Home.vue'
import About from './About.vue'
import NotFound from './NotFound.vue'

const routes = {
  '/': Home,
  '/about': About
}

export default {
  data() {
    return {
      currentPath: window.location.hash
    }
  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || '/'] || NotFound
    }
  },
  mounted() {
    window.addEventListener('hashchange', () => {
		  this.currentPath = window.location.hash
		})
  }
}
</script>

<template>
  <a href="#/">Home</a> |
  <a href="#/about">About</a> |
  <a href="#/non-existent-path">Broken Link</a>
  <component :is="currentView" />
</template>
```

In this code, basic routing is implemented by mapping URLs to components and displaying the relevant component based on the current URL. It detects changes to the URL via an event listener and modifies the current component appropriately. It also offers a collection of links that browse to distinct routes by using the # symbol in the href property.

References:
https://vuejs.org/guide/scaling-up/routing.html
https://www.geeksforgeeks.org/how-to-use-routing-in-vue-js/


Client Language Features
------------------------

### Declaring Variables

Variables can be declared with the keywords 'var', which was used between 1995 till 2015 until there was an update which added 'let', or 'const'. 'var' declares a variable that can be re-declared and updated and is scoped to the nearest function or the global scope. 'let' defines a variable that is scoped to the next block and may be redefined and changed. const' declares a read-only variable that must be initialised and is scoped to the next block. It is typically advised to use const for variables that do not need to be changed and 'let' for variables that do.

```javascript
  const { createApp } = Vue
  const DEFAULT_API = '/api/v1';
  const urlParams = new URLSearchParams(window.location.search);
  const urlAPI = (urlParams.get('api') || '/api/v1').replace(/\/$/, '');
  ```
'const' is used in JavaScript to specify read-only variables that cannot be re-assigned. Using 'const' can assist prevent unintentional or purposeful reassignments in your code, which can lead to problems or unexpected behaviour. It also indicates to other developers who are viewing your code that the value of a 'const' variable should not be changed.

References:
https://www.w3schools.com/js/js_variables.asp
https://www.scaler.com/topics/javascript/difference-between-var-let-and-const/

### Async Processing

Async processing refers to running code asynchronously, which indicates that the code is non-blocking and does not wait for a job to finish before going on to the next task. Async processing is often accomplished using promises or async/await syntax. It is beneficial for boosting web application speed by enabling the browser to conduct other activities while waiting for a blocking operation to finish.

 ```javascript
deleteItem(item_id){
            fetch(`${url}/item/${item_id}`,{
                method: 'DELETE',
            })
            .then(json => console.log('deleteItem()', json))
            .then(this.get_ITEMS)
            .catch(err => console.error(err));
        }
 ```
This method allows the browser to continue performing other operations while awaiting the completion of a blocking task (such as a network request).

References:
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing


Critique of Server/Client prototype
---------------------

### Issues with error codes

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
Not all the status codes have been identified. Only 12 out of 16 HTTP codes have been stated. This can cause significant issues as the program will not be able to work accordingly if there are HTTP codes missing, such as 302 (Temporary Redirect), 503 (Service Unavailable), and 409 (Conflict).

References:
https://www.infidigit.com/blog/http-status-codes/
https://moz.com/learn/seo/http-status-codes
https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml


### Issue with loop

```python
def serve_app(func_app, port, host=''):
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        s.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
        s.bind((host, port))
        while True:
            s.listen()
            try:
                conn, addr = s.accept()
            except KeyboardInterrupt as ex:
                break
            with conn:
                #log.debug(f'Connected by ')
                #while True:
                    data = conn.recv(65535)  # If the request does not come though in a single recv/packet then this server will fail and will not composit multiple TCP packets. Sometimes the head and the body are sent in sequential packets. This happens when the system switches task under load.
                    #if not data: break
                    try:
                        request = parse_request(data)
                    except InvalidHTTPRequest as ex:
                        log.exception("InvalidHTTPRequest")
                        continue
```

There is an infinite loop that listens for and analyses incoming connections 'while true, but there is no mechanism in place to stop the loop. This might result in the application running endlessly.


Future Technology Suggestions
-----------------------------

### NoSQL

NoSQL databases are frequently used to store and manage large amounts of unstructured or semi-structured data, such as social media data, IoT data, log data, and other types of data. They are intended to be scalable, adaptable, and capable of handling high levels of concurrency and data ingestion. There are a variety of reasons why this may or may not be advantageous. A few advantages include flexible scalability, requiring less code, making it simpler, and requiring less database maintenance. However, there are some drawbacks, such as the fact that NoSQL cannot scale on its own because that is not how it was designed, and the cost can be quite high.


References:
https://www.adservio.fr/post/what-are-the-pros-and-cons-of-nosql
https://pandorafms.com/blog/nosql-vs-sql-key-differences/
https://www.computerworld.com/article/2510868/nosql-offers-scalability--flexibility--speed.html


### Serverless Architecture

Serverless architecture is a method of developing and deploying applications and services without the need for infrastructure management. This eliminates the need to provision, scale, or maintain servers in order to run your applications, databases, or services. Amazon have implemented this feature in one of its AWS services called Lambda. There are numerous reasons why this may or may not be beneficial. One of the advantages is that the user only pays for what is used and not for any unused machines or servers. A disadvantage could be the user's loss of control., this is due to the lack of a software stack on which the code is running, and if any contingencies or faults occur, the cloud server is reliant on to fix them.

References: 
https://www.datadoghq.com/knowledge-center/serverless-architecture/
https://martinfowler.com/articles/serverless.html
https://www.serverless.com/blog/serverless-architecture
https://aws.amazon.com/serverless/



### Artificial Intelligence and Machine Learning

Artificial intelligence (AI) is a broad field that involves the development of machines or software capable of intelligent behaviour. This can include learning, problem-solving, decision-making, and other activities. Machine learning (ML) is a subset of artificial intelligence (AI) that entails the use of algorithms and statistical models to allow computers to "learn" and make decisions without being explicitly programmed. On data sets, ML algorithms can be trained to recognise patterns and make predictions or decisions. Image and speech recognition, language translation, recommendation systems, and other applications are all possible with AI and ML. They are used in many industries, including healthcare, finance, and e-commerce. 

There are many advantages and disadvantages to using AI and ML. The advantages include the efficiency of using both to speed up tasks and processes, the accuracy both provide based on patterns and trends, and personalisation, where both machines can be influenced on how they perform based on user data. Unemployment is a major disadvantage of both technologies. Machines will eventually replace humans and be able to perform certain tasks effectively. Another disadvantage is that these systems can be hacked, resulting in data breaches.



References:
https://www.ibm.com/uk-en/topics/artificial-intelligence
https://ai.engineering.columbia.edu/ai-vs-machine-learning/
https://www.sas.com/en_us/insights/articles/big-data/artificial-intelligence-machine-learning-deep-learning-and-beyond.html
https://www.ibm.com/topics/machine-learning
https://data-flair.training/blogs/advantages-and-disadvantages-of-machine-learning/


