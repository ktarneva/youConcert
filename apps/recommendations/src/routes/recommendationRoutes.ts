const express = require('express');
const recommendationsController = require ("../controllers/recommendationsController");

const router = express.Router();

router.get('/create',recommendationsController.recommendations_create_get);
router.get('/',recommendationsController.recommendations_index);
router.post('/',recommendationsController.recommendations_create_post);
router.get('/:id',recommendationsController.recommendations_details);
router.delete('/:id',recommendationsController.recommendations_delete);

export { router as recommendationsEouter };