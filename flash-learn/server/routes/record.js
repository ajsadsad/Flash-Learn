import express from "express";

// This will help us connect to the database
import db from "../db/connection.js";

// This help convert the id from string to ObjectId for the _id.
import { ObjectId } from "mongodb";

// router is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const router = express.Router();

// This section will help you get a list of all the words.
router.get("/word", async (req, res) => {
  console.log("Received a request for /word");
  let collection = await db.collection("words");
  const results = await collection.find({}, { projection: { word: 1 } }).toArray(); 
  res.json(results); // Send the word bank as JSON
});

// This section will help you get a single record by id
router.get("/:id", async (req, res) => {
  let collection = await db.collection("words");
  let query = { _id: new ObjectId(req.params.id) };
  let result = await collection.findOne(query);

  if (!result) res.send("Not found").status(404);
  else res.send(result).status(200);
});

export default router;