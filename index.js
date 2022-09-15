const express = require("express");
const userRouters = require("./routes/v1/userRoutes");
const app = express();
const port = 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use("/api/v1/users", userRouters);
app.use("/api/v1/user", userRouters);

// if not match all types of HTTP request or existing routes
app.all("*", (req, res) => {
  res.send("No route found");
});

app.listen(port, () => {
  console.log(`Random User Generator App Listening on Port ${port}`);
});
