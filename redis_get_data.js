// redis 연결하여 key iter번 조회

const args = process.argv;
const domain = args[2];
const port = args[3];
const pw = args[4];
const key = args[5];
const iter = args[6];

var redis = require('redis');
var shell = require('shelljs');

var client = redis.createClient({host: domain, port: port}); 
client.auth(pw); 
client.on('error', err => console.log('------ Redis connection failed ------' + err))
	  .on('error', err => shell.exit(1)) 
	  .on('connect', () => console.log('------ Redis connection succeed ------')); 

for (var i = 0; i < iter; i++) {
	var num = i + 1;
	client.get(key, function (err, data) { 
		if ('nil' == data) {
			console.log('Get 결과: 존재하지 않는 Key');
		} else {
			console.log(num, 'Get 결과:', err);
		}
	}) 
}
client.quit();