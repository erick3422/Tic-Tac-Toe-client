# EMAIL=erickloco883@yahoo.com PASSWORD=holis sh curl-scripts/sign-in.sh


# don't use a password you use for any real websites!
curl "https://tic-tac-toe-api-development.herokuapp.com/sign-in" \
  --include \
  --request POST \
  --header "Content-Type: application/json"\
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "credentials":{
      "email":"'"${EMAIL}"'",
      "password":"'"${PASSWORD}"'"
    }
  }'
 --data '{
  "user": {
    "_id": "'"${ID}"'",
    "email": "'"${EMAIL}"'",
    "createdAt": "'"${DATE}"'",
    "updatedAt": "'"${DATE}"'",
    "__v":0,
    "token": "'"${TOKEN}"'"
  }
}'


echo
