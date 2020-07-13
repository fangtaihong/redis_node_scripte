#!/bin/bash

set -x
set -e

DOMAIN=$1
PORT=$2
PW=$3
KEY=$4
ITER=$5

npm install redis --save
npm install shelljs --save
npm install random-string --save
node redis_set_data.js $1 $2 $3 $4 $5

echo "exit code" $?