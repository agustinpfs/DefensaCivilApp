const { Router } = require('express');
const router = Router(); //Router express method

const { createEntity, getEntity } = require('../controllers/entity.controller');

router.route('/')
    .get(getEntity) 
    .post(createEntity);

// router.route('/:id')
//     .get(getEntity)
//     .delete(deleteEntity)
//     .put(updateEntity);

module.exports = router;