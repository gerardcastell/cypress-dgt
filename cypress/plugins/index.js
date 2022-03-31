/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)
// Import required AWS SDK clients and commands for Node.js.
// import { PutObjectCommand, CreateBucketCommand, S3Client } from "@aws-sdk/client-s3";
var awsSdk = require('@aws-sdk/client-s3');
/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  on('task', {
    async uploloadFileToS3() {
      // Set the AWS Region.
      const REGION = 'eu-west-1'; //e.g. "us-east-1"
      // Create an Amazon S3 service client object.
      const s3Client = new awsSdk.S3Client({ region: REGION });

      console.log('UPDALOAD');

      // Set the parameters
      const params = {
        Bucket: 'cleverea-redshift-dwh-filesystem', // The name of the bucket. For example, 'sample_bucket_101'.
        Key: 'external_sources/dgt/plate_registry/otro.txt', // The name of the object. For example, 'sample_upload.txt'.
        // Body: 'Hello world!', // The content of the object. For example, 'Hello world!".
      };

      // Create an Amazon S3 bucket.
      try {
        const data = await s3Client.send(
          new awsSdk.CreateBucketCommand({ Bucket: params.Bucket })
        );
        console.log(data);
        console.log('Successfully created a bucket called ', data.Location);
        return data; // For unit tests.
      } catch (err) {
        console.log('Error', err);
      }
      // Create an object and upload it to the Amazon S3 bucket.
      try {
        const results = await s3Client.send(
          new awsSdk.PutObjectCommand(params)
        );
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
    },
  });
};
