
# Remindable
![Remindable](resources/Remindable.gif)

Remindable is a simple yet powerful reminder app built using the MERN stack (MongoDB, Express, React, Node.js). With Remindable, users can create reminders with a title, date, and time, and get notified via email at the specified date and time.

## Features

- **User Registration & Authentication**: Secure authentication system using JWT tokens.
- **Create Reminders**: Create reminders with a title, date, and time.
- **Email Notifications**: Receive reminder notifications via email at the specified date and time.
- **Manage Reminders**: Edit or delete existing reminders.

## Technology Stack

- **Frontend**: React.js,
- **Backend**: Node.js, Express.js, Mongoose
- **Database**: MongoDB
- **Email Service**: Nodemailer
- **Scheduler**: Node-cron

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- MongoDB (Local or Atlas)
- An Email Service (e.g., Gmail, Outlook) for sending notifications

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/ahmad-masud/Remindable.git
   cd Remindable
   ```

2. **Backend Setup:**

   - Navigate to the backend folder:

     ```bash
     cd backend
     ```

   - Install dependencies:

     ```bash
     npm install
     ```

   - Create a `.env` file in the `backend` directory with the following variables:

     ```env
     PORT=5000
     MONGODB_URI=<your_mongodb_uri>
     TOKEN_SECRET=<your_jwt_secret>
     ```

   - Start the backend server:

     ```bash
     npm run dev
     ```

3. **Frontend Setup:**

   - Navigate to the frontend folder:

     ```bash
     cd ../frontend
     ```

   - Install dependencies:

     ```bash
     npm install
     ```

   - Start the frontend development server:

     ```bash
     npm start
     ```

### Usage

1. Register or log in to the application.
2. Create a new reminder by providing a title, date, and time.
3. At the specified time, receive an email notification with your reminder details.

## API Endpoints

### Authentication

- **POST /api/users/register**: Register a new user
- **POST /api/users/login**: Login an existing user
- **DELETE /api/users/delete**: Delete an existing user
- **PUT /api/users/update**: Update an existing user
- **PUT /api/users/changePassword**: Change the password of an existing user

### Reminders

- **GET /api/reminders**: Get all reminders for the logged-in user
- **GET /api/reminders/:id**: Get a reminder for the logged-in user
- **POST /api/reminders/create**: Create a new reminder
- **PATCH /api/reminders/:id**: Update an existing reminder
- **DELETE /api/reminders/delete/:id**: Delete a reminder

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
