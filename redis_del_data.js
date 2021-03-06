// redis 연결하여 key iter개 삭제

const args = process.argv;
const domain = args[2];
const port = args[3];
const pw = args[4];
const key = args[5];
const iter = args[6];

var redis = require('redis');
var shell = require('shelljs');

var client = redis.createClient({host: domain, port: port}); 
if ("not" != pw) {client.auth(pw);} 
client.on('error', err => console.log('------ Redis connection failed ------' + err))
	  .on('error', err => shell.exit(1)) 
	  .on('connect', () => console.log('------ Redis connection succeed ------')); 

if (0 == iter) {
	client.del(key, function (err, result) {
		console.log('Del 결과:', err, result);
	});
} else {
	for (var i = 1; i <= iter; i++) {
		client.del(key + i, function (err, result) {
			console.log('Del 결과:', err, result);
		});
	}
}
client.quit();