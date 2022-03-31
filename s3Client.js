import { S3Client } from '@aws-sdk/client-s3';
import { fromIni } from '@aws-sdk/credential-provider-ini';
// Set the AWS Region.
const REGION = 'eu-west-1'; //e.g. "us-east-1"
// Create an Amazon S3 service client object.
const s3Client = new S3Client({
  credentials: fromIni({ profile: 'data', region: REGION }),
});
export { s3Client };
