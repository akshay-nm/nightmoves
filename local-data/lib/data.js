const path = require('path')
const fs = require('fs')
const debug = require('util').debuglog('data-library')

const Datastore = require('nedb')

let lib = {}

lib.baseDir = path.join(__dirname, '../.data')

const loadShows = () => new Promise((resolve, reject) => {
  // for saving profiles (set of screens designed/configured for different shows)
  debug('DATA LIBRARY INITIALIZATION: initializing SHOWS collection.')
  lib.shows = new Datastore({ filename: path.join(lib.baseDir, 'shows.db') })
  debug('DATA LIBRARY INITIALIZATION: successfully initialized SHOWS collection.')
  resolve()
})

const loadScreens = () => new Promise((resolve, reject) => {
  // for saving screen settings (list of component settings)
  debug('DATA LIBRARY INITIALIZATION: initializing SCREENS collection.')
  lib.screens = new Datastore({ filename: path.join(lib.baseDir, 'screens.db') })
  debug('DATA LIBRARY INITIALIZATION: successfully initialized SCREENS collection.')
  resolve()
})

const loadComponents = () => new Promise((resolve, reject) => {
  // for saving components (default settings for each component)
  debug('DATA LIBRARY INITIALIZATION: initializing COMPONENTS collection.')
  lib.components = new Datastore({ filename: path.join(lib.baseDir, 'components.db') })
  debug('DATA LIBRARY INITIALIZATION: successfully initialized COMPONENTS collection.')
  resolve()
})

// Datastore initialization
lib.init = dir => new Promise((resolve, reject) => {
  if(dir) lib.baseDir = path.join(__dirname, '../', dir)
  debug('DATA LIBRARY INITIALIZATION: working directory - ', lib.baseDir)
  fs.stat(lib.baseDir, (error, stats) => {
    if(!error){
      debug('DATA LIBRARY INITIALIZATION: successfully retrieved file stats.')
      if(!stats.isDirectory()) {
        debug('DATA LIBRARY INITIALIZATION: the base directory does not exist. Creating base directory now.')
        fs.mkdir(lib.baseDir, (err) => {
          if(!err) {
            debug('DATA LIBRARY INITIALIZATION: base directory created successfully.')
            resolve()
          } else reject('Could not create the data directory.')
        })
      } else resolve()
    } else {
      debug('DATA LIBRARY INITIALIZATION: could not retrieve file stats. Creating base directory now.')
      fs.mkdir(lib.baseDir, (err) => {
        if(!err) {
          debug('DATA LIBRARY INITIALIZATION: base directory created successfully.')
          resolve()
        } else reject('Could not create the data directory.')
      })
    }
  })
}).then(() => {
  debug('DATA LIBRARY INITIALIZATION: initializing databases.')
  return Promise.all([loadComponents(), loadShows(), loadScreens()])
})

lib.load = async () => {
  await lib.components.loadDatabase()
  await lib.shows.loadDatabase()
  await lib.screens.loadDatabase()
} 

lib.cleanup = () => new Promise((resolve, reject) => {
  debug('DATA LIBRARY CLEANUP: removing everything in - ', lib.baseDir)
  fs.rmdir(lib.baseDir, { recursive: true }, error => {
    if(!error) {
      debug('DATA LIBRARY INITIALIZATION: cleanup successful.')
      resolve()
    } else reject(`Error trying to cleanup data: ${error.message}`)
  });
})

module.exports = lib
