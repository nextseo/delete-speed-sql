const express = require("express");
const app = express();
const port = 3000;
const mysql = require("mysql2/promise");

const connection = mysql.createPool({
  host: "db-mysql-nyc3-29411-do-user-15536941-0.c.db.ondigitalocean.com",
  user: "doadmin",
  password: "AVNS_JRT_Pbi75Cylk9vK3h7",
  database: "devsriwa_app_share",
  port :25060
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/users", async (req, res) => {
  try {
    const sql = "SELECT * FROM home_share"
    const [result] = await connection.query(sql)
    res.json(result)
  } catch (error) {
    console.error(error);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
