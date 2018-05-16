# Serverless Boilerplate

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
