import { useState, useEffect } from "react";
import ContactForm from "../components/ContactForm.jsx";
import ContactsTable from "../components/ContactTable.jsx";
import { fetchContacts } from "../services/service.js";
import { ImCross } from "react-icons/im";
const ContactsPage = () => {
  const [contacts, setContacts] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const refreshContacts = async () => {
    try {
      const data = await fetchContacts();
      setContacts(data);
    } catch (error) {
      console.error("Error fetching contacts:", error);
    }
  };

  useEffect(() => {
    refreshContacts();
  }, []);

  const handleAddContactClick = () => {
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl text-center font-bold mb-4">
        Contact Management
      </h1>
      <div className="flex justify-end">
      <button
        onClick={handleAddContactClick}
        className="mb-4 px-6 py-2 bg-blue-600  text-white rounded hover:bg-blue-700"
      >
        Add Contact
      </button>
      </div>

      {isFormOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-3 rounded-lg shadow-lg md:max-w-4xl w-96">
            <ContactForm refreshContacts={refreshContacts} />
            <button
              onClick={handleCloseForm}
              className="absolute top-2 right-20 text-gray-900 hover:text-gray-700 text-3xl"
            >
              <ImCross />
            </button>
          </div>
        </div>
      )}

      <ContactsTable contacts={contacts} refreshContacts={refreshContacts} />
    </div>
  );
};

export default ContactsPage;
