//@desc get all contacts
//@route GET api/contacts
//@access public
const getContacts = (req, res) => {
    res.status(200).json(`Get all contacts`);
};

//@desc create contact
//@route POST api/contacts
//@access public
const createContacts = (req, res) => {
    console.log(req.body)
    res.status(200).json(`Create contact`);
};

//@desc update contact
//@route PUT api/contacts/:id
//@access public
const updateContacts = (req, res) => {
    res.status(200).json(`Update contact`);
};

//@desc delete contact
//@route DELETE api/contacts/:id
//@access public
const deleteContacts = (req, res) => {
    res.status(200).json(`Create contact`);
};

module.exports = { getContacts, createContacts, updateContacts, deleteContacts };