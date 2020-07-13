// redis 연결하여 key 삭제

const args = process.argv;
const domain = args[2];
const port = args[3];
const pw = args[4];
const key = args[5];

var redis = require('redis');
var shell = require('shelljs');
var randomString = require('random-string');

var client = redis.createClient({host: domain, port: port}); 
client.auth(pw); 
client.on('error', err => console.log('------ Redis connection failed ------' + err))
	  .on('error', err => shell.exit(1)) 
	  .on('connect', () => console.log('------ Redis connection succeed ------')); 

client.del(key, function (err, result) {
	console.log('Del 결과: ', err, result);
});
client.quit();