import { int } from 'zod'
import {send_mail_worker} from './queues/send_mail_worker.js'



async function init() {
 await send_mail_worker.run()
}


init();