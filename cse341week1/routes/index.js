const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.send('Jonathan Wright');
});

module.exports = routes;