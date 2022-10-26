const express = require('express')
const app = express()
const port = 8000

app.get('/', (req, res) => {
  res.send('<html><body>Your HTML text</body></html>')
})

app.post('/attendee/', (req, res) => {
  ATTENDEES.push(req.body)
  res.status(201).json(req.body)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

process.on('SIGINT', function() {process.exit()})