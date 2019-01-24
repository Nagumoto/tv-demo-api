const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 4000
const tvShows = []

app.use(bodyParser.json())

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.route('/') 
    .get((res) => {
        console.log('Welcome! Are you ready to begin?')
        res.send('Welcome! Are you ready to begin?')})
    
app.route('/shows')
    .get((req, res) => {
        console.log('Did you just Get something?', tvShows)
        res.json(tvShows)
        })
    .post((req, res) => {
        tvShows.push(req.body)
        console.log('Hey! You just Post things whenever you feel like it don\'t you?', tvShows)
        res.send(res.json(tvShows))})
    .put((req, res) => {
        console.log('Oh sure, now you\'re putting things?')
        res.send(req.body)})
app.delete('/shows/:name', (req, res) => res.send('Beleted... I mean deleted.'))



app.listen(port, () => console.log(`Example app listening on port ${port}!`))