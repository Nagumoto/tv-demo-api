const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 4000

app.use(bodyParser.json())

app.route('/') 
    .get((res) => {
        console.log('Welcome! Are you ready to begin?')
        res.send('Welcome! Are you ready to begin?')})

let tvShows = [{
    "name": "The Guild",
    "rating": "3",
    "image": "http://pop-verse.com/wp-content/uploads/2013/02/theguild.jpg"
  }]

app.route('/shows')
    .get((req, res) => {
        console.log('Did you just Get something?')
        res.json(tvShows)
        })
    .post((req, res) => {
        console.log('Hey! You just Post things whenever you feel like it don\'t you?')
        res.send(res.json(tvShows))})
    .put((req, res) => {
        console.log('Oh sure, now you\'re putting things?')
        res.send({
            body:req.body,
            response:'Oh sure, now you\'re putting things?'})})
app.delete('/shows/:name', (req, res) => res.send('Beleted... I mean deleted.'))



app.listen(port, () => console.log(`Example app listening on port ${port}!`))