# nodejs-testing

##  Overview
NodeJS Store is a simple project that utilizes Node.js, MySQL, HTML, CSS, and JavaScript to create a basic web application. The project includes a backend server using Express, a MySQL database connection, and a simple function for demonstration purposes.

---

## Features
- Node.js with Express for server-side handling
- MySQL database integration using mysql2
- Environment variable configuration with dotenv
- Simple arithmetic function for demonstration
- Static file hosting for frontend assets

---

## Installation
Steps:
1. Clone the repository:
```bash
git clone https://github.com/SamuelhaIIman/nodejs-testing.git
```
2. Navigate to the project directory:
```bash
cd nodejs-store
```
3. Install dependencies:
```bash
npm install install mysql2 stripe mysql express ejs dotenv stripe
```
4. Create a .env file in the root directory and add your database credentials:
```
DB_HOST=your_host
DB_USER=your_user
DB_PASSWORD=your_password
DB_NAME=your_database
```
5. Start the server:
```bash
npm start
```
6. Open your browser and visit:
```
http://localhost:3000
```