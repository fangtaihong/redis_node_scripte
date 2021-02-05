// redis 연결하여 10M value인 key iter개 생성
const { ReplyError, RedisError } = require('redis-errors');

const args = process.argv;
const domain = args[2];
const port = args[3];
const pw = args[4];
const key = args[5];
const iter = args[6];

var redis = require('redis');
var shell = require('shelljs');
var randomString = require('random-string');

//var client = redis.createClient({host: domain, port: port}); 
const client = redis.createClient({
	host: domain, 
	port: port,
	retry_strategy: function(options) {
		if (options.error && (options.error.code === "ECONNREFUSED" || options.error.code === "NR_CLOSED")) {
			console.error('The server refused the connection. Retrying connection...');
			return 5000;
		}
		if (options.total_retry_time > 1000 * 60 * 60) {
			return new Error("Retry time exhausted");
		}
		if (options.attempt > 10) {
			return undefined;
		}
		// reconnect after
		return Math.min(options.attempt * 100, 3000);
	},
});

if ("not" != pw) {client.auth(pw);}  
client.on('error', err => console.log('------ Redis connection failed ------' + err))
	  .on('error', err => shell.exit(1)) 
	  .on('connect', () => console.log('------ Redis connection succeed ------')); 

var num = 10 * 1024 * 1024;
var valueData = randomString({ length: num, numeric: false });

for (var i = 1; i <= iter; i++) {
	client.set(key + i, valueData, function(err, result) {
		if (err instanceof RedisError) {
			console.log("Redis error.", err.code);
		}
		else {
			console.log("Set key: ", err, result);
		}
	});
}
client.quit();
