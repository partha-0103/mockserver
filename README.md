# Mock API Server

A simple mock API server built with Express.js for frontend development and testing.

## Features

- Express.js server with CORS enabled
- JSON response format
- Health check endpoint
- Simple greeting endpoint

## Installation

1. Install dependencies:

```bash
npm install
```

## Usage

### Start the server:

```bash
npm start
```

### Development mode (with auto-restart):

```bash
npm run dev
```

The server will start on `http://localhost:3000` by default.

## Available Endpoints

- `GET /` - Server information and available endpoints
- `GET /api/hello` - Simple greeting endpoint
- `GET /api/health` - Health check endpoint

## Example Responses

### GET /api/hello

```json
{
  "message": "Hello from the mock API server!",
  "timestamp": "2024-01-01T12:00:00.000Z",
  "status": "success"
}
```

### GET /api/health

```json
{
  "status": "healthy",
  "uptime": 123.456,
  "timestamp": "2024-01-01T12:00:00.000Z"
}
```

## Configuration

- Port: Set via `PORT` environment variable (default: 3000)
- CORS: Enabled for all origins
- JSON parsing: Enabled for request bodies
