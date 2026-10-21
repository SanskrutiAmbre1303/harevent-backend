# Harevent Backend

# About the Project

This project is a backend API for Harevent. It is built using Node.js, Express.js and MongoDB.

The API handles user registration and login, vendor management, and event categories. I used Postman to test the API endpoints.

# Technologies Used

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT authentication
- bcryptjs
- Postman

# Features

- Register a user and log in
- Hash passwords before saving them
- Protect API routes using JWT authentication
- Add, view, update and delete vendors
- Search vendors by category and location
- Add, view, update and delete event categories

# How to Run the Project

1. Install Node.js.
2. Open the project folder in the terminal.
3. Run `npm install`.
4. Create a `.env` file and add your MongoDB connection string, JWT secret and port number.
5. Start the server using `node server.js`.
6. Use Postman to test the API.

# API Routes

# Authentication
POST /api/auth/signup
POST /api/auth/login

# Vendor APIs

POST /api/vendors — Add a vendor.
GET /api/vendors — Get all vendors.
GET /api/vendors/:id — Get a vendor by ID.
PUT /api/vendors/:id — Update vendor details.
DELETE /api/vendors/:id — Delete a vendor.

Vendor records include the business name, category, description, location, contact details and price. I also added filtering by category and location.

# Event Category APIs

POST /api/categories — Create a category.
GET /api/categories — Get all categories.
GET /api/categories/:id — Get a category by ID.
PUT /api/categories/:id — Update a category.
DELETE /api/categories/:id — Delete a category.

The event categories used in testing are Weddings, Birthdays, Corporate Events and Parties.

# Authentication and Testing

I used Postman to test the APIs. I tested user signup and login, vendor creation and retrieval, vendor updates and deletion, category creation and retrieval, and vendor filtering.

The vendor endpoints require a JWT token. I also tested a request without a token and received 401 Unauthorized, as expected.

After deleting a vendor, requesting that vendor by ID returned 404 Not Found.


<img width="1366" height="644" alt="deletevendor" src="https://github.com/user-attachments/assets/1beb5f32-830c-4995-a3c3-fbd149c8622d" />

<img width="1366" height="688" alt="Vendors" src="https://github.com/user-attachments/assets/79f47ab3-ea3a-4e60-85a9-c1af2f82d2f4" />

<img width="1365" height="718" alt="Category " src="https://github.com/user-attachments/assets/b89d6154-6cb5-43cb-85ac-bc564a1da901" />

<img width="1366" height="699" alt="Login" src="https://github.com/user-attachments/assets/53fe4830-f879-4363-89c5-ba828fa8d066" />

