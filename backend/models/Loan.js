const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define collection and schema
let Loan = new Schema({
    clientName: {
        type: String
    },
    clientEmail: {
        type: String
    },
    clientDesignation: {
        type: String
    },
    clientPhoneNumber: {
        type: Number
    },
    loanAmount: {
        type: Number
    }
    ,
    loanTenure: {
        type: Number
    },
    loanInterest: {
        type: Number
    }
}, {
    collection: 'loans'
})
module.exports = mongoose.model('Loan', Loan)