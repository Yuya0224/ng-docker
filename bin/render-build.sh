#!/usr/bin/env bash
# exit on error
set -o errexit

npm install
ng node --max_old_space_size=4096 && ng build --prod
