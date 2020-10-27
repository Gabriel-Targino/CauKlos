const express = require('express');
const controller = require('../controllers');
const router = express.Router();
router.post('/enviar', controller.Create);
router.get('/ver', controller.View);

module.exports = router;