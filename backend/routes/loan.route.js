const express = require('express');
const app = express();
const loanRoute = express.Router();
// Loan model
let Loan = require('../models/Loan');
// Add Loan
loanRoute.route('/create').post((req, res, next) => {
    Loan.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});
// Get All Loans
loanRoute.route('/').get((req, res) => {
    Loan.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})
// Get single Loan
loanRoute.route('/read/:id').get((req, res) => {
    Loan.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// Update Loan
loanRoute.route('/update/:id').put((req, res, next) => {
    Loan.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
            console.log(error)
        } else {
            res.json(data)
            console.log('Data updated successfully')
        }
    })
})
// Delete Loan
loanRoute.route('/delete/:id').delete((req, res, next) => {
    Loan.findOneAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})
module.exports = loanRoute;