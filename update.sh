#!/bin/bash

cd fifa/
git pull origin main
docker build -t front:v1 .
docker rm -f front
./docker_run.sh
