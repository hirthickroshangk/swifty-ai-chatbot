// server/index.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

// Import the new Google Generative AI client
const { GoogleGenAI } = require("@google/genai");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const port = 3080;

// Initialize Gemini client with API key from .env
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

app.get("/", (req, res) => {
  res.status(200).send({ message: "Hello from HelpAI!" });
});

app.post("/", async (req, res) => {
  try {
    const { message } = req.body;

    // Call Gemini model
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash", // latest recommended model
      contents: message,
    });

    // Send the response back to frontend
    res.status(200).json({
      message: response?.text || "No response",
    });
  } catch (error) {
    console.error("Error from Gemini API:", error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
