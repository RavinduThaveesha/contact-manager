const express = require('express');
const router = express.Router();
const { 
    getContacts, 
    createContacts, 
    updateContacts, 
    deleteContacts 
} = require('../controllers/contactController');

router.route('/').get(getContacts).post(createContacts);;

router.route('/:id').get((req, res) => {
    res.status(200).json(`Get contacts`);
});

router.route('/:id').put(updateContacts).delete(deleteContacts);

module.exports = router;