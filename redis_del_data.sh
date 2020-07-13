#!/bin/bash

set -x
set -e

DOMAIN=$1
PORT=$2
PW=$3
KEY=$4

node redis_del_data.js $1 $2 $3 $4

echo "exit code" $?