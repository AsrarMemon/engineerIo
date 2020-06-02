const User = require('../models/user')
const helper = require('../helpers');

const createUser = async (reqBody) => {
    
    const id = await helper.seqNextId();
    reqBody.id = id;
    console.log(reqBody)

    const user = new User(reqBody);
    console.log('user');
    return user.save().then((data) => {
        console.log(data)
        return data
    }).catch((err) => {
        console.log(err)
    })
}

module.exports = {createUser}