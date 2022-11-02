const express = require('express')
const app = express()
const port = 8000
var cors = require('cors')

app.use(cors());

app.use(express.json());

ITEMS = {
  1: {
      "id": 1,
      "user_id": "user1234",
      "keywords": ["hammer", "nails", "tools"],
      "description": "A hammer and nails set",
      "lat": 1,
      "lon": 1,
      "date_from": "2021-11-22T08:22:39.067408",
  }
}


app.get('/', (req, res) => {
    res.send('<html><body>Your Items</body></html>')
  })
 
 app.post('/item', (req, res) => {
  if(isNaN(req.body.id)){
    res.status(405).json(req.body)
  }else{
    ITEMS.push(req.body)
    res.status(201).json(req.body)
  }
})

app.get('/items', (req, res) => {
  res.json(ITEMS)
})

app.delete('/items/:itemId', (req, res) => {
  console.log('Deleted', req.params.id)
  ITEMS = ITEMS.filter(o => o.id !== req.params.id)
  res.status(204).json()
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
  
process.on('SIGINT', function() {process.exit()})