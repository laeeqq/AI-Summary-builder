//Handling the requests related to assignments
//Responsible for Uploading a file 
//Sending it AI to summarize it 

import {Router } from "express";
import UploadedFile from "express-fileupload";

const router = Router();

router.use(UploadedFile());

// Test route to check if this router works
router.get("/", (req, res) => {
  res.send("Assignment route is working!");
});

//This route will receive the assignment file from the 
//front end

router.post("/upload", (req , res) => {
    if(!req.files || !req.files.assignment){
        return res.status(400).send("No file uploaded")
    }

    const file = req.files.assignment; // 'assignment' is the name from the frontend form

    res.send("file Receieved");

});


//Export the router so it can be used in index.ts 
export default router;




