const express = require('express')
const app = express()
const port = 4000

app.get('/shows', (req, res) => res.send('Did you just Get something?'))

app.post('/shows', (req, res) => res.send('Hey! You just Post things whenever you feel like it don\'t you?'))

app.put('/shows', (req, res) => res.send('Oh sure, now you\'re putting things?'))

app.delete('/shows', (req,res) => res.send('Beleted... I mean Deleted.'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))