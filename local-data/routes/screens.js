const router = require('express').Router()

router.post('/', (req, res) => {
  console.log('------SCREENS:POST------')
  res.sendStatus(200)
})
router.get('/', (req, res) => {
  console.log('------SCREENS:GET------')
  res.sendStatus(200)
})
router.put('/', (req, res) => {
  console.log('------SCREENS:PUT------')
  res.sendStatus(200)
})
router.delete('/', (req, res) => {
  console.log('------SCREENS:DELETE------')
  res.sendStatus(200)
})

module.exports = router
