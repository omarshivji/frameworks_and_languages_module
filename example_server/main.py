import logging

from app.server import app
from app.http_server import serve_app

log = logging.getLogger(__name__)

if __name__ == "__main__": 
    logging.basicConfig(level=logging.INFO) # routing is handled? could be permalink 
    PORT = 8000 # port identified
    log.info(f'Start server on {PORT}')
    serve_app(app, port=PORT) # serving the server on the port, PORT has app and port in it

