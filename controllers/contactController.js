const asyncHandler = require('express-async-handler');

//@desc get all contacts
//@route GET api/contacts
//@access public
const getContacts = asyncHandler(async (req, res) => {
    res.status(200).json(`Get all contacts`);
});

//@desc create contact
//@route POST api/contacts
//@access public
const createContacts = asyncHandler(async (req, res) => {
    console.log(req.body);
    const {name, email, phone} = req.body;

    if (!name || !email || !phone) {
        res.status(401);
        throw new Error('All fields are mandatory.');
    }

    res.status(200).json(`Create contact`);
});

//@desc update contact
//@route PUT api/contacts/:id
//@access public
const updateContacts = asyncHandler(async (req, res) => {
    res.status(200).json(`Update contact`);
});

//@desc delete contact
//@route DELETE api/contacts/:id
//@access public
const deleteContacts = asyncHandler(async (req, res) => {
    res.status(200).json(`Create contact`);
});

module.exports = { getContacts, createContacts, updateContacts, deleteContacts };