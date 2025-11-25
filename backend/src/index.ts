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

