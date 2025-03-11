const express = require('express')
const { testController } = require('../controller/testcontroller')
const router = express.Router()

router.get('/', testController)

module.exports = router