import {send_mail_queue} from '../queues/send_mail.queue.js'
import {z} from "zod"

const taskSchema = z.object({
    tomail: z.string()
})

const send_mail_controller  = async (req,res) => {

const validate_result = await taskSchema.safeParseAsync(req.body);

  if (validate_result.error) {
      return res.status(400).json(
        validate_result.error
      )
    }
      console.log("I am validated data : ",validate_result.data);
      console.log("I am validated success : ", validate_result.success);

    const {tomail} = validate_result.data;
    const job = await send_mail_queue.add(`sendmail-${tomail}`, {
        tomail
    })
    return res.status(200).json({
        message: `added to queue`,
        "jobId": job.id
    })

}


export default send_mail_controller;