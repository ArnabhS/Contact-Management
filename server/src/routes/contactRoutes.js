const express = require('express');
const router = express.Router();

const { addNewContact, getAllContact, updateContact, deleteContact } = require("../controllers/contactController.js")

router.post('/add',addNewContact);
router.get('/', getAllContact)
router.put('/update/:id', updateContact)
router.delete('/delete/:id', deleteContact)

module.exports = router