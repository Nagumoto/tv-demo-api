const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const db = require('monk')('mongodb://admin:password1@ds048878.mlab.com:48878/tv-demo-project')
const tvShowsCollection = db.get('tvShows')
const port = process.env.PORT || 4000
const tvShows = []

app.use(bodyParser.json())

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
    res.setHeader('Access-Control-Allow-Credentials', true)
    next()
})

app.route('/shows')
    .get(async (req, res) => {
        try {
            const tvShow = await tvShowsCollection.find(req.params._id)
            res.send(tvShow)
        } catch (err) {
            console.log(err)
        }
    })
    .post(async (req, res) => {
        tvShowsCollection.insert(req.body)
        tvShows.push(req.body)
        res.send(tvShows)
    })

app.route('/shows/:_id')
    .delete(async (req, res) => {
        try {
            await tvShowsCollection.remove(req.params._id)
        } catch (err) {
            console.log(err)
        }
    })
    .put(async (req, res) => {
        try {
            await tvShowsCollection.update(req.params._id, req.body)
        } catch (err) {
            console.log(err)
        }
    })



app.listen(port, () => console.log(`Example app listening on port ${port}!`))