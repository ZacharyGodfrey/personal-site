exports.handler = (event, context, callback) => {
    callback({
        statusCode: 200,
        body: JSON.stringify({
            event,
            context,
            data: {
                works: true
            }
        }, null, 2)
    });
};