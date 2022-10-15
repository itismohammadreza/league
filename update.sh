#!/bin/bash

cd fifa/
git pull origin main
docker build -t fifa:v1 .
docker rm -f fifa
./docker_run.sh
