const express = require('express');
const app = express();

// middleware
app.use(cors());
app.use(express.json());

app.listen(5000, () => {
    console.log('server has been started on port 5000');
});