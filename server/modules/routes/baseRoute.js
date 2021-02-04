const express = require('express');

const router = express.Router();

// Hello World! message
router.get('/', (req, res, next) => {
    res.json({
        message: 'Welcome to the Chalkboard API!'
    })
});

// Export router to app
exports.router = router;
