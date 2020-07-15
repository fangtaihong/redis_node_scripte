#!/bin/bash

set -x
set -e

DOMAIN=$1
PORT=$2
PW=$3
KEY=$4
VALUE=$5
SECONDS=$6

node redis_set_data.js $1 $2 $3 $4 $5 $6

echo "exit code" $?