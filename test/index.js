const pm2 = require('../').default
const assert = require('assert')
describe('api test',()=>{
  it('create server and delete server',async ()=>{
    await pm2.connect()

    let list = await pm2.list()

    let beforeListCount = list.length

    let addedList = await pm2.start(__dirname+'/a.js')
    assert.equal(addedList.length,1,`start a.js fail`)

    let deleteResult = await pm2.delete(addedList[0].pm2_env.pm_id)
    assert.equal(deleteResult[0].status,'stopped',`delete a.js fail`)

    let afterListCount = (await pm2.list()).length
    assert.equal(beforeListCount,afterListCount,`delete a.js fail`)

    await pm2.disconnect()
  })
})