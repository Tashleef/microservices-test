# Notification Microservice Project

A Node.js microservices-based application demonstrating service-to-service communication between a User Service and a Notification Service using NestJS framework.

## Architecture

This project consists of two microservices:

### User Service (Port 3001)

-   Handles user management operations
-   Creates users and triggers welcome notifications
-   Communicates with the Notification Service via HTTP requests

### Notification Service (Port 3002)

-   Manages notification creation and retrieval
-   Stores and serves notification data
-   Provides RESTful API endpoints

## Technology Stack

-   **Framework**: NestJS (Node.js)
-   **Language**: TypeScript
-   **Validation**: Joi
-   **HTTP Client**: Axios
-   **Containerization**: Docker & Docker Compose
-   **Testing**: Jest
-   **Code Quality**: ESLint & Prettier

## Project Structure

```
Microservice/
├── notification/          # Notification Service
│   ├── src/
│   │   └── notification/
│   │       ├── notification.controller.ts
│   │       ├── notification.service.ts
│   │       ├── notification.validation.ts
│   │       └── notification.interface.ts
│   ├── Dockerfile
│   ├── package.json
│   └── README.md
├── user/                   # User Service
│   ├── src/
│   │   ├── user/
│   │   │   ├── user.controller.ts
│   │   │   ├── user.service.ts
│   │   │   ├── user.repository.ts
│   │   │   ├── user.validation.ts
│   │   │   └── user.interface.ts
│   │   └── common/
│   │       └── config/
│   │           └── service.config.ts
│   ├── .env
│   ├── Dockerfile
│   ├── package.json
│   └── README.md
├── docker-compose.yml
└── README.md
```

## Quick Start

### Prerequisites

-   Docker and Docker Compose installed on your system
-   Node.js (if running locally without Docker)

### Running with Docker (Recommended)

1. Clone the repository:

```bash
git clone <repository-url>
cd notification-microservice/Microservice
```

2. Build and start the services:

```bash
docker-compose up --build
```

3. The services will be available at:
    - User Service: http://localhost:3001
    - Notification Service: http://localhost:3002

### Running Locally

1. Navigate to each service directory and install dependencies:

```bash
# User Service
cd user
npm install

# Notification Service
cd ../notification
npm install
```

2. Start each service in separate terminals:

```bash
# In notification directory
npm run start:dev

# In user directory (in another terminal)
npm run start:dev
```

## API Endpoints

### User Service

#### Create User

-   **POST** `/users`
-   **Request Body**:

```json
{
	"name": "John Doe",
	"email": "john@example.com"
}
```

-   **Response**: Creates a user and sends a welcome notification

#### Get All Users

-   **GET** `/users`
-   **Response**: Returns all users

### Notification Service

#### Create Notification

-   **POST** `/notifications`
-   **Request Body**:

```json
{
	"userId": "user-id",
	"message": "Notification message"
}
```

#### Get All Notifications

-   **GET** `/notifications`
-   **Response**: Returns all notifications

## Environment Configuration

### User Service (.env)

```env
NOTIFICATION_URL=http://localhost:3002
```

## Service Communication

The User Service communicates with the Notification Service using HTTP requests:

1. When a new user is created, the User Service automatically sends a POST request to the Notification Service
2. The Notification Service creates and stores a welcome notification for the user
3. This demonstrates inter-service communication in a microservices architecture

## Development

### Available Scripts

For each service, the following npm scripts are available:

-   `npm run start` - Start in production mode
-   `npm run start:dev` - Start in development mode with hot reload
-   `npm run start:debug` - Start in debug mode
-   `npm run build` - Build the application
-   `npm run test` - Run unit tests
-   `npm run test:cov` - Run tests with coverage
-   `npm run lint` - Run ESLint
-   `npm run format` - Format code with Prettier

### Testing

Run tests for each service:

```bash
cd user && npm test
cd ../notification && npm test
```

## Docker Configuration

### User Service Dockerfile

-   Based on Node.js Alpine image
-   Exposes port 3001
-   Runs the production build

### Notification Service Dockerfile

-   Based on Node.js Alpine image
-   Exposes port 3002
-   Runs the production build

### Docker Compose

-   Orchestrates both services
-   Sets up service dependencies (user depends on notification)
-   Configures environment variables for inter-service communication
-   Maps ports to host machine

## Features

-   **Microservices Architecture**: Separate, independently deployable services
-   **Service Communication**: HTTP-based inter-service communication
-   **Data Validation**: Joi-based request validation
-   **Error Handling**: Comprehensive error handling and logging
-   **Containerization**: Full Docker support
-   **Type Safety**: TypeScript throughout the codebase
-   **Testing**: Jest testing framework setup
-   **Code Quality**: ESLint and Prettier configuration

## Future Enhancements

-   Add database persistence (MongoDB/PostgreSQL)
-   Implement message queue for asynchronous communication
-   Add authentication and authorization
-   Implement API rate limiting
-   Add monitoring and logging (Winston, Morgan)
-   Create API documentation with Swagger
-   Add health check endpoints
-   Implement circuit breaker pattern
-   Add distributed tracing

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Ensure all tests pass
6. Submit a pull request

## License

This project is licensed under the UNLICENSED license.
