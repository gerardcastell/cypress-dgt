var aws = require('@aws-sdk/client-s3');
var s3Client = require('./s3Client.js');
var fs = require('fs');

const files = fs.readdirSync('cypress/downloads/');
const fileContent = fs.readFileSync(`cypress/downloads/${files[0]}`);

// Set the parameters
const params = {
  Bucket: 'cleverea-redshift-dwh-filesystem', // The name of the bucket. For example, 'sample_bucket_101'.
  Key: `external_sources/dgt/plate_registry/${files[0]}`, // The name of the object. For example, 'sample_upload.txt'.
  Body: fileContent, // The content of the object. For example, 'Hello world!".
};

const run = async () => {
  // Create an Amazon S3 bucket.
  try {
    const data = await s3Client.send(
      new aws.CreateBucketCommand({ Bucket: params.Bucket })
    );
    console.log(data);
    console.log('Successfully created a bucket called ', data.Location);
    return data; // For unit tests.
  } catch (err) {
    console.log('Error', err);
  }
  // Create an object and upload it to the Amazon S3 bucket.
  try {
    const results = await s3Client.send(new aws.PutObjectCommand(params));
    console.log(
      'Successfully created ' +
        params.Key +
        ' and uploaded it to ' +
        params.Bucket +
        '/' +
        params.Key
    );
    return results; // For unit tests.
  } catch (err) {
    console.log('Error', err);
  }
};
run();
