# Simple-restapi-with-typescript
A RESTful API built with Express.js, TypeScript, and Sequelize for managing a collection of books. This API allows users to perform CRUD (Create, Read, Update, Delete) operations on books, ensuring robust error handling, input validation, and structured logging.

**Features**
- CRUD Operations: Create, Read, Update, and Delete books.
- Type Safety: Built with TypeScript for enhanced type safety and developer experience.
- Database Integration: Uses Sequelize ORM for seamless interaction with relational databases.
- Error Handling: Centralized error-handling middleware for consistent responses.

**Technologies Used**
- Runtime: Node.js
- Framework: Express.js
- Language: TypeScript
- ORM: Sequelize
- Database: MySQL
- Environment Management: dotenv

**Prerequisites**
Before you begin, ensure you have met the following requirements:

- Node.js: Installed (version 14 or higher recommended)
- npm: Installed (comes with Node.js)
- Database: MySQL installed and running
- Git: Installed for version control

Environment Variables:
Create a .env file in the root directory of the project and add the following environment variables:

Server Configuration
PORT=3000

Database Configuration
DB_NAME=your_database_name
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_HOST=localhost
DB_DIALECT=mysql
DB_PORT=3306
