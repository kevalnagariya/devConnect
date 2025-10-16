# 👩‍💻 DevConnect

**DevConnect** is a MERN stack application designed to help developers connect, collaborate, and expand their professional network. Similar to Tinder but for developers, users can create profiles, browse other developers, send connection requests, and manage their matches.

---

## 🛠 Tech Stack

**Frontend:**
- React.js + Vite  
- Redux Toolkit for state management  
- Tailwind CSS for styling  

**Backend:**
- Node.js + Express.js  
- MongoDB + Mongoose  
- JWT for authentication  
- bcryptjs for password encryption  

**Other Tools:**
- Postman for API testing  
- dotenv for environment variables  

---

## 🏗️ Installation & Setup

### Frontend
1. Clone the repository:  
```bash
git clone git@github.com:kevalnagariya/devConnect.git
```
2. Navigate to the project directory:  
```bash
cd devConnectFrontend
```
3. Install dependencies:  
```bash
npm install
```
4. Start the development server:  
```bash
npm run dev
```

### Backend
1. Clone the repository:  
```bash
git clone git@github.com:kevalnagariya/devConnect.git
cd devConnectBackend
```
2. Create a `.env` file with the following content:  
```env
DATABASE_URL=mongodb+srv://<username>:<password>@cluster0.mongodb.net/devConnect
JWT_SECRET=your_jwt_secret
PORT=7777 or 3000
```
3. Start the server:  
```bash
npm start
```
Backend runs at: `http://localhost:7777/`  

> Ensure the backend is running before using the frontend.

---

## 📌 Features

**Authentication & Security**
- Signup, login, and logout functionality  
- JWT-based authentication with secure cookies  
- Password encryption using bcryptjs  

**Developer Profiles**
- Create, edit, and view developer profiles  
- Add skills, bio, and personal details  

**Connections & Networking**
- Send, accept, or reject connection requests  
- Prevent duplicate or self-requests  
- View accepted connections  

**Feed & Pagination**
- Browse suggested developers excluding: logged-in user, existing connections, ignored users, or pending requests  
- Pagination with `skip` and `limit` for optimized queries  

**User Experience**
- Fully responsive design for desktop 
- Mobile responsive is in process 

---

## 🚀 API Endpoints

### Authentication
| Method | Endpoint | Description | Auth Required |
|--------|---------|-------------|---------------|
| POST   | /auth/signup | Register a new user | ❌ |
| POST   | /auth/login | Authenticate user & issue JWT | ❌ |
| POST   | /auth/logout | Logout user by clearing JWT cookie | ✅ |

### User Profile
| Method | Endpoint | Description | Auth Required |
|--------|---------|-------------|---------------|
| GET    | /profile/view | Get logged-in user profile | ✅ |
| PATCH  | /profile/edit | Update allowed profile fields | ✅ |
| PATCH  | /profile/password | Update user password | ✅ |

### Connection Requests
| Method | Endpoint | Description | Auth Required |
|--------|---------|-------------|---------------|
| POST   | /request/send/:status/:toUserId | Send a connection request | ✅ |
| POST   | /request/review/:status/:requestId | Accept/Reject a request | ✅ |
| GET    | /user/requests/received | Fetch pending connection requests | ✅ |
| GET    | /user/connections | Fetch accepted connections | ✅ |

### Feed API
| Method | Endpoint | Description | Auth Required |
|--------|---------|-------------|---------------|
| GET    | /user/feed | Get suggested developer profiles with pagination | ✅ |

---

## 🤝 Contribution

Contributions are welcome!  
1. Fork the repository  
2. Create a new branch  
3. Make your changes  
4. Submit a pull request  

You can also open issues for bugs or feature requests.

---

## 📌 Future Enhancements

- Real-time notifications using WebSockets  
- Messaging system for better interactions  
- Profile search & filtering  
- Unit testing for backend API reliability  

---

## 📌 Live Link

- Stay tuned! The live version of DevConnect will be available soon
