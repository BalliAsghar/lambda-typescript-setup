import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

const handler = async (
  event: APIGatewayProxyEvent,
): Promise<APIGatewayProxyResult> => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello, TypeScript!',
    }),
  };
};

export { handler };
