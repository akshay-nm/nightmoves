const _data = require('../../../lib/data')

export default (req, res) => {
  const { query: {component} } = req 

  return _data.getAllFileName('settings').then(components => {
    switch(components.filter(comp => comp.replace('.json','') === component).length) {
      case 0:
        console.log('No matching component found.')
        req.status(400).end()
        break;
      case 1: 
        return _data.read('settings', component).then(data => {
          res.status(200).json(data)
        }).catch(e => {
          console.log(e)
          res.status(500).end()
        })
      default:
        console.log('More than one matching component found.')
        req.status(500).end()
    }
  }).catch(e => {
    console.log(e)
    res.status(500).end()
  })
}