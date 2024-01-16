const express = require("express");
const app = express();
const port = 3000;
const mysql = require("mysql2/promise");

const connection = mysql.createPool({
  host: "119.59.100.50",
  user: "hirun_tax_db",
  password: "hirun_tax_db",
  database: "hirun_tax_db",
  port :3306
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/users", async (req, res) => {
  try {
    const sql = "SELECT * FROM users "
    const [result] = await connection.query(sql)
    res.json(result)
  } catch (error) {
    console.error(error);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
