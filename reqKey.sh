#!/bin/bash

node reqCount.js

read_count=count.txt

/bin/cat $read_count | while read line ; do

count=`expr $line`

for ((i=0;i<$count;i++))
do
        node reqData.js

        read_flagserver=flagserver.txt
        /bin/cat $read_flagserver | while read line1 ; do
        flagserver="$line1"
        cadd="0"
        cupdate="1"

        read_account=account.txt
        /bin/cat $read_account | while read line2 ; do
        account="$line2"

        if [ $flagserver = $cadd ]
        then
                echo "AddL: $account"
                echo "$account" >> list.txt
        fi

        if [ $flagserver = $cupdate ]
        then
                echo "Updated: $account"
        fi
        sleep 1
        done
        rm flagserver.txt account.txt username.txt rsakey.txt
done
done
done
rm count.txt