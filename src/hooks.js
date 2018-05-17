const aws = require('aws-sdk');

const codedeploy = new aws.CodeDeploy({
  apiVersion: '2014-10-06',
});

module.exports.pre = (event, context, callback) => {
  const deploymentId = event.DeploymentId;
  const lifecycleEventHookExecutionId = event.LifecycleEventHookExecutionId;

  console.log('Check some stuff before shifting traffic...');

  const params = {
    deploymentId,
    lifecycleEventHookExecutionId,
    status: 'Succeeded', // status can be 'Succeeded' or 'Failed'
  };
  /* eslint-disable no-unused-vars */
  return codedeploy.putLifecycleEventHookExecutionStatus(params).promise()
    .then(data => callback(null, 'Validation test succeeded'))
    .catch(err => callback('Validation test failed'));
  /* eslint-enable no-unused-vars */
};

module.exports.post = (event, context, callback) => {
  const deploymentId = event.DeploymentId;
  const lifecycleEventHookExecutionId = event.LifecycleEventHookExecutionId;

  console.log('Check some stuff after shifting traffic...');

  const params = {
    deploymentId,
    lifecycleEventHookExecutionId,
    status: 'Succeeded', // status can be 'Succeeded' or 'Failed'
  };

  /* eslint-disable no-unused-vars */
  return codedeploy.putLifecycleEventHookExecutionStatus(params).promise()
    .then(data => callback(null, 'Validation test succeeded'))
    .catch(err => callback('Validation test failed'));
  /* eslint-enable no-unused-vars */
};
