import { Router } from "express";
const router = Router();

import * as controller from '../controller/controller.js';


/** Questions Routes API */
// router.get('/questions', controller.getQuestions)
// router.post('/questions', controller.insertQuestions)

router.route('/questions')
        .get(controller.getQuestions)
        .post(controller.insertQuestions)
        .delete(controller.dropQuestions)

router.route('/result')
        .get(controller.getresults)
        .post(controller.storeResults)
        .delete(controller.dropresults)



export default router;