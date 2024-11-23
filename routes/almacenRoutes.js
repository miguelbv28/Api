const express = require('express');
const AlmacenController = require('../controllers/almacenControllers');

const router = express.Router();

// Definición de rutas para almacenes
router.get('/almacenes', AlmacenController.getAllAlmacenes);
router.post('/almacenes', AlmacenController.createAlmacen);
router.get('/almacenes/:id', AlmacenController.getAlmacenById);
router.put('/almacenes/:id', AlmacenController.updateAlmacen);
router.delete('/almacenes/:id', AlmacenController.deleteAlmacen);

module.exports = router;
