module.exports.handler = (event, context, callback) => {
  console.log('-> Received event: ', JSON.stringify(event, null, 2));

  let json;

  try {
    json = JSON.parse(event.body);
  } catch (e) {
    console.log('Got invalid JSON: ', e);

    callback(null, {
      statusCode: 400,
      body: JSON.stringify({
        message: 'Body contains invalid JSON.',
      }),
    });
  }

  if (Object.keys(json).length === 0 && json.constructor === Object) {
    callback(null, {
      statusCode: 409,
      body: JSON.stringify({
        message: 'Empty request not allowed.',
      }),
    });
  }

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
    }),
  };

  callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};
