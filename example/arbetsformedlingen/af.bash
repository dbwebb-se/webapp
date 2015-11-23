#!/bin/bash
curl \
    --silent   \
    --header "Accept: application/json" \
    --header "Accept-Language: sv" \
    --header "From: mos@dbebb.se" \
    "http://api.arbetsformedlingen.se/af/v0/$*" \
    | python3 -mjson.tool
#    | jq  '.'
