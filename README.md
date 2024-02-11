# serverless local authorizer example

This project demos how to use Serverless Framework with Lambda Authorizer locally for REST APIs (API Gateway V1).

Check out the article that walks you through this repository.

[AWS Serverless - Using Serverless Framework with Custom Authoriser Locally](https://www.willischou.com/aws-serverless-using-serverless-framework-with-custom-authoriser-locally/)

## Requirement

1. Nodejs 20

Run the following command to install packages.

```bash
$ npm i
```

## Start Dev Server

Wicked, you can start serverless dev server locally and test the result.

```bash
$ npm run start
$ curl -H "Authorization: abc" http://localhost:3000/dev/ping
```

Now, you should get a response `pong` after you sent a GET request to `/ping`. Please note, you must provide `Authorization` header in the request in order to pass Lambda Authorizer.

If you send a request without `Authorization` header, you will get a response `{"message":"Unauthorized"}`.

🍺 Cheers, that's all. You can enjoy the seamless Lambda development with TypeScript locally. 
