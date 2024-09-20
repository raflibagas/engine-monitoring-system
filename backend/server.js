const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Sample data (replace with database in production)
let activities = [
  { id: 1, date: '2024-12-01', day: 'MONDAY', status: 'COMPLETED' },
  { id: 2, date: '2024-12-02', day: 'TUESDAY', status: 'COMPLETED' },
  // ... add more sample data
];

// Routes
app.get('/api/activities', (req, res) => {
  res.json(activities);
});

app.post('/api/activities', (req, res) => {
  const newActivity = {
    id: activities.length + 1,
    ...req.body
  };
  activities.push(newActivity);
  res.status(201).json(newActivity);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});