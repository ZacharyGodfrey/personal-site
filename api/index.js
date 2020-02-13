exports.handler = (event, context, callback) => {
    return {
        statusCode: 200,
        body: JSON.stringify({
            event,
            context,
            data: {
                works: true
            }
        }, null, 2)
    }
};