#!/bin/bash

set -x
set -e

DOMAIN=$1
PORT=$2
PW=$3

node redis_set_by_db_type.js $1 $2 $3

echo "exit code" $?