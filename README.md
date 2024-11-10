# Social-media-app

This is a social media platform built using React.js for the frontend, Node.js with Express.js for the backend, and MongoDB for data storage. The app allows users to interact by posting content, commenting, liking posts, following/unfollowing users, and engaging in real-time chat. It also includes Redux for state management, Context API for authentication, Promises for asynchronous data handling, and WebSockets (via Socket.io) for real-time messaging.

##
Table of Contents

Features

Tech Stack

Installation

Backend Setup

Frontend Setup

API Endpoints

Database Schema

Contributing

License

Features

User Authentication (JWT & Context API)
User signup, login, and authentication using JWT.
Context API used to manage user sessions and protect routes.

Post Creation, Commenting, and Likes (Redux & MongoDB)
Users can create posts, comment on posts, and like posts.
Redux for global state management, MongoDB for data storage.

Follow/Unfollow System
Users can follow or unfollow other users.
Notifications (via email) are sent when users follow/unfollow.

Asynchronous Data Handling with Promises
Data fetching (posts, comments, likes) handled asynchronously using Promises.
Error handling in API calls with proper user feedback.

REST API for Backend Logic
CRUD operations for posts and comments.
JWT authentication middleware for route protection.
Endpoints for likes and follow relations.

Email Notifications for Likes, Comments, and Follows
Notifications sent via email when users like posts, comment, or follow/unfollow others.
Real-time Chat (WebSockets & Redux)

Real-time messaging with Socket.io for bi-directional communication.
Chat history stored in MongoDB.
Chat state managed using Redux.

In-App Notifications
Users receive in-app notifications for likes, comments, and follows via WebSockets.

Profile Page & Post Feed
Each user has a profile page with their posts and followers/following lists.
Global feed showing posts from all users or followed users.

Tech Stack
Frontend:
React.js for the UI

Redux for global state management

Context API for user authentication

Socket.io for real-time messaging

Backend:

Node.js and Express.js for API services

MongoDB (MongoDB Atlas) for cloud-based data storage

JWT for authentication

Socket.io for WebSocket communication

Email Service:

NodeMailer or SendGrid for sending email notifications

Installation

Prerequisites

Node.js (>= 14.x)

MongoDB (locally or MongoDB Atlas)

Steps:
Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/social-media-app.git
cd social-media-app
Install dependencies:

Backend: Navigate to the backend directory and install dependencies:
bash
Copy code
cd backend
npm install
Frontend: Navigate to the frontend directory and install dependencies:
bash
Copy code
cd frontend
npm install
Configure Environment Variables:

Create a .env file in the backend directory with the following keys:
makefile
Copy code
MONGO_URI=<your_mongo_database_url>
JWT_SECRET=<your_jwt_secret_key>
EMAIL_SERVICE=<your_email_service_provider>
EMAIL_USER=<your_email>
EMAIL_PASS=<your_email_password>
For email notifications, configure NodeMailer or SendGrid.
Run the App:

Backend: In the backend directory, run the following command:

bash
Copy code
npm start
The server will start on http://localhost:5000.

Frontend: In the frontend directory, run:

bash
Copy code
npm start
The React app will start on http://localhost:3000.

Backend Setup
API Endpoints:
POST /api/auth/signup - Register a new user.
POST /api/auth/login - User login and generate JWT.
GET /api/posts - Get all posts.
POST /api/posts - Create a new post.
PUT /api/posts/
/like - Like a post.
POST /api/comments - Add a comment to a post.
POST /api/follow/
- Follow a user.
POST /api/unfollow/
- Unfollow a user.
POST /api/chat/message - Send a chat message.
Authentication Middleware:
JWT middleware is used for protecting routes, ensuring only authenticated users can access certain resources like creating posts or liking content.

Database Schema
Users Collection:
json
Copy code
{
  "_id": ObjectId,
  "username": String,
  "email": String,
  "password": String (hashed),
  "followers": [ObjectId], 
  "following": [ObjectId], 
  "posts": [ObjectId], 
}
Posts Collection:
json
Copy code
{
  "_id": ObjectId,
  "postContent": String,
  "userId": ObjectId,
  "likes": [ObjectId],
  "comments": [ObjectId],
  "createdAt": Date,
}
Comments Collection:
json
Copy code
{
  "_id": ObjectId,
  "commentText": String,
  "userId": ObjectId,
  "postId": ObjectId,
  "createdAt": Date,
}
Chat Collection:
json
Copy code
{
  "_id": ObjectId,
  "userId": ObjectId,
  "message": String,
  "createdAt": Date,
}
Contributing
Contributions are welcome! If you have suggestions or bug fixes, please submit a pull request or create an issue.

Steps for Contribution:
Fork the repository.
Create a new branch (git checkout -b feature/feature-name).
Make your changes and commit (git commit -am 'Add feature').
Push to the branch (git push origin feature/feature-name).
Create a pull request.
License
This project is licensed under the MIT License - see the LICENSE file for details.
