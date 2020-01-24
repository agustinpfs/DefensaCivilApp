const { Router } = require('express');
const router = Router(); //Router express method

const { createGeo, getGeo } = require('../controllers/geo.controller');

router.route('/')
    .get(getGeo) 
    .post(createGeo);

// router.route('/:id')
//     .get(getGeo)
//     .delete(deleteGeo)
//     .put(updateGeo);

module.exports = router;