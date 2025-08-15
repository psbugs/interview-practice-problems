const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();

// Configure storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Upload to 'uploads/' folder
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname)); // unique-name.jpg
  }
});

// Multer instance
const upload = multer({ storage: storage });

// File upload route
app.post('/upload', upload.single('myFile'), (req, res) => {
  res.json({
    message: 'File uploaded successfully!',
    fileInfo: req.file
  });
});

// Create uploads directory if not exists (optional)
const fs = require('fs');
if (!fs.existsSync('./uploads')) {
  fs.mkdirSync('./uploads');
}

app.listen(3000, () => {
  console.log('Server started on port 3000');
});