const test = (event, context) => {
    return {
        event: Object.keys(event),
        context: Object.keys(context),
        data: {
            works: true
        },
        message: `works!`
    }
};

exports.handler = (event, context, callback) => {
    callback(null, {
        statusCode: 200,
        body: JSON.stringify(test(event, context))
    });
};