const mongoose = require('mongoose');

const couterSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    seq: {
        type: Number,
        required: true
    }
})

const Counter = mongoose.model('counters', couterSchema);

const initCounter = async () => {
   const couterDoc =  await Counter.find({})
   if(!couterDoc || couterDoc.length <= 0) {
       const couter = new Counter({
        _id: 'userId',
        seq: 0
       })
       await couter.save();
   }
}

initCounter()

module.exports = Counter