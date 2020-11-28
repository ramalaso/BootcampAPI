const express = require('express');
const dotenv = require('dotenv');

dotenv.config({ path: './config/config.env' });

const app = express();

app.get('/api/v1/bootcamps', (req, res) => {
    res.status(200).json({ succes: true, message: 'Show all bootcamps.' });
});
app.get('/api/v1/bootcamps/:id', (req, res) => {
    res.status(200).json({ succes: true, message: 'Get bootcamp.' + req.params.id });
});
app.post('/api/v1/bootcamps', (req, res) => {
    res.status(201).json({ succes: true, message: 'Create new bootcamp.' });
});
app.put('/api/v1/bootcamps/:id', (req, res) => {
    res.status(200).json({ succes: true, message: 'Update a bootcamp.' + req.params.id });
});
app.delete('/api/v1/bootcamps/:id', (req, res) => {
    res.status(200).json({ succes: true, message: 'Delete bootcamp ' + req.params.id });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running in  ${process.env.NODE_ENV} mode on port ${PORT}`);
});