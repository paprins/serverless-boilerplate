# Serverless Boilerplate
[![serverless](http://public.serverless.com/badges/v3.svg)](http://www.serverless.com)

## Create new project

With Serverless Framework v1.5 and later, a new project based on the project template is initialized with the command:

```
$ sls install -u https://github.com/paprins/serverless-boilerplate -n myservicename
$ cd myservicename
$ npm install
```

## Deployment

Using the `serverless-plugin-canary-deployments` plugin, `CodeDeploy` will be used to do canary deployments when your Lambda code has been updated.

~ the end
