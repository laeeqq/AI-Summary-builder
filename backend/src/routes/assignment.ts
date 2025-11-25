// backend/src/routes/assignment.ts

import { Router } from "express";           // Runtime import
import multer from "multer";                // Runtime import
import * as pdfParse from "pdf-parse";     // Runtime import

import type { Request, Response } from "express";  // Type-only import

const router = Router();

// Configure multer to store uploads in 'uploads/' folder
const upload = multer({
  dest: "uploads/"
});

// -------------------- ROUTES --------------------

// Test route to check if router is working
router.get("/", (req: Request, res: Response) => {
  res.send("Assignment route is working!");
});

// Upload route: receives a single file from the client under the field name 'assignment'
router.post(
  "/upload",
  upload.single("assignment"),
  async (req: Request, res: Response) => {
    try {
      // multer stores uploaded file metadata at req.file
      if (!req.file) {
        return res.status(400).json({
          error: "No file uploaded. The field name must be 'assignment'."
        });
      }

      // Build metadata to return to frontend
      const fileMeta = {
        fieldname: req.file.fieldname,
        originalname: req.file.originalname,
        encoding: req.file.encoding,
        mimetype: req.file.mimetype,
        size: req.file.size,
        destination: req.file.destination,
        filename: req.file.filename,
        path: req.file.path
      };

      // TODO: Add PDF processing or Grok AI summarization here
      // Example placeholder:
      // const pdfBuffer = fs.readFileSync(req.file.path);
      // const pdfData = await pdfParse(pdfBuffer);

      return res.status(200).json({
        message: "File received successfully",
        file: fileMeta
        // pdfData
      });
    } catch (err) {
      console.error("Upload error:", err);
      return res.status(500).json({ error: "Upload failed" });
    }
  }
);

// Export the router so it can be used in index.ts
export default router;
