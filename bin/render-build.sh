#!/usr/bin/env bash
# exit on error
set -o errexit

npm install
export NODE_OPTIONS="--max_old_space_size=4096"
ng build --prod
