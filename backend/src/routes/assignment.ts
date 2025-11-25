// Handling the requests related to assignments
// Responsible for Uploading a file 
// Sending it to AI to summarize it 

import { Router } from "express";              // Runtime import
import fileUpload from "express-fileupload";   // Runtime import
import type { Request, Response } from "express";     // Type-only import
import type { UploadedFile } from "express-fileupload"; // Type-only import

import * as pdfParse from "pdf-parse";


const router = Router();
router.use(fileUpload()); // Middleware to handle file uploads

// Test route to check if this router works
router.get("/", (req: Request, res: Response) => {
  res.send("Assignment route is working!");
});

// Blueprint of what the properties of the request object can have
interface FileUploadRequest extends Request {
  files?: {
    [key: string]: UploadedFile | UploadedFile[];
  };
}

// This route will receive the assignment file from the frontend
router.post("/upload", (req, res) => {
  const fileReq = req as FileUploadRequest; // Type assertion to access files
  if (!fileReq.files || !fileReq.files.assignment) {
    return res.status(400).send("No file uploaded");
  }

  const file = fileReq.files.assignment; // 'assignment' is the name from the frontend form
  res.send("File received");
});

// Export the router so it can be used in index.ts 
export default router;
