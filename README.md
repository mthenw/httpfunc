# httpfunc

AWS Lambda function that does HTTP requests. `httpfunc` makes HTTP request based on environment variables passed to
the function, e.g. setting `HTTP_URL=https://example.com` will cause making GET request to https://example.com. List of
all supported environment variables can be found below. Functions returns response object or error.

## Install

```
npm i httpfunc --save
```

## Usage

You can use `httpfunc` with every deployment tool (e.g. Serverless Framework, Apex, etc.). Just create a simple handler
file:

```
exports.handler = require('httpfunc');
```

and use this handler file in e.g. `serverless.yaml`

```
functions:
  http:
    handler: index.handler
    environment:
      HTTP_URL: https://example.com
```

## Supported environment variables

* `HTTP_URL` - request URL
* `HTTP_METHOD` - HTTP method (default: `GET`)
* `HTTP_BODY` - HTTP request body
* `HTTP_HEADERS_<header name>` - header name in camel case form e.g. `ContentType`
