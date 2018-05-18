# Serverless Boilerplate
[![serverless](http://public.serverless.com/badges/v3.svg)](http://www.serverless.com)

## Create new project

With Serverless Framework v1.5 and later, a new project based on the project template is initialized with the command:

```
$ sls install -u https://github.com/paprins/serverless-boilerplate -n myservicename
$ cd myservicename
$ npm install
```

## Deploy serverless app with CodeBuild

> You need an IAM policy for the CodeBuild service.
```
$ npm install -g yeoman
$ yo serverless-policy
```

## Authenticated API
 The `serverless.yml` also includes an authenticated function called `secret`.

 Before you can use `[httpie](https://httpie.org)` to call the resource, you should install the `[httpie-aws-authv4](https://github.com/aidan-/httpie-aws-authv4)` plugin.

 Install like this: `sudo -H pip install -U httpie-aws-authv4`

 ```
 $ http -v --auth-type aws4 GET https://<API GATEWAY ID>.execute-api.eu-west-1.amazonaws.com/dev/secret
 ```
