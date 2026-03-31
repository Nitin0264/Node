import express from "express";
import multer from "multer";
import path from "path"; // Useful for handling paths safely


let app = express();

// FIX 1: Tell Express how to render files
app.set("view engine", "ejs"); 

let storage = multer.diskStorage({
    destination: function(req, file, cb) {
        // Ensure this folder exists on your computer!
        cb(null, `${process.cwd()}/upload`);
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    }
});

let upload = multer({ storage });

// GET: Shows the page
app.get("/", (req, res) => {
    res.render("upload"); 
});

// POST: Handles the file
// Note: "img1" must match the 'name' attribute in your HTML <input>
app.post("/upload", upload.single("img1"), (req, res) => {
    console.log("File received!");
    console.log(req.file);
    res.send("Upload successful!"); // Send a response so the browser doesn't hang
});

app.listen(8000, () => {
    console.log("Server running on http://localhost:8000");
});