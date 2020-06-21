const _data = require('../../lib/data')

module.exports = (req, res) => {
  // read all settings file and return results
  if (req.method === 'POST') {
    // Process a POST request
    // Update the settings
    // get the body, a file for each entry in the array
    if(req.body) {
      let promises = []
      req.body.map(settingsObject => {
        promises.push(_data.update('settings', settingsObject.settingsFor, settingsObject))
      })
      return Promise.all(promises).then(() => {
        console.log('settings updated')
        res.status(200).end()
      }).catch(e => {
        console.log('error: ', e)
        res.status(500).end()
      })
    } else {
      res.status(400).end()
    }
  } else {
    // Handle any other HTTP method
    return _data.getAllFileName('settings').then(fileNames => {
      let promises = []
      fileNames.map(fileName => {
        promises.push(_data.read('settings', fileName.replace('.json', '')))
      })
      return promises
    }).then(reads => {
      return Promise.all(reads)
    }).then(settingsData => {
      console.log('data: ', settingsData)
      res.status(200).json(settingsData)
    }).catch(e => {
      console.log('error:', e)
      res.status(500).end()
    })
  }
  
}