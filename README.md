# Full Stack Portfolio - Ahsan Mughal

A modern, responsive personal portfolio website built with HTML, SCSS, JavaScript, Node.js, Express, and MongoDB. Features a clean design with smooth transitions, interactive elements, and a functional contact form.

## 🌟 Live Demo

[Add your deployed website link here]

## ⚡ Features

### Frontend

- **Responsive Design**: Mobile-first approach with breakpoints for all devices
- **Theme Switcher**: Light/Dark mode toggle with persistent state
- **Smooth Transitions**: CSS animations and section transitions
- **Interactive UI**: Dynamic content loading and form handling
- **Section Based Layout**:
  - Home: Personal introduction with downloadable CV
  - About: Skills, timeline, and statistics
  - Portfolio: Project showcase with GitHub links
  - Contact: Interactive contact form with backend integration

### Backend

- **RESTful API**: Express.js based API endpoints
- **MongoDB Integration**: Persistent storage for contact form data
- **Data Validation**: Server-side form validation
- **Error Handling**: Comprehensive error handling and logging
- **CORS Enabled**: Cross-origin resource sharing configuration

## 🛠️ Tech Stack

### Frontend

- HTML5
- SCSS/CSS3
- JavaScript (ES6+)
- Font Awesome 5.15.4
- Google Fonts (Poppins)

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS
- dotenv

## 📝 Project Structure

## 🚀 Setup and Installation

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas URI)
- npm/yarn

### Frontend Setup

1. Navigate to the frontend directory:

```bash
cd Resume/frontEnd
```

2. Open index.html in a browser or use a live server

3. For SCSS compilation:
   sass --watch styles/styles.scss:styles/styles.css

Backend Setup

1. Navigate to the backend directory:
   cd Resume/backEnd
2. Install dependencies:
   npm install
3. Create a .env file in the root directory and add the following environment variables:
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/portfolioDB
4. Start the server:
   npm run dev

📱 API Endpoints
Contact Form
POST /api/contact
Saves contact form submissions
Required fields: name, email, subject, message
Returns: Success/Error message with status code.

💻 Development

Frontend Development:

Modify SCSS in styles/styles.scss
Update responsive design in styles/\_media.scss
Add new sections in index.html
Backend Development:

Add new routes in routes/
Create controllers in controllers/
Define models in models/

👤 Contact Information:

Name: Ahsan Mughal
Email: mughalahsan718@gmail.com
LinkedIn: Ahsan Mughal
GitHub: Ahasn-9
Location: Lahore, Pakistan.

🔧 Future Improvements:

Add authentication for admin dashboard
Implement project filtering in portfolio
Add blog section with CMS
Enable email notifications for form submissions
Add portfolio item management system.

📄 License:

[Add your chosen license here]

This README.md provides a comprehensive overview of your full-stack portfolio project, including both frontend and backend components, setup instructions, and development guidelines. The structure is clean and professional, making it easy for other developers to understand and contribute to your project.
This README.md provides a comprehensive overview of your full-stack portfolio project, including both frontend and backend components, setup instructions, and development guidelines. The structure is clean and professional, making it easy for other developers to understand and contribute to your project.
