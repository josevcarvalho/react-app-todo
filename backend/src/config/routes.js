const express = require('express')

module.exports = function(server) {
    // API Routes
    const router = express.Router()
    server.use('/api', router)

    // TODO Routes
    require('../api/todo/todoService').register(router, '/todos')
}