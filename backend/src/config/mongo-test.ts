import "dotenv/config";
import { MongoClient } from "mongodb";

async function test() {
  const uri = process.env.MONGODB_URI!;

  console.log("Testing MongoDB connection...");

  const client = new MongoClient(uri);

  try {
    await client.connect();

    console.log("✅ Connected successfully!");

    const adminDb = client.db("admin");
    const result = await adminDb.command({ ping: 1 });

    console.log(result);
  } catch (err) {
    console.error("❌ Connection failed:");
    console.dir(err, { depth: null });
  } finally {
    await client.close();
  }
}

test();