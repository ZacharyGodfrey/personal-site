const resources = require('./resources');

const handleRequest = (request) => {
    const resourceList = Object.keys(resources);
    const resourceExists = resourceList.includes(request.resource);

    if (!resourceExists) {
        return response.notFound();
    } else {
        const resource = resources[request.resource];
        const methodList = Object.keys(resource);
        const methodExists = methodList.includes(request.method);

        if (!methodExists) {
            return response.notFound();
        } else {
            return resource[request.method](request);
        }
    }
};

const requestModel = (event) => {
    const pathSegments = event.path.split('/');

    return {
        resource: pathSegments.length < 5 ? 'index' : pathSegments[4].toLowerCase(),
        method: event.httpMethod.toLowerCase(),
        headers: event.headers,
        body: event.isBase64Encoded ? atob(event.body) : event.body,
        query: event.queryStringParameters,
        isBase64: event.isBase64Encoded
    };
};

exports.handler = (event, context, callback) => {
    const request = requestModel(event);
    const response = handleRequest(request);

    callback(null, {
        statusCode: response.status,
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ request, response: response.body }, null, 2)
    });
};