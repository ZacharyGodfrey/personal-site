const handleRequest = (event, context) => {
    return {
        success: true,
        message: `Default response object.`,
        data: {},
    }
};

exports.handler = (event, context, callback) => {
    const request = {
        method: event.httpMethod,
        path: event.path,
        headers: event.headers,
        body: event.body,
        query: event.queryStringParameters,
        context: context,
    };

    const response = handleRequest(request);

    callback(null, {
        statusCode: response.success ? 200 : 500,
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ request, response })
    });
};