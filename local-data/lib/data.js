const path = require('path')
const Datastore = require('nedb')

let lib = {}

lib.baseDir = path.join(__dirname, '../.data/')

const defaultData = {
  profiles: [
    {
      name: "default",
      screens: []
    }
  ]
}

const loadShows = new Promise((resolve, reject) => {
  // for saving profiles (set of screens designed/configured for different shows)
  lib.shows = new Datastore({ filename: path.join(lib.baseDir, 'shows.db'), autoload: true }, error => {
    if(!error) resolve()
    else reject('Could not load shows. Error: ', error)
  })
})

const loadScreens = new Promise((resolve, reject) => {
  // for saving screen settings (list of component settings)
  lib.screens = new Datastore({ filename: path.join(lib.baseDir, 'screens.db'), autoload: true }, error => {
    if(!error) resolve()
    else reject('Could not load screens. Error: ', error)
  })
})

const loadComponents = new Promise((resolve, reject) => {
  // for saving components (default settings for each component)
  lib.components = new Datastore({ filename: path.join(lib.baseDir, 'components.db'), autoload: true }, error => {
    if(!error) resolve()
    else reject('Could not load components. Error: ', error)
  })
})

// This will make the data accessible to routes. 
lib.init = () => {
  return Promise.all([loadComponents, loadShows, loadScreens])
}

module.exports = lib
