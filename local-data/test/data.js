let chai = require('chai')
let chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised).should()

let _data = require('../lib/data')

let testDirectory = 'testData'
describe('data library', function () {
  describe('#init', function () {
    it('should be able to initialize the collections without error', () => {
      return _data.init(testDirectory).should.be.fulfilled
    })
    it('should be able to load all databases without errors', async () => {
      await _data.load()
    })
    it('should be able to delete all the db files and delete the base directory without', () => {
      return _data.cleanup().should.be.fulfilled
    })
  })
})
