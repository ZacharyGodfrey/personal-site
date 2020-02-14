const response = require('../core/response');

const get = (request) => {
    return response.success([
        {
            id: 123,
            text: 'testing'
        }
    ]);
};

const post = (request) => {
    return response.error(`Error test`);
};

module.exports = {
    get,
    post
};