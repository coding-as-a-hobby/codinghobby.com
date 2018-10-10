const AWS = require("aws-sdk");
AWS.config.update({
  region: "us-east-1"
});
const dynamodb = new AWS.DynamoDB({
  apiVersion: "2012-08-10"
});
const s3 = new AWS.S3();

module.exports.list_technology = (event, context, callback) => {
  const params = {
    Bucket: 'codinghobby.com',
    Delimiter: '/',
    Prefix: 'technology/'
  }
  s3.listObjects(params, (err, data) => {
    if (err) {
      const response = {
        statusCode: 400,
        headers: {
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({
          message: err,
          input: event,
        }),
      };
      callback(null, response);
    }
    const response = {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        message: data
      }),
    };
    callback(null, response);
  });
};
