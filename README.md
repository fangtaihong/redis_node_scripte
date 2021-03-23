redis 용량을 채우기 윈한 방법2

## how to use

```
node --version
npm install
npm install shelljs --save
npm install redis --save
npm install redis-errors --save
npm install random-string --save

chmod +x ./redis_set_data.sh
./redis_set_data.sh $DOMAIN $PORT $PW $KEY $ITER

# 10MB value key iter개 설정
redis_set_data.js [domain] [port] [pw] [key] [iter]

# 모든 키 조회
redis_get_all_key.js [domain] [port] [pw]

# 10MB value key iter번 조회
redis_set_data.js [domain] [port] [pw] [key] [iter]

# key iter개 삭제
redis_del_data.js [domain] [port] [pw] [key] [iter]

# expire key 설정
redis_set_expire_key.js [domain] [port] [pw] [key] [value] [expire]

# data 유형별 확인
redis_set_by_db_type.js [domain] [port] [pw]
```
