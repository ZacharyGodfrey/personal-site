exports.handler = (event, context, callback) => {
    return {
        statusCode: 200,
        body: {
            event,
            context,
            data: {
                works: true
            }
        }
    }
};