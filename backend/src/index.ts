//  npx ts-node --esm backend/src/index.ts
//http://localhost:3000


// Starts the web Server 
// COnfiguring how the API behaves
//sets up the routes (basically our main like in other languages)

// backend/src/index.ts
import express from "express";

// Important: include `.ts` extension if you use allowImportingTsExtensions
import assignmentRoutes from "./routes/assignment.ts";  

import fileUpload from "express-fileupload";

const app = express();

app.use(express.json());
app.use(fileUpload());

// Mount the assignment router
app.use("/assignments", assignmentRoutes);

app.listen(3000, () => {
  console.log("Server listening on http://localhost:3000");
});
