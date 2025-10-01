import express from 'express'
import send_mail_controller from '../controllers/add_task.controller.js';


const route = express.Router();

route.post('/', send_mail_controller)



export default route;