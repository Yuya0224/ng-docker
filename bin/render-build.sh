#!/usr/bin/env bash
# exit on error
set -o errexit

npm install
NODE_OPTIONS="--max-old-space-size=4096" ng build --prod
