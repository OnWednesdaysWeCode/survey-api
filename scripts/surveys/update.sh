#!/bin/bash

API="http://localhost:4741"
URL_PATH="/surveys"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
  "survey": {
    "question": "'"${QUESTION}"'",
    "option1": "'"${OPT1}"'",
    "option2": "'"${OPT2}"'"
  }
}'

echo
