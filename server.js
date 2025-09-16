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

// Theme endpoint with CORS
app.get("/theme", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.json({
    general: {
      primary: "#32F20C",
      secondary: "#64748b",
      background: "#ffffff",
      success: "#10b981",
      error: "#ef4444",
      clientLogo: "",
    },
    typography: {
      fontFamily: "Inter",
      textHeadingColor: "#111827",
      textBodyColor: "#111827",
      textSmallColor: "#6b7280",
      textLinkColor: "#000000",
    },
    button: {
      textButtonPrimaryColor: "#32F20C",
      textButtonSecondaryColor: "#ffffff",
      textButtonPrimaryFillColor: "#4462EC",
      textButtonPrimaryBorderColor: "#111827",
      textButtonSecondaryFillColor: "#E7EBFD",
      textButtonSecondaryBorderColor: "#ffffff",
    },
    input: {
      inputBackgroundColor: "#ffffff",
      inputBorderColor: "#d1d5db",
      inputTextColor: "#111827",
    },
  });
});

// Root endpoint
app.get("/", (req, res) => {
  res.json({
    message: "Mock API Server is running!",
    endpoints: [
      "GET /api/hello - Simple greeting endpoint",
      "GET /api/health - Health check endpoint",
      "GET /theme - Theme configuration endpoint",
    ],
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Mock API server is running on http://localhost:${PORT}`);
  console.log(`📋 Available endpoints:`);
  console.log(`   GET http://localhost:${PORT}/api/hello`);
  console.log(`   GET http://localhost:${PORT}/api/health`);
  console.log(`   GET http://localhost:${PORT}/theme`);
  console.log(`   GET http://localhost:${PORT}/`);
});

module.exports = app;
