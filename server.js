const express = require('express');
const app = express();
const cors = require('cors');

// Middleware
app.use(express.json());
app.use(cors());

// POST request to process input data
app.post('/bfhl', (req, res) => {
  const { data } = req.body;

  if (!data || !Array.isArray(data)) {
    return res.status(400).json({
      is_success: false,
      message: "Invalid input",
    });
  }

  // Filter data
  const numbers = data.filter((item) => !isNaN(item));
  const alphabets = data.filter((item) => isNaN(item));
  const lowerCaseAlphabets = alphabets.filter(
    (char) => char === char.toLowerCase()
  );
  const highestLowerCase = lowerCaseAlphabets.sort().pop() || '';

  res.json({
    is_success: true,
    user_id: "your_name_17091999",
    email: "your_email@college.com",
    roll_number: "your_roll_number",
    numbers: numbers,
    alphabets: alphabets,
    highest_lowercase_alphabet: highestLowerCase ? [highestLowerCase] : [],
  });
});

// GET request to return operation_code
app.get('/bfhl', (req, res) => {
  res.status(200).json({
    operation_code: 1,
  });
});

// Listen on port 5000
const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

