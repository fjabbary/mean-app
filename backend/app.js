const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

app.use(express.json())

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS')
    next();
})

const posts = [
    {
        id: 'asdasd',
        title: 'Post One title',
        content: 'Post one content'
    },
    {
        id: 'sdfsad',
        title: 'Post two',
        content: 'Post two content coming from server'
    },
];

app.get('/api/posts', (req, res) => {

    res.status(200).json({
        message: 'post fetched successfully',
        data: posts
    })
})

app.post('/api/posts', (req, res) => {
    const post = req.body;
    posts.push(post);

    res.status(201).json({
        message: 'post added successfully'
    })
})

module.exports = app;