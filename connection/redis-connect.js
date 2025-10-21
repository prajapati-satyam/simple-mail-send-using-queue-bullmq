import {Redis} from "ioredis"

export const redisConnection = new Redis(
    {maxRetriesPerRequest: null,
        host: "valkey",
        port: 6379});
