const express = require('express')
const app = express()
const port = 8000
var cors = require('cors')

app.use(express.json()); 

// Using dictionary for object items
// https://stackoverflow.com/questions/383692/what-is-json-and-what-is-it-used-for/383699#383699

var ITEMS = {
  0: {
      "id": 1,
      "user_id": "user1234",
      "keywords": ["hammer", "nails", "tools"],
      "description": "A hammer and nails set",
      "lat": 51.2798438,
      "lon": 1.0830275,
      "date_from": "2021-11-22T08:22:39.067408",
  },
  1: {
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
// https://medium.com/@anshurajlive/read-dictionary-data-or-convert-dictionary-into-an-array-of-objects-in-javascript-e9c52286d746
app.post('/item', (req, res) => {
  const itemID = Object.keys(ITEMS).length +1 
  const newDate = new Date().toJSON().slice(0,10)
  if(ITEMS.hasOwnProperty(itemID)){
    itemID = itemID + 1
  }
  if (req.body.user_id && req.body.keywords && req.body.description && req.body.lat && req.body.lon !==""){ // requesting from dictionary 
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
    res.status(405).json('Missing field')
    // console.log('Missing field')
  }
})
  

// GET

/*
app.get('/items', (req, res)=> {
  const uITEMS = ITEMS.filter(o => o.id !== req.params.id)
  if (parseInt(Object.keys(ITEMS)).length>0) 
  {
    res.status(200).json(Object.values(ITEMS))
  }
  else{
    res.status(404).json("This user cannot be found.")
  }
})
*/


app.get('/', (req, res) => {
    res.send('<html><body>Your Items</body></html>')
  })

 

app.get('/item/:id', (req,res) => {
  //if(Object.keys(ITEMS).includes(req.query.user_id)){
  if(ITEMS[req.params.id] === undefined){ // https://stackoverflow.com/questions/39045367/how-to-delete-on-express-without-specificate-the-whole-route (helped me figure out that if it displays undefined, then show 404 status)
    res.status(404).json('This item does not exist')
    // console.log('This item does not exist')
  } else{
    res.status(200).json(ITEMS[req.params.id])
  }
})

// Filtering username 
app.get('/items', (req,res)=> {
  if (req.query.user_id){
    res.status(200).json(Object.values(ITEMS).filter(o => o.user_id == req.query.user_id))
    return;
  }
  res.status(200).json(Object.values(ITEMS))
})
  
app.get('/items', (req, res) => {
    res.send(ITEMS)
})
  


//DELETE

/* 
app.delete('/items/:id', (req, res) => {
  console.log('Deleted', req.params.id)
  let uITEMS = ITEMS.filter(o => o.id !== req.params.id)
    res.status(204).json()

})
*/

app.delete('/item/:id', (req, res) => {
  // console.log('Deleted', req.params.id)
  let idITEMS = parseInt(req.params.id) // Getting and turning the id into an integer 
  if(ITEMS.hasOwnProperty(idITEMS))
{
  delete ITEMS[idITEMS]
  res.status(204).send('Deleted')
  // console.log('Deleted')
}  
else {
  res.status(404).send('This item cannot be found')
 // console.log('This item cannot be found')
}
})


//CORS 
// https://expressjs.com/en/resources/middleware/cors.html

app.use(cors({
  origin: "http://localhost:8000/",
  methods: ['POST','GET','OPTIONS','DELETE'],
}));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
  // Exit with CTRL + C
process.on('SIGINT', function() {process.exit()})