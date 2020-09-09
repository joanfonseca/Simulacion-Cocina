var express = require('express')
var router = express.Router()
const { unlink } = require('fs-extra')
const path = require('path')

router.get('/', async (req, res) => {
  res.render('index')
})

router.get('/nuevo', async (req, res) => {
  res.render('Nuevo')
})
module.exports = router
