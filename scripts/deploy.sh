#!/bin/bash
set -e

cd ~/catrius_blog_frontend
git pull
yarn install
yarn build
