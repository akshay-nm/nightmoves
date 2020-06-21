const fs = require('fs')
const path = require('path')

var lib = {}

lib.baseDir = path.join(process.cwd(), '/.data/')

lib.create = (dir, file, data) => {
  return new Promise((resolve, reject) => {
    fs.open(path.join(lib.baseDir, dir, `${file}.json`), 'wx', (err, fileDescriptor) => {
      if(!err && fileDescriptor) {
        let stringData = JSON.stringify(data)

        fs.writeFile(fileDescriptor, stringData, (err) => {
          if(!err) {
            fs.close(fileDescriptor, (err) => {
              if(!err) {
                resolve()
              } else {
                reject('Could not close file during create.')
              }
            })
          } else {
            reject('Could not write data to file during create.')
          }
        })
      } else {
        reject('Could not open file during create.')
      }
    })
  })
}

lib.read = (dir, file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path.join(lib.baseDir, dir, `${file}.json`), 'utf8', (err, data) => {
      if(!err) resolve(JSON.parse(data))
      else {
        console.log(err)
        reject('Error reading the file during read. ')
      }
    })
  })
}

lib.update = (dir, file, data) => {
  return new Promise((resolve, reject) => {
    fs.open(path.join(lib.baseDir, dir, `${file}.json`), 'r+', (err, fileDescriptor) => {
      if(!err && fileDescriptor) {
        let stringData = JSON.stringify(data)

        fs.ftruncate(fileDescriptor, (err) => {
          if(!err) {
            fs.writeFile(fileDescriptor, stringData, (err) => {
              if(!err) {
                fs.close(fileDescriptor, (err) => {
                  if(!err) {
                    resolve()
                  } else {
                    reject('Could not close file during update.')
                  }
                })
              } else {
                reject('Could not write data to file during update.')
              }
            })
          } else {
            reject('Error truncating file during update.')
          }
        })
      } else {
        reject('Could not open file during update.')
      }
    })
  })
}

lib.delete = (dir, file) => {
  return new Promise((resolve, reject) => {
    fs.unlink(path.join(lib.baseDir, dir, `${file}.json`), (err) => {
      if(!err) resolve()
      else reject('Error unlinking file during delete.')
    })
  })
}

lib.getAllFileName = (dir) => {
  return new Promise((resolve, reject) => {
    fs.readdir(path.join(lib.baseDir, dir), (err, files) => {
      if(!err) resolve(files)
      else {
        console.log(err)
        reject('Error getting list of files.')
      }
    });
  })
}

module.exports = lib
