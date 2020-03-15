#!/bin/bash

cd ~/catrius_blog_frontend || return
git pull
yarn build
