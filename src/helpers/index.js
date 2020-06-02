const Counter = require('../models/couter')

const seqNextId = async () => {
    try {
        const doc = await Counter.findOneAndUpdate(
            {_id: 'userId'},
            {$inc: {seq: 1}},
            {new : true}
        )
        return doc.seq;
    } catch(e) {
        console.log(e)
    }
    
}

module.exports = { seqNextId }