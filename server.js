const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(__dirname));

// Main route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// API endpoint to get categories data
app.get('/api/categories', (req, res) => {
    const categories = [
        { id: 1, name: "Interested", type: "Standard", created_at: "2022-08-30T12:32:48.645Z" },
        { id: 2, name: "Meeting Request", type: "Standard", created_at: "2022-08-30T12:32:55.159Z" },
        { id: 3, name: "Not Interested", type: "Standard", created_at: "2022-08-30T12:33:02.286Z" },
        { id: 4, name: "Do Not Contact", type: "Standard", created_at: "2022-08-30T12:33:09.895Z" },
        { id: 5, name: "Information Request", type: "Standard", created_at: "2022-08-30T12:33:16.204Z" },
        { id: 6, name: "Out Of Office", type: "Standard", created_at: "2022-08-30T12:33:22.323Z" },
        { id: 7, name: "Wrong Person", type: "Standard", created_at: "2022-08-30T12:33:28.519Z" },
        { id: 8, name: "Uncategorizable by Ai", type: "Standard", created_at: "2024-10-25T17:38:36.931Z" },
        { id: 9, name: "Sender Originated Bounce", type: "Standard", created_at: "2025-03-20T22:07:34.290Z" },
        { id: 1451, name: "Need to call", type: "Custom", created_at: "2023-08-02T08:15:57.288Z" },
        { id: 1467, name: "Meeting Booked", type: "Custom", created_at: "2023-08-02T17:07:51.509Z" },
        { id: 3241, name: "Long Term Follow Up", type: "Custom", created_at: "2023-11-28T11:02:41.148Z" },
        { id: 8142, name: "VC Manual Application", type: "Custom", created_at: "2024-05-20T12:06:36.939Z" },
        { id: 16691, name: "Mandate Information", type: "Custom", created_at: "2024-10-30T11:16:53.442Z" },
        { id: 18199, name: "Deck sent", type: "Custom", created_at: "2025-01-06T15:10:43.078Z" }
    ];
    
    res.json(categories);
});

app.listen(PORT, () => {
    console.log(`🚀 SmartLead Categories app running on port ${PORT}`);
    console.log(`📍 Visit http://localhost:${PORT} to view the categories`);
});