const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const db = require('monk')('mongodb://admin:password1@ds048878.mlab.com:48878/tv-demo-project')
const tvShowsCollection = db.get('tvShows')
const port = process.env.PORT || 4000

app.use(bodyParser.json())

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Mode')
    res.setHeader('Access-Control-Allow-Credentials', true)
    next()
})

app.route('/shows')
    .get(async (req, res) => {
        try {
            const tvShows = await tvShowsCollection.find()
            res.send(tvShows)
        } catch (err) {
            console.log(err)
        }
    })
    .post(async (req, res) => {
        try {
        tvShowsCollection.insert(req.body)
        const tvShows = await tvShowsCollection.find()
        res.send(tvShows)
        } catch (err) {
            console.log(err)
        }
    })

app.route('/shows/:_id')
    .delete(async (req, res) => {
        try {
            await tvShowsCollection.remove(req.params._id)
            .then(res.send(await tvShowsCollection.find()))
        } catch (err) {
            console.log(err)
        }
    })
    .put(async (req, res) => {
        try {
            await tvShowsCollection.update(req.params._id, req.body)
            .then(res.send(req.body))
        } catch (err) {
            console.log(err)
        }
    })



app.listen(port, () => console.log(`Example app listening on port ${port}!`))