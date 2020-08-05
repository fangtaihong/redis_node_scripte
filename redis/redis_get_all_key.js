// redis 연결하여 모든 key 조회

const args = process.argv;
const domain = args[2];
const port = args[3];
const pw = args[4];

var redis = require('redis');
var shell = require('shelljs');

var client = redis.createClient({host: domain, port: port}); 
if (null != pw) {
	client.auth(pw); 
}
client.on('error', err => console.log('------ Redis connection failed ------' + err))
	  .on('error', err => shell.exit(1)) 
	  .on('connect', () => console.log('------ Redis connection succeed ------')); 

client.keys('*', function (err, keys) {
	if (err) return console.log(err);
	for(var i = 0, len = keys.length; i < len; i++) {
		var num = i + 1;
		console.log(num, keys[i]);
	}
});
client.quit();