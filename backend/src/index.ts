//  npx ts-node --esm backend/src/index.ts
// http://localhost:3000

// Starts the web Server 
// Configuring how the API behaves
// Sets up the routes (basically our main like in other languages)

import express from "express";



// Important: include `.ts` extension if you use allowImportingTsExtensions
import assignmentRoutes from "./routes/assignment.ts";  

// We no longer need express-fileupload because we're using multer
// import fileUpload from "express-fileupload";

const app = express();

import { fileURLToPath } from "url";
import { dirname, join } from "path";

// Recreate __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import dotenv from "dotenv";
dotenv.config();

const apiKey = process.env.GROK_API_KEY;
console.log("My Grok API Key:", apiKey); // just for testing, remove later



app.use(express.static(join(__dirname, "../../frontend")));



// Middleware to parse JSON bodies
app.use(express.json());

// Mount the assignment router under /assignments
app.use("/assignments", assignmentRoutes);

// Start the server
app.listen(3000, () => {
  console.log("Server listening on http://localhost:3000");
});

app.get("/", (req, res) => {
  res.send("Server is running!");
});

