# Node JWT Authentication Demo

## Overview
Small app that illustrates how JSON Web Tokens can be used to guard routes in an API. Made following [Brad Traversy's tutorial](https://www.youtube.com/watch?v=7nafaH9SddU) on *youtube*

## Frameworks / Packages Used
- [express](https://expressjs.com/)
- [nodemon](https://www.npmjs.com/package/nodemon)
- [JSON Web Token](https://www.npmjs.com/package/jsonwebtoken)

## Other Tools / Misc.
- Postman
- [gitignore template](https://github.com/github/gitignore/blob/master/Node.gitignore)

## To run:
`npm run dev`

## Postman Requests
1. Fire the login request to get the JSON Web Token
2. Setup the *Access Posts Route (Valid)* request with an *Authorization* header that contains the token

**Format:**

Authorization: Bearer `<access_token>`