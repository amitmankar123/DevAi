import { createClient } from 'redis';

const redisClient = createClient({
    username: 'default',
    password: 'fJVsLCryHFRAEWnKc4l98mqEgBq1IpVN',
    socket: {
        host: 'redis-10840.c239.us-east-1-2.ec2.cloud.redislabs.com',
        port: 10840
    }
});

redisClient.on('error', err => console.log('Redis Client Error', err.message));

await redisClient.connect();

await redisClient.set('foo', 'bar');
const result = await redisClient.get('foo');
console.log(result)  // >>> bar

export default redisClient