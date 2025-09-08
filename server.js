const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Simple GET endpoint
app.get("/api/hello", (req, res) => {
  res.json({
    message: "Hello from the mock API server!",
    timestamp: new Date().toISOString(),
    status: "success",
  });
});

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({
    status: "healthy",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
});

// Root endpoint
app.get("/", (req, res) => {
  res.json({
    message: "Mock API Server is running!",
    endpoints: [
      "GET /api/hello - Simple greeting endpoint",
      "GET /api/health - Health check endpoint",
    ],
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Mock API server is running on http://localhost:${PORT}`);
  console.log(`📋 Available endpoints:`);
  console.log(`   GET http://localhost:${PORT}/api/hello`);
  console.log(`   GET http://localhost:${PORT}/api/health`);
  console.log(`   GET http://localhost:${PORT}/`);
});

module.exports = app;
