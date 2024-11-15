import { useState } from "react";
import { addContact } from "../services/service.js";

const ContactForm = ({ refreshContacts }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    company: "",
    jobTitle: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addContact(formData);
      refreshContacts();
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        company: "",
        jobTitle: "",
      });
    } catch (error) {
      console.error("Error adding contact:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Add New Contact
      </h2>
      <div className="grid grid-cols-2 gap-6">
        {Object.keys(formData).map((field) => (
          <div key={field} className="col-span-2">
            <label
              htmlFor={field}
              className="block text-sm font-medium text-gray-700 mb-1 capitalize"
            >
              {field.replace(/([A-Z])/g, " $1")}
            </label>
            <input
              type="text"
              name={field}
              id={field}
              value={formData[field]}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder={`Enter ${field}`}
              required
            />
          </div>
        ))}
      </div>
      <button
        type="submit"
        className="mt-6 w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Add Contact
      </button>
    </form>
  );
};

export default ContactForm;
