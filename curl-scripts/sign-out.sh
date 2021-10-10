# EMAIL=erickloco883@yahoo.com PASSWORD=holis sh curl-scripts/sign-out.sh


# don't use a password you use for any real websites!
curl "https://tic-tac-toe-api-development.herokuapp.com/sign-out" \
  --include \
  --request POST \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "credentials":{
      "email":"'"${EMAIL}"'",
      "password":"'"${PASSWORD}"'"
    }
  }'
 

echo
