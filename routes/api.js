const express = require('express');
const router = express.Router();
const YourModel = require('../models/itemModel'); // Import your Mongoose model

// GET all items
router.get('/get_items', (req, res) => {
  YourModel.find({}, (err, items) => {
    if (err) return res.status(500).send(err);
    res.json(items);
  });
});

// POST (create) a new item
router.post('/add_items', (req, res) => {
  const newItem = new YourModel(req.body);
  newItem.save((err, item) => {
    if (err) return res.status(500).send(err);
    res.status(201).json(
        {

        }
    );
  });
});

// PUT (update) an item by ID
// Server-side validation
const validId = /^[0-9a-fA-F]{24}$/; // Regular expression for a valid ObjectId

app.put('/api/edit_items/:id', (req, res) => {
  const id = req.params.id;
  if (!validId.test(id)) {
    return res.status(400).json({ message: 'Invalid ID format' });
  }

  // Now you can safely use the id in Mongoose operations
  YourModel.findByIdAndUpdate(id, req.body, { new: true }, (err, item) => {
    if (err) return res.status(500).send(err);
    res.json(item);
  });
});


// DELETE an item by ID
router.delete('/delete_items/:id', (req, res) => {
  YourModel.findByIdAndRemove(req.params.id, (err, item) => {
    if (err) return res.status(500).send(err);
    res.sendStatus(204);
  });
});

module.exports = router;
