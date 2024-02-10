import type { AWS } from '@serverless/typescript';

import authorizer from '@functions/authorizer';
import ping from '@functions/ping';


const serverlessConfiguration: AWS = {
  service: 'plutus-api-v2',
  frameworkVersion: '3',
  plugins: ['serverless-esbuild', 'serverless-offline'],
  provider: {
    name: 'aws',
    region: "ap-southeast-1",
    runtime: 'nodejs20.x',
    apiGateway: {
      shouldStartNameWithService: true,
    },
    environment: {},
  },
  // import the function via paths
  functions: {
    authorizer,
    ping,
  },
  package: { individually: true },
  custom: {
    esbuild: {
      bundle: true,
      minify: true,
      sourcemap: true,
      exclude: ['aws-sdk'],
      target: 'node20',
      define: { 'require.resolve': undefined },
      platform: 'node',
      concurrency: 10,
    },
  },
};

module.exports = serverlessConfiguration;
