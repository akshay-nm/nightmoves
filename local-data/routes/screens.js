const router = require('express').Router()
let screens = require('../lib/data').screens

// body:name(unique)
// query: -
// params: -
// headers: 'Content-Type': 'application/json'
// return: doc
router.post('/', (req, res) => {
  console.log('------SCREENS:POST------')
  let info = req.body.info
  if(info)
    screens.find({ info: { name: info.name } }, (err, docs) => {
      if(!err && doc) {
        if(docs.length === 0) {
          screens.insert({
            name,
            screens: []
          }, (error, newDoc) => {
            if(!error && newDoc) {
              res.json(newDoc)
            } else {
              console.log('Error trying to add the screen:', error)
              res.sendStatus(500)
            }
          })
        } else {
          console.log('Error trying to add the screen: The screen already exists.')
          res.sendStatus(400)
        }
      } else {
        console.log('Error trying to find the screen by name during post:', err)
        res.sendStatus(500)
      }
    })
  else {
    console.log('Missing or invalid parameters while creating screen.')
    res.sendStatus(400)
  }
})

// body: -
// query: -
// params: screenId
// headers: 'Content-Type': 'application/json'
// return: doc
router.get('/:screenId', (req, res) => {
  console.log('------SCREENS:GET------')
  if(req.params.screenId.length === 16) {
    screens.findOne({ _id: req.params.screenId }, (error, doc) => {
      if(!error) {
        if(doc) res.json(doc)
        else res.sendStatus(404)
      } else {
        console.log('Error trying to get screen by ID: ', error)
        res.sendStatus(500)
      }
    })
  } else {
    screens.find({}, (error, docs) => {
      if(!error && docs) {
        res.json(docs)
      } else {
        console.log('Error trying to get all screens: ', error)
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
  console.log('------SCREENS:PUT------')
  let _id = typeof req.body._id === 'string' && req.body._id.length === 16 ? req.body._id : false
  let info = req.body.info

  if(_id && info) {
    screens.update({ _id }, { $set: { info } }, {},(error, numReplaced) => {
      if(!error) {
        res.sendStatus(200)
      } else {
        console.log('Error trying to update screen: ', error)
        res.sendStatus(500)
      }
    })
  } else {
    console.log('Missing or invalid arguments while editing screen.')
    res.sendStatus(400)
  }
  res.sendStatus(200)
})

// body: 
// query: -
// params: screenId
// headers: 'Content-Type': 'application/json'
// return: -
router.delete('/:screenId', (req, res) => {
  console.log('------SCREENS:DELETE------')
  if(req.params.screenId === 16) {
    screens.remove({ _id }, {}, (error, numRemoved) => {
      if(!error) res.sendStatus(numRemoved? 200: 404)
      else {
        console.log('Error trying to remove screen: ', error)
        res.sendStatus(500)
      }
    })
  } else {
    console.log('Missing or invalid params.')
    res.sendStatus(400)
  }
})

module.exports = router
