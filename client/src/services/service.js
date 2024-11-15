import axios from 'axios';

const API_URL = 'http://localhost:5000/api/contacts';

export const fetchContacts = async () => {
    const response = await axios.get(API_URL);
   
    const data = response.data
    console.log(data)
    return data;
};

export const addContact = async (contact) => {
    const { data } = await axios.post(`${API_URL}/add`, contact);
    return data;
};

export const updateContact = async (id, updatedContact) => {
    const { data } = await axios.put(`${API_URL}/update/${id}`, updatedContact);
    return data;
};

export const deleteContact = async (id) => {
    await axios.delete(`${API_URL}/delete/${id}`);
};
