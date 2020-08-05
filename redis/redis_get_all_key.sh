#!/bin/bash

set -x
set -e

DOMAIN=$1
PORT=$2
PW=$3

node redis_get_all_key.js $1 $2 $3

echo "exit code" $?