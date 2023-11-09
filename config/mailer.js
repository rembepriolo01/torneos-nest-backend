"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transporter = void 0;
const nodemailer = require("nodemailer");
exports.transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: 'rembepriolo@gmail.com',
        pass: 'uoer tsev ipej nmej'
    }
});
//# sourceMappingURL=mailer.js.map