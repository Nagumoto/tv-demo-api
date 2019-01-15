const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 4000

app.use(bodyParser.json())

app.route('/') 
    .get((req, res) => {
        console.log('Welcome! Are you ready to begin?')
        res.send('Welcome! Are you ready to begin?')})

app.route('/shows')
    .get((res) => {
        console.log('Did you just Get something?')
        res.send('Did you just Get something?')})
    .post((req, res) => { 
        console.log('Hey! You just Post things whenever you feel like it don\'t you?')
        res.send({
            body:req.body,
            response:'Hey! You just Post things whenever you feel like it don\'t you?'})})
    .put((req, res) => {
        console.log('Oh sure, now you\'re putting things?')
        res.send({
            body:req.body,
            response:'Oh sure, now you\'re putting things?'})})
app.delete('/shows/:name', (req, res) => res.send('Beleted... I mean deleted.'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))