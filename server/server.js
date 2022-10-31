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

app.get('/items', (req, res) => {
  res.json(ITEMS)
})

app.delete('/item/:itemId', (req, res) => {
  console.log('Deleted', req.params.id)
  ITEMS = ITEMS.filter(o => o.id !== req.params.id)
  res.status(204).json()
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


  
process.on('SIGINT', function() {process.exit()})