#!/bin/bash
set -e

cd ~/catrius_blog_frontend
git checkout master
git pull
yarn install
yarn build
