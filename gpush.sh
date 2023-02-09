#!/bin/bash
#######################################################################
#Tập tin này dành để push file lên github một cách nhanh chóng và tiện hơn
#Author: baodaigov
#Website: https://baodaigov.github.io
#######################################################################
#Chỉnh sửa message của commit
#git commit --amend -m "Lorem ipsum"
#git push -f origin master 

git add --all .

read -r -p 'Vui lòng nhập message commit vô đây: ' msg

git commit -m "[$(date +'%d/%m/%Y')]: $msg"

git push -f -u origin master

echo 'Done!'
