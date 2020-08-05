// redis 연결하여 10M value인 key iter개 생성

const args = process.argv;
const domain = args[2];
const port = args[3];
const pw = args[4];
const key = args[5];
const value = args[6];
const seconds = args[7];

var redis = require('redis');
var shell = require('shelljs');

var client = redis.createClient({host: domain, port: port}); 
client.auth(pw); 
client.on('error', err => console.log('------ Redis connection failed ------' + err))
	  .on('error', err => shell.exit(1)) 
	  .on('connect', () => console.log('------ Redis connection succeed ------')); 

client.set(key, value, function (err, result) {
	console.log('Set 결과:', err, result);
});
client.expire(key, seconds);
client.quit();