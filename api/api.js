const resources = require('./resources');
const response = require('./core/response');

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
            return response.error(‘Resource ${request.resource} does not support method ${request.method}’
        } else {
            return resource[request.method](request);
        }
    }
};

const requestModel = (event) => {
    const pathSegments = event.path.split('/');
    const base64Decode = (data) => new Buffer(data, 'base64').toString('ascii');

    return {
        resource: pathSegments.length < 5 ? 'index' : pathSegments[4].toLowerCase(),
        method: event.httpMethod.toLowerCase(),
        headers: event.headers,
        body: event.isBase64Encoded ? base64Decode(event.body) : event.body,
        query: event.queryStringParameters
    };
};

exports.handler = (event, context, callback) => {
    const request = requestModel(event);
    const response = handleRequest(request);

    callback(null, {
        statusCode: response.status,
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(response.body, null, 2)
    });
};