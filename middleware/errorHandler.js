const {constant} = require('../constant');

const errorHandler = (error, req, res, next) => {
    const statusCode = req.statusCode ? res.statusCode : 500;

    switch(statusCode) {
        case constant.VALIDATION_ERROR:
            res.json({ 
                title: "Validation Failed", 
                message: error.message, 
                stackTrace: error.stack 
            });
            break;
        case constant.NOT_FOUND:
            res.json({ 
                title: "Not Found", 
                message: error.message, 
                stackTrace: error.stack 
            });
            break;
        case constant.UNAUTHORIZED:
            res.json({ 
                title: "Unauthorized", 
                message: error.message, 
                stackTrace: error.stack 
            });
            break;
        case constant.FROBIDEN:
            res.json({ 
                title: "Unauthorized", 
                message: error.message, 
                stackTrace: error.stack 
            });
            break;
        case constant.SERVER_ERROR:
            res.json({ 
                title: "Server Error", 
                message: error.message, 
                stackTrace: error.stack 
            });
            break;
        default:
            console.log('No Error');
    }
};

module.exports = errorHandler;