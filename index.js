const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const FOLDER_PATH = path.join(__dirname, 'files');

// Ensure the folder exists
if (!fs.existsSync(FOLDER_PATH)) {
  fs.mkdirSync(FOLDER_PATH);
}

// Endpoint to create a text file with the current timestamp
app.post('/create-file', (req, res) => {
  const now = new Date();
  const fileName = `${now.toISOString().replace(/[:.]/g, '-')}.txt`;
  const filePath = path.join(FOLDER_PATH, fileName);
  const content = now.toISOString();

  fs.writeFile(filePath, content, (err) => {
    if (err) {
      return res.status(500).json({ message: 'Failed to create file', error: err });
    }
    res.status(201).json({ message: 'File created successfully', fileName });
  });
});

// Endpoint to retrieve all text files in the folder
app.get('/files', (req, res) => {
  fs.readdir(FOLDER_PATH, (err, files) => {
    if (err) {
      return res.status(500).json({ message: 'Failed to read directory', error: err });
    }
    const txtFiles = files.filter(file => path.extname(file) === '.txt');
    res.status(200).json({ files: txtFiles });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
