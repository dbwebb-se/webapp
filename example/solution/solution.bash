#!/usr/bin/env bash

# 1. Hitta de 'keys' som finns i filen. Lägg svaret i filen 'a.txt'.
jq 'keys' tag-dbwebb.json | tee a.txt
