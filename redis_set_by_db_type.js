// redis 연결하여 data 유형별 확인

const args = process.argv;
const domain = args[2];
const port = args[3];
const pw = args[4];

var redis = require('redis');
var shell = require('shelljs');
var randomString = require('random-string');

var client = redis.createClient({host: domain, port: port}); 
if ("not" != pw) {client.auth(pw);}  
client.on('error', err => console.log('------ Redis connection failed ------' + err))
	  .on('error', err => shell.exit(1)) 
	  .on('connect', () => console.log('------ Redis connection succeed ------')); 


client.set("stringTest", "qwer1234#$%", function (err, result) {
	console.log('Set 결과:', err, result);
});

client.rpush("listTest", 1, function (err, result) {
	console.log('rpush 결과:', err, result);
});
client.rpush("listTest", 2, function (err, result) {
	console.log('rpush 결과:', err, result);
});
client.llen("listTest", function (err, result) {
	console.log('llen 결과:', err, result);
});

client.sadd("setTest", "member", function (err, result) {
	console.log('sadd 결과:', err, result);
});

client.hset("hashTest", "id123456", "hashValue", function (err, result) {
	console.log('hset 결과:', err, result);
});
client.hget("hashTest", "id123456", function (err, result) {
	console.log('hget 결과:', err, result);
});

client.quit();