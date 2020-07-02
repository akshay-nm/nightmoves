const router = require('express').Router()
const debug = require('util').debuglog('shows-route')

let shows = require('../lib/data').shows

// body:name(unique)
// query: -
// params: -
// headers: 'Content-Type': 'application/json'
// return: doc
router.post('/', (req, res) => {
  debug('------SHOWS:POST------')
  let info = req.body.info
  if(info)
    shows.find({ info: { name: info.name } }, (err, docs) => {
      if(!err && doc) {
        if(docs.length === 0) {
          shows.insert({
            name,
            screens: []
          }, (error, newDoc) => {
            if(!error && newDoc) {
              res.json(newDoc)
            } else {
              debug('Error trying to add the show:', error)
              res.sendStatus(500)
            }
          })
        } else {
          debug('Error trying to add the show: The show already exists.')
          res.sendStatus(400)
        }
      } else {
        debug('Error trying to find the show by name during post:', err)
        res.sendStatus(500)
      }
    })
  else {
    debug('Missing or invalid parameters while creating show.')
    res.sendStatus(400)
  }
})

// body: -
// query: -
// params: showId
// headers: 'Content-Type': 'application/json'
// return doc
router.get('/:showId', (req, res) => {
  debug('------SHOWS:GET------')
  if(req.params.showId.length === 16) {
    shows.findOne({ _id: req.params.showId }, (error, doc) => {
      if(!error) {
        if(doc) res.json(doc)
        else res.sendStatus(404)
      } else {
        debug('Error trying to get show by ID: ', error)
        res.sendStatus(500)
      }
    })
  } else {
    shows.find({}, (error, docs) => {
      if(!error && docs) {
        res.json(docs)
      } else {
        debug('Error trying to get all shows: ', error)
        res.sendStatus(500)
      }
    })
  }
  res.sendStatus(200)
})

// body: _id, name
// query: -
// params: -
// headers: 'Content-Type': 'application/json'
// return: -

router.put('/', (req, res) => {
  debug('------SHOWS:PUT------')
  let _id = typeof req.body._id === 'string' && req.body._id.length === 16 ? req.body._id : false
  let info = req.body.info

  if(_id && info) {
    shows.update({ _id }, { $set: { info } }, {},(error, numReplaced) => {
      if(!error) {
        res.sendStatus(200)
      } else {
        debug('Error trying to update show: ', error)
        res.sendStatus(500)
      }
    })
  } else {
    debug('Missing or invalid arguments while editing show.')
    res.sendStatus(400)
  }
  res.sendStatus(200)
})

// body: -
// query: -
// params: showId
// headers: 'Content-Type': 'application/json'
// return: doc
router.delete('/:showId', (req, res) => {
  debug('------SHOWS:DELETE------')
  if(req.params.showId === 16) {
    shows.remove({ _id }, {}, (error, numRemoved) => {
      if(!error) res.sendStatus(numRemoved? 200: 404)
      else {
        debug('Error trying to remove show: ', error)
        res.sendStatus(500)
      }
    })
  } else {
    debug('Missing or invalid params.')
    res.sendStatus(400)
  }
})

module.exports = router
