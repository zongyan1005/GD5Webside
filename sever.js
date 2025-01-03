const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 100000;

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/colorMaze", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Define Schemas and Models
const GameplaySchema = new mongoose.Schema({
  title: String,
  text1: String,
  text2: String,
  text3: String,
});

const StorySchema = new mongoose.Schema({
  text1: String,
  text2: String,
  text3: String,
});

const GallerySchema = new mongoose.Schema({
  imgSrc: String,
});

const Gameplay = mongoose.model("Gameplay", GameplaySchema);
const Story = mongoose.model("Story", StorySchema);
const Gallery = mongoose.model("Gallery", GallerySchema);

// Routes
// Get Gameplay Data
app.get("/api/gameplay", async (req, res) => {
  try {
    const data = await Gameplay.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get Story Data
app.get("/api/story", async (req, res) => {
  try {
    const data = await Story.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get Gallery Data
app.get("/api/gallery", async (req, res) => {
  try {
    const data = await Gallery.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add Data (Example)
app.post("/api/gameplay", async (req, res) => {
  try {
    const newGameplay = new Gameplay(req.body);
    const savedData = await newGameplay.save();
    res.status(201).json(savedData);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
