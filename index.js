import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send(`<h1>Hello welcome port is ${port}</h1>`);
});

app.get("/about", (req, res) => {
  res.send("<h1>About</h1>");
});

app.post("/register", (req, res) => {
  res.status(201).send("<h1>Register</h1>");
});

app.put("/user/Murad", (req, res) => {
  res.status(200).send("<h1>User Murad Added</h1>");
});

app.patch("/user/Murad", (req, res) => {
  res.status(200).send("<h1>User Murad patched</h1>");
});

app.delete("/user/Murad", (req, res) => {
  res.status(200).send("<h1>User Murad deleted</h1>");
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
