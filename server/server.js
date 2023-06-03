require("dotenv").config({ path: "../.env" });
const express = require("express");
const axios = require("axios");
const app = express();
const port = 5000;
const cors = require("cors");
const API_KEY = process.env.OPENAIAPI_KEY;
const API_URL = process.env.OPENAIAPI_URL;

app.use(cors());
app.use(express.json());
app.post("/", async (req, res) => {
  const userSentence = req.body.userSentence;
  const wordsToReplace = req.body.wordsToReplace;

  try {
    const response = await axios.post(
      API_URL,
      {
        prompt: `Replace the words ${wordsToReplace} in the sentence ${userSentence} with new words. Make three new sentences.`,
        max_tokens: 50,
        n: 1,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + API_KEY,
        },
      }
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
