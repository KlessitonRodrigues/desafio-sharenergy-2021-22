"use strict";
exports.__esModule = true;
exports["default"] = (function (req, res, next) {
    var token = req.headers.authorization;
    if (token === 'efseFgGEesfFEff32fw3fSEFF3') {
        next();
    }
    else {
        res.status(200).send({ success: 0, msg: 'not authenticated!' });
    }
});
