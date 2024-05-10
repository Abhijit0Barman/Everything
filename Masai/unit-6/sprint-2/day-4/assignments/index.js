const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;

// Connect to MongoDB (Make sure your MongoDB server is running)
mongoose.connect('mongodb://localhost/moviestore', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define Movie Schema
const movieSchema = new mongoose.Schema({
  title: String,
  rating: Number,
  // Add other fields as needed
});

const Movie = mongoose.model('Movie', movieSchema);

// Middleware for JSON parsing
app.use(express.json());

// CRUD Operations

// Create a movie
app.post('/movies', async (req, res) => {
  try {
    const movie = new Movie(req.body);
    await movie.save();
    res.status(201).json(movie);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all movies with filtering, searching, sorting, and pagination
app.get('/movies', async (req, res) => {
  try {
    const { title, rating, q, sortBy, page, limit } = req.query;
    let query = {};

    if (title) {
      query.title = new RegExp(title, 'i');
    }

    if (rating) {
      query.rating = rating;
    }

    if (q) {
      query.$or = [{ title: new RegExp(q, 'i') }];
    }

    const sortOptions = {};
    if (sortBy) {
      sortOptions[sortBy] = 1; // 1 for ascending order, -1 for descending order
    }

    const movies = await Movie.find(query)
      .sort(sortOptions)
      .skip((page - 1) * limit)
      .limit(parseInt(limit, 10) || 10);

    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a movie
app.put('/movies/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await Movie.findByIdAndUpdate(id, req.body, { new: true });
    res.json(movie);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a movie
app.delete('/movies/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Movie.findByIdAndDelete(id);
    res.json({ message: 'Movie deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
