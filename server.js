const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send('GTM Server container is running.');
});

app.get('/gtm/debug', (req, res) => {
    res.send('Debug endpoint working.');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
