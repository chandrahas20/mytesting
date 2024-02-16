// server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get("/status", (request, response) => {
    const status = {
       "Status": "Welcome to..!!!status"
    };
    
    response.send(status);
 });

 app.get('/', (req, res) => {
    res.send('Hello World!');
});
// server.js
// Define a sample route with some data
app.get('/api/users', (req, res) => {
    const users = [
        { id: 1, name: 'Chandrahas' },
        { id: 2, name: 'servify' }
    ];
    res.json(users);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port...${PORT}`);
});
