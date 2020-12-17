const { collegeModel } = require('./connector')
const { data } = require('./data')

const refreshAll = async () => {
    await collegeModel.deleteMany({})
    // console.log(connection)
    await collegeModel.insertMany(data)
}
refreshAll()