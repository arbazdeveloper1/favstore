const express = require("express");
const app = express();
const route = express.Router();
const connection = require('../db/connection')
// =======================  route get api =========================================
route.get("/", (req, res) => {
  try {
    res.send("200");
  } catch (error) {
    console.log(error);
  }
});

// ============================  API FOR USER QUERY ==============================================

route.post("/api/datapost", async (req, res) => {
  try {
    let name = req.body.name;
    let email = req.body.email;
    let phone = req.body.phone;
    let message = req.body.message;

    let query = `INSERT INTO QUERY_MASTER (NAME,EMAIL,PHONE,MESSAGE) VALUE ('${name}','${email}','${phone}','${message}')`;

    connection.query(function (err, result) {
      if (!err) {
        res.json({ msg: "data post success" });
      } else {
        res.json({ msg: "something went wrong" });
      }
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Internal server error" });
  }
});

module.exports = route;
