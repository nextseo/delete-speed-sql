const express = require("express");
const app = express();
const port = 3000;
const mysql = require("mysql2/promise");

const connection = mysql.createPool({
  host: "147.50.231.19",
  user: "devsriwa_taxinvoice",
  password: "*Devsri1234",
  database: "taxinvoice_db",
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
