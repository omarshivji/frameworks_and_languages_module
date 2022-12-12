# Programming languages and frameworks

### Omar Shivji

### Digital Artefact

### MCOMD3PFL


## How to run Server

To get to the directory of server and run on selected port. Run the following command line in terminal:

```console
cd server

make build

make run
```
### Testing server
To test server, open a new terminal and run the following commands lines (server must be running):

```console
cd test_server

pytest
```
All tests will be run on the server and will be displayed on the terminal.
## How to run Client

To get to the direct directory of client, and run on selected port. Run the following command line in terminal:

```console
cd client

make build

make run
```
### Testing Client

To test the client, (close both server and client ports in terminals with CTRL+C), open a new terminal and run the following command:

```console
make test_client
```
This will test the client and implement the server with it. The tests results will be located in the "test_client" directory.

### Client and Server
To view the app, the client will need to linked with the server. Use the query param  ```?api=``` in between the client and server link:

https://8001-xxxx.ws-eu67.gitpod.io?api=https://8000-xxxxx.ws-eu67.gitpod.io




