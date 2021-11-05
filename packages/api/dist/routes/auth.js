"use strict";
exports.__esModule = true;
function singIn(req, res) {
    var login = { user: 'admin', pass: '12345' };
    var body = req.body;
    res.status(200);
    if (login.user !== body.user) {
        return res.send({ success: 0, msg: 'invalid user!' });
    }
    if (login.pass !== body.password) {
        return res.send({ success: 0, msg: 'invalid password!' });
    }
    return res.send({ success: 1, data: { token: 'efseFgGEesfFEff32fw3fSEFF3' } });
}
var auth = {
    singIn: singIn
};
exports["default"] = auth;
