exports.successResponse = function (data) {
    return {
        success: true,
        data,
    }
};

exports.errorResponse = function (error, errCode) {
    return {
        success: false,
        error,
        errCode: errCode || 404
    }
};

exports.internalErrorResponse = function () {
    return {
        success: false,
        error: 'Internal Server Error',
        errCode: 500
    }
};
