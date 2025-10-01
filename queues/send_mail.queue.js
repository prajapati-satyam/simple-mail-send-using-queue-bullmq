import {Queue} from "bullmq"
import {redisConnection} from '../connection/redis-connect.js'

export const QueueMap = {
    mailqueue: "mailqueue"
}

export const send_mail_queue = new Queue(QueueMap['mailqueue'], {
    connection: redisConnection
});