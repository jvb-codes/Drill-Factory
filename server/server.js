const express = require("express");
const app = express();
const port = 5000;

// Define routes and middleware
app.get("/", (req, res) => {
  console.log(res);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
