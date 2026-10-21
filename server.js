
require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");
const authRoutes = require("./routes/auth");
const vendorRoutes = require("./routes/vendors");

const app = express();
const PORT = process.env.PORT || 5000;
const categoryRoutes = require("./routes/categories");

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to Harevent Backend API!"
  });
});

// Register API routes
app.use("/api/auth", authRoutes);
app.use("/api/vendors", vendorRoutes);

app.use("/api/categories", categoryRoutes);

async function startServer() {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Server startup failed.");
    process.exit(1);
  }
}

startServer();
