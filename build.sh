#!/bin/sh

set -ex

cd $(dirname $0)
npm i
npm run build
docker build -t suhassiddu/fe:latest .
