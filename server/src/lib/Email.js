const nodemailer = require('nodemailer');
const HttpStatus = require('http-status');
const APIError = require('../lib/APIError');
const EmailTemplate = require('email-templates').EmailTemplate;

const transporter = nodemailer.createTransport(process.env.MAIL_CONFIG);

exports.sendEmailForm = (viewTemplate, toMail, subjectMail, params) => {
  const sendPwdReminder = transporter.templateSender(new EmailTemplate(viewTemplate), {
    from: process.env.MAIL_DISPLAY,
  });
  sendPwdReminder({
    to: toMail,
    subject: subjectMail
  }, params, (err, info) => {
    if (err) {
      console.log(err);
    }
  });
};
