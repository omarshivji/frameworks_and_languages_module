const express = require('express')
const app = express()
const port = 8000
var cors = require('cors')


app.use(express.json()); 

//Implementing and enabling CORS 

app.use(cors({
  origin: "https://8000-omarshivji-frameworksan-rzzl8kp72gm.ws-eu75.gitpod.io",
  methods: ['POST','GET','OPTIONS','DELETE'],
}));

// Using dictionary for object items

var ITEMS = {
  1: {
      "id": 1,
      "user_id": "user1234",
      "keywords": ["hammer", "nails", "tools"],
      "description": "A hammer and nails set",
      "lat": 51.2798438,
      "lon": 1.0830275,
      "date_from": "2021-11-22T08:22:39.067408",
  },
  2: {
    "id": 2,
      "user_id": "user1546",
      "keywords": ["hammer", "nails", "tools"],
      "description": "A hammer and nails set",
      "lat": 1,
      "lon": 1,
      "date_from": "2021-11-22T08:22:39.067408",
  }
}

// POST
/* app.post('/item', (req, res) => {
  if(isNaN(req.body.id)){
    res.status(405).json(req.body)
  }else{
    ITEMS.push(req.body)
    res.status(201).json(req.body)
  }
})
*/
// POST
app.post('/item', (req, res) => {
  const itemID = Object.keys(ITEMS).length +1
  const newDate = new Date().toJSON().slice(0,10)
  if(ITEMS.hasOwnProperty(itemID)){
    itemID = itemID + 1
  }
  if (req.body.user_id && req.body.keywords && req.body.description && req.body.lat && req.body.lon !==""){
    ITEMS[itemID] = {
      id: itemID,
      user_id: req.body.user_id,
      keywords: req.body.keywords,
      description: req.body.description,
      lat: req.body.lat,
      lon: req.body.lon,
      date_from: newDate ,
      date_to: newDate
    }
    res.status(201).json(ITEMS[itemID])
  }
  else {
    res.status(405).json("Missing field")
  }
})
  

// GET
app.get('/', (req, res) => {
    res.send('<html><body>Your Items</body></html>')
  })
  
app.get('/item', (req, res)=> {
  let uITEMS = ITEMS.filter(o => o.id !== req.params.id)
  if (parseInt(Object.keys(ITEMS)).length>0) 
  {
    res.status(200).json(Object.values(ITEMS))
  }
  else{
    res.status(404).json("This user cannot be found.")
  }
})
  
  app.get('/items', (req, res) => {
    res.send(ITEMS)
  })
  





app.delete('/items/:itemsId', (req, res) => {
  console.log('Deleted', req.params.id)
  let uITEMS = ITEMS.filter(o => o.id !== req.params.id)
  res.status(204).json()
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
  // Exit
process.on('SIGINT', function() {process.exit()})