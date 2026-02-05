#!/bin/zsh
# zsh script to help start up this server on linux

rm -Rf _site
npx eleventy --serve
