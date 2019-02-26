const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const db = require('monk')('mongodb://admin:password1@ds048878.mlab.com:48878/tv-demo-project')
const tvShowsCollection = db.get('tvShows')
const port = process.env.PORT || 4000
const tvShows = []

app.use(bodyParser.json())

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://glacial-lowlands-35572.herokuapp.com/')
    // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
    res.setHeader('Access-Control-Allow-Credentials', true)
    next()
})

// app.route('/') 
//     .get( async (req, res) => {
//         try {
//         const tvShow = await tvShowsCollection.find(req.params.id)
//         res.send(tvShow)

//         // console.log('Welcome! Are you ready to begin?')
//         // res.send('Welcome! Are you ready to begin?')
//     } catch(err) {
//         console.log(err)
//     }
//     })
    
app.route('/shows')
    .get( async (req, res) => {
        try {
        const tvShow = await tvShowsCollection.find(req.params._id)
        res.send(tvShow)

        // console.log('Did you just Get something?', tvShows)
        // res.json(tvShows)
        } catch(err) {
            console.log(err)
        }
        })
    .post( async (req, res) => {
        tvShowsCollection.insert(req.body)
        tvShows.push(req.body)
        console.log('Hey! You just Post things whenever you feel like it don\'t you?', tvShows)
        res.send(res.json(tvShows))})
    .put((req, res) => {
        console.log('Oh sure, now you\'re putting things?')
        res.send(req.body)})
app.delete('/shows/:name', (req, res) => res.send('Beleted... I mean deleted.'))



app.listen(port, () => console.log(`Example app listening on port ${port}!`))