import { createClient } from 'redis';

const redisClient = createClient({
    username: 'default',
    password: 'ffkgDfNNG6ZsJy1b6zN2ysMjCorBLyQB',
    socket: {
        host: 'redis-12721.crce206.ap-south-1-1.ec2.redns.redis-cloud.com',
        port: 12721
    }
});

redisClient.on('error', err => console.log('Redis Client Error', err.message));

await redisClient.connect();

await redisClient.set('foo', 'bar');
const result = await redisClient.get('foo');
console.log(result)  // >>> bar

export default redisClient