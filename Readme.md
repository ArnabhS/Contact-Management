# **Contact Management System**

## **Project Overview**
This project is a **Contact Management System** built using **React**, **Node.js**, and **MongoDB**. The system allows users to manage contacts by adding, editing, and deleting them. The contacts are stored in a **MongoDB** database, and users can interact with the system via a simple user interface powered by React.

Key features of the application:
- Add, edit, and delete contacts
- Display a list of contacts in a responsive, paginated table
- Modal forms for adding/editing contacts
- Optimized for modern web browsers with a responsive design

---

## **Setup Instructions**

### **1. Clone the Repository**
Start by cloning the repository to your local machine:
```bash
git clone https://github.com/ArnabhS/Contact-Management
cd contact-management
```
### **2. Install Dependencies**
Install the required dependencies for frontend 
```bash
cd client
npm install
```
Install the required dependencies for backend
```bash
cd server
npm install
```
### **3. Set up the Database**

You'll need a MongoDB database for storing contacts. If you don't have MongoDB installed locally, you can use MongoDB Atlas or any other cloud database provider.

**Database Schema:**

```bash
{
  "_id": ObjectId,
  "firstName": String,
  "lastName": String,
  "email": String,
  "phoneNumber": String,
  "company": String,
  "jobTitle": String,
}
```
_id: Unique identifier for each contact.
firstName: The first name of the contact.
lastName: The last name of the contact.
email: The email address of the contact.
phoneNumber: The phone number of the contact.
company: The company name where the contact works.
jobTitle: The job title of the contact.

### **4. Set up Environment Variables**

Create a .env file in the server directory to configure your environment variables for database connection and other services.

```bash
MONGODB_URI=mongodb://localhost:27017/contact-management
PORT=5000
CORS_ORIGIN = http://localhost:5173
```
Replace **MONGODB_URI** with your actual MongoDB URI if you're using a cloud provider like MongoDB Atlas.

### **5. Running the Application**

**Backend (Node.js Server)**

To start the backend server, run the following command:

```bash
cd server
npm run dev
```
**Frontend (React Client)**

```bash
cd client
npm run dev
```

### **6. Technical Decisions**

**Frontend (React+Vite)**

We used React for the frontend to take advantage of its component-based architecture and reactivity.
The user interface is styled using Tailwind CSS for rapid styling and a responsive design.
The form for adding and editing contacts is implemented using controlled components, and the modal form for editing contact information is handled with state management.

**Backend (Node.js & Express)**

The backend uses Node.js with the Express framework to handle API requests and manage routes for CRUD operations (Create, Read, Update, Delete) on contacts.
MongoDB is used as the database, with Mongoose for easy data modeling and querying.
We have used JWT (JSON Web Tokens) for user authentication (if applicable) to ensure secure access to API endpoints.


### **7. Challenges and Solutions**

**1. Handling Asynchronous Operations**

One of the challenges I faced during this project was dealing with asynchronous operations when interacting with the database. Since most of the database operations (CRUD actions) are asynchronous, I needed to ensure proper error handling and asynchronous flow management.

**Solution:**

I used async/await syntax for better readability and easier error handling. Additionally, I included try/catch blocks to catch any errors during database operations.

**2. Modal Form Handling**

Managing the modal form for editing contacts posed some challenges regarding form validation and state management, especially ensuring that the form correctly reflects the selected contact and updates the UI accordingly.

**Solution:**
I used React state (useState) to control the modal's visibility and its form data. The form state is reset whenever the modal is closed, and I ensured that the edit form only appears when a contact is selected for editing. This is handled by updating the editingContact state and passing the selected contact's data to the form as props.

### **8. Conclusion**

This project allowed me to build a full-stack contact management system with a clean and responsive frontend, a robust backend, and secure data storage using MongoDB. I encountered some challenges related to asynchronous operations, state management, and CORS, but I was able to solve them with clear solutions and best practices.

```bash
This `README.md` includes:
- **Project overview** with features
- **Step-by-step setup instructions**
- **Database schema**
- **Technical decisions**
- **Challenges faced** and **solutions**
```