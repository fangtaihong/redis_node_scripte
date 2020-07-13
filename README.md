redis 용량을 채우기 윈한 방법

## how to use

```
npm install redis --save
npm install shelljs --save
npm install random-string --save

# 10MB value key iter개 설정
redis_set_data.js [domain] [port] [pw] [key] [iter]

# 모든 키 조회
redis_get_all_key.js [domain] [port] [pw]

# 10MB value key iter번 조회
redis_set_data.js [domain] [port] [pw] [key] [iter]

# key iter개 삭제
redis_del_data.js [domain] [port] [pw] [key] [iter]
```
