const Contact = require('../models/contactModel.js');

const addNewContact = async (req,res)=>{
    try {
        const { firstName, lastName, email, phoneNumber, company, jobTitle } = req.body;
        const contact = new Contact({
            firstName,
            lastName,
            email,
            phoneNumber,
            company,
            jobTitle
        })

        await contact.save();
        return res.status(201).json({ message:"Contact successfully added", contact:contact  })
    } catch (error) {
        return res.status(501).json({ error: error.message });
    }
}

const getAllContact = async (req,res)=>{
    
    try {
        const contacts = await Contact.find();
        return res.status(201).json(contacts)    
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const updateContact = async (req,res)=>{
    
    const { id } = req.params;
    if(!id){
        return res.status(400).json({ message: "Contact not found" })
    }

    try {
        
        const { firstName, lastName, email, phoneNumber, company, jobTitle } = req.body;
        
        let updatedData = { firstName, lastName, email, phoneNumber, company, jobTitle }
        
        const contact = await Contact.findByIdAndUpdate(id, updatedData ,{
            new:true
        });
        
        await contact.save();
        return res.status(201).json( { message:"Contact successfully updated", contact:contact } )

    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

const deleteContact = async(req,res)=>{
    
    const { id } = req.params;
    if(!id){
        return res.status(404).json( { message:"Contact not found" } )
    }
    try {
        await Contact.findByIdAndDelete(id);
        return res.status(201).json( { message:"Contact deleted successfully" } );  
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

module.exports = { addNewContact, getAllContact, updateContact, deleteContact }