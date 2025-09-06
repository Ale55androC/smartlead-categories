const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(__dirname));

// Main route - serve client login page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'client-login.html'));
});

// Alternative route for categories page if needed
app.get('/categories', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// API endpoint to get credentials (protected in production)
app.get('/api/credentials', (req, res) => {
    // In production, this should be protected with authentication
    const credentials = {
        database: {
            supabase: {
                url: "https://zwelwodcoktuvgmaskug.supabase.co",
                serviceRoleKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp3ZWx3b2Rjb2t0dXZnbWFza3VnIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1MjA1NzE1OCwiZXhwIjoyMDY3NjMzMTU4fQ.MPeMsQMtBcf6wjXEZq042TUJdCu7GBEMZA8aQSRMGU4",
                projectId: "zwelwodcoktuvgmaskug"
            }
        },
        api: {
            smartlead: {
                endpoint: "https://server.smartlead.ai/api/v1",
                apiKey: "faef3d05-be9a-4056-abe3-0d1903efee59_dhcck52"
            }
        },
        stats: {
            totalTables: 74,
            activeUsers: 23,
            smartleadCategories: 15,
            campaigns: 100,
            clients: 14
        }
    };
    
    res.json(credentials);
});

app.listen(PORT, () => {
    console.log(`🔒 Client Login Details app running on port ${PORT}`);
    console.log(`📍 Visit http://localhost:${PORT} to view credentials`);
});