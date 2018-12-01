#!/usr/bin/expect
# addip address
set URL [lindex $argv 0];
set REPO [lindex $argv 1];
spawn  ssh -o "StrictHostKeyChecking no" -t kapoor@172.23.238.211 "sh script.sh $URL $REPO"
expect "password:"
send "niit@123\n"
interact

