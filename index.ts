// Import the necessary types from the aws-lambda package
import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Handler,
} from 'aws-lambda';

// Define the handler function with async/await syntax
const handler: Handler = async (
  event: APIGatewayProxyEvent,
): Promise<APIGatewayProxyResult> => {
  // Return a response object with a 200 status code and a JSON body
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello, TypeScript!',
    }),
  };
};

// Export the handler function for use in AWS Lambda
export { handler };
