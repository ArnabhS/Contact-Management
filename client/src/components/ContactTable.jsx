import { useState } from "react";
import { deleteContact, updateContact } from "../services/service.js";
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const ContactsTable = ({ refreshContacts, contacts }) => {
  const [editingContact, setEditingContact] = useState(null);
  const [editFormData, setEditFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    company: "",
    jobTitle: "",
  });

  const handleDelete = async (id) => {
    try {
      await deleteContact(id);
      refreshContacts();
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
  };

  const handleEdit = (contact) => {
    const { _id, ...contactData } = contact;
    setEditingContact(_id);
    setEditFormData(contactData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditFormData({ ...editFormData, [name]: value });
  };

  const handleSave = async () => {
    try {
      await updateContact(editingContact, editFormData);
      refreshContacts();
      setEditingContact(null);
    } catch (error) {
      console.error("Error updating contact:", error);
    }
  };

  const handleCancel = () => {
    setEditingContact(null);
  };

  return (
    <div>
      <table className="w-full mt-4 border-collapse border border-gray-300 rounded-lg shadow-md">
        <thead>
          <tr className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white">
            <th className="p-3 text-center">First Name</th>
            <th className="p-3 text-center">Last Name</th>
            <th className="p-3 text-center">Email</th>
            <th className="p-3 text-center">Phone</th>
            <th className="p-3 text-center">Company</th>
            <th className="p-3 text-center">Job Title</th>
            <th className="p-3 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact._id} className="text-center hover:bg-gray-100">
              {Object.values(contact)
                .slice(1) 
                .map((value, idx) => (
                  <td key={idx} className="p-3 border border-gray-200">
                    {value}
                  </td>
                ))}
              <td className="p-3 border border-gray-200 flex justify-center gap-4">
                <button
                  onClick={() => handleEdit(contact)}
                  className="px-4 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700 transition duration-200"
                >
                  <MdModeEdit />
                </button>
                <button
                  onClick={() => handleDelete(contact._id)}
                  className="px-4 py-2 text-white bg-red-600 rounded-lg hover:bg-red-700 transition duration-200"
                >
                 <MdDelete />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

     
      {editingContact && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Edit Contact</h2>
            <form>
              {Object.keys(editFormData).map((field) => (
                <div key={field} className="mb-4">
                  <label className="block mb-1 font-medium text-gray-700 capitalize">
                    {field}
                  </label>
                  <input
                    type="text"
                    name={field}
                    value={editFormData[field]}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>
              ))}
            </form>
            <div className="flex justify-end gap-3">
              <button
                onClick={handleCancel}
                className="px-5 py-2 text-white bg-gray-600 rounded-lg hover:bg-gray-700 transition duration-200"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-5 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-200"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactsTable;
