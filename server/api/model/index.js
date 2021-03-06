'use strict';

var express = require('express');
var controller = require('./model.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.get('/:year/:makeType/:modelType', controller.filter);
router.post('/', controller.create);
router.put('/:id', controller.upsert);
router.patch('/:id', controller.patch);
router.delete('/:id', controller.destroy);
router.post('/image', controller.uploadImage);

module.exports = router;
