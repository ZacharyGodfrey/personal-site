const response = (statusCode, success, data, message) => {
    return {
        statusCode,
        body: {
            success: success === true,
            data: data === undefined ? null : data,
            message: `${message}`
        }
    }
};

module.exports = {
    notFound: () => response(404, false, null, 'The requested resource does not exist.'),
    error: (message, details) => response(500, false, details, message),
    success: (data) => response(200, true, data, ''),
};