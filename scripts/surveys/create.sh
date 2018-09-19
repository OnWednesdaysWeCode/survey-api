#!/bin/bash

API="http://localhost:4741"
URL_PATH="/surveys"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
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
