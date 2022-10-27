const express = require('express')
const app = express()
const port = 8000

app.use(express.json());

ITEMS = []

app.get('/', (req, res) => {
    res.send('<html><body>Your Items</body></html>')
  })


  app.post('/item', (req, res) => {
    ITEMS.push(req.body)
    res.status(201).json(req.body)
  })

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
  
  process.on('SIGINT', function() {process.exit()})