const router = require('express').Router()

router.post('/', (req, res) => {
  console.log('------COMPONENTS:POST------')
  res.sendStatus(200)
})
router.get('/', (req, res) => {
  console.log('------COMPONENTS:GET------')
  res.sendStatus(200)
})
router.put('/', (req, res) => {
  console.log('------COMPONENTS:PUT------')
  res.sendStatus(200)
})
router.delete('/', (req, res) => {
  console.log('------COMPONENTS:DELETE------')
  res.sendStatus(200)
})

module.exports = router
