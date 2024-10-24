import { MongoClient, ServerApiVersion } from "mongodb";

const uri = "mongodb+srv://admin:admin@cluster0.hz1w8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

    const databasesList = await client.db().admin().listDatabases();
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));

    // Select a specific database
    const dbName = "Flash-Learn";
    const db = client.db(dbName);

    // List collections in the selected database
    const collections = await db.listCollections().toArray();
    console.log(`Collections in ${dbName}:`);
    collections.forEach(col => console.log(` - ${col.name}`));
  } catch (err) {
    console.error(err);
  }
}
run().catch(console.dir);

let db = client.db("Flash-Learn")

export default db;