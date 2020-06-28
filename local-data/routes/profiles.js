const router = require('express').Router()

router.post('/', (req, res) => {
  console.log('------PROFILES:POST------')
  res.sendStatus(200)
})
router.get('/', (req, res) => {
  console.log('------PROFILES:GET------')
  res.sendStatus(200)
})
router.put('/', (req, res) => {
  console.log('------PROFILES:PUT------')
  res.sendStatus(200)
})
router.delete('/', (req, res) => {
  console.log('------PROFILES:DELETE------')
  res.sendStatus(200)
})

module.exports = router
