var express = require('express')
var router = express.Router()
const { unlink } = require('fs-extra')
const path = require('path')
const delay = require('delay')

router.get('/', async (req, res) => {
  res.render('index')
})

router.get('/agregarpedido', async (req, res) => {
  res.render('Nuevo')
})

router.post('/preparar', async (req, res) => {
  res.render('Nuevo')
})

module.exports = router
