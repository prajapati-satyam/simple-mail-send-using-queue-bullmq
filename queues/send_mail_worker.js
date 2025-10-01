import {Worker} from "bullmq"
import {QueueMap} from './send_mail.queue.js'
import send_mail from "../utils/send_mail.js"
import {redisConnection} from '../connection/redis-connect.js'


export const send_mail_worker = new Worker(QueueMap['mailqueue'], async(job) => {
    console.log(`proccing job : ${job.id}`);
    console.log(`sending mail to : ${job.data.tomail}`);
    await send_mail(job.data.tomail, job.id);
    console.log(`mail sent to : ${job.data.tomail}`);
    console.log(`job done : ${job.id}`);
    return true

}, {
    autorun: false,
    connection: redisConnection,
    concurrency: 5,
    limiter: {
        duration: 10 * 5,
        max: 5
    }
});
