import dotenv from 'dotenv';
dotenv.config()
import { RedisConnection } from "bullmq";
import {Redis} from "ioredis"

export const redisConnection = new Redis(process.env.REDIS_URL,
    {maxRetriesPerRequest: null,
        // host: "",
        port: 6379,
    });
