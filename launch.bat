@echo off
title launch cake. server
powershell -Command "& {npm install js-cookie}"
powershell -Command "& {npm install express}"
powershell -Command "& {npm install pug}"
powershell -Command "& {npm install mysql}"
powershell -Command "& {npm install js-sha256}"
powershell -Command "& {npm install https}"
cls
start http://localhost:3000/
:minimized
powershell -Command "& {node server.js}"
