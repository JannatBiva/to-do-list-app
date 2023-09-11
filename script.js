// Import required modules
const express = require('express');
const app = express();
const port = 3000; 

// Serve static files (CSS, JavaScript, etc.) from a "public" directory
app.use(express.static('public'));

// Set up a basic route for the home page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
