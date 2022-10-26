const express = require('express')
const app = express()
const port = 8000

app.use(express.json());

ATTENDEES = []

app.get('/', (req, res) => {
  res.send('<html><body>Your HTML text</body></html>')
})

app.post('/attendee', (req, res) => {
  ATTENDEES.push(req.body)
  res.status(201).json(req.body)
})

app.get('/attendees', (req, res) => {
  res.json(ATTENDEES)
})

app.delete('/attendee/:id', (req, res) => {
  //console.log('Delete!', req.params.id, 123)
  ATTENDEES = ATTENDEES.filter(o => o.id !== parseFloat(req.params.id))
  res.status(204).json()
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

process.on('SIGINT', function() {process.exit()})