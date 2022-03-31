// import { S3Client } from '@aws-sdk/client-s3';
var S3 = require('@aws-sdk/client-s3');
var S3CredentialProvider = require('@aws-sdk/credential-provider-ini');

// import { fromIni } from '@aws-sdk/credential-provider-ini';
// Set the AWS Region.
const REGION = 'eu-west-1'; //e.g. "us-east-1"
// Create an Amazon S3 service client object.
const s3Client = new S3.S3Client({
  credentials: S3CredentialProvider.fromIni({
    profile: 'data',
    region: REGION,
  }),
});
module.exports = s3Client;
