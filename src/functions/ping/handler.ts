import { APIGatewayProxyHandler } from 'aws-lambda';

export const lambdaHandler: APIGatewayProxyHandler = async (_event, _context) => {
  return {
    statusCode: 200,
    body: "pong",
  }
};

