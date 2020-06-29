const path = require('path')
const fs = require('fs')
const Datastore = require('nedb')

let lib = {}

lib.baseDir = path.join(__dirname, '../.data')

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

// Datastore initialization
lib.init = () => {
  // check if the .data directory exists
  return new Promise((resolve, reject) => {
    fs.stat(lib.baseDir, (error, stats) => {
      if(!error)
        if(!stats.isDirectory()) {
          fs.mkdir(lib.baseDir, (err) => {
            if(!err) resolve()
            else reject('Could not create the data directory.')
          })
        } else resolve()
      else reject('Error trying to get data directory stats: ', error)
    })
  }).then(() => Promise.all([loadComponents, loadShows, loadScreens]))
}

module.exports = lib
