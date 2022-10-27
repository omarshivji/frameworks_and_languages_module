const express = require('express')
const app = express()
const port = 8000

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello')
  })

  app.get('/item', (req, res) => {
   res.json('<html><body>Your Items</body></html>')
  })

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
  
  process.on('SIGINT', function() {process.exit()})