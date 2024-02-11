import { handlerPath } from '@libs/handler-resolver';

export default {
  handler: `${handlerPath(__dirname)}/handler.lambdaHandler`,
  events: [
    {
      http: {
        method: 'get',
        path: 'ping',
        cors: true,
        authorizer: 'authorizer',
      },
    },
  ],
};
