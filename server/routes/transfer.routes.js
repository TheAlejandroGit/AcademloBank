const express = require('express');
const { transfer } = require('../controllers/transfer.controller');
const router = express.Router();
router.post('/', transfer);
module.exports = { transferRoute: router };
