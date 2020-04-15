const email = require('emailjs');
const config = require('config');

module.exports = {
    send: function (to, subject, plainTextBody, htmlBody) {
        var server = email.server.connect({
            user: config.get('smtp.user'),
            password: config.get('smtp.password'),
            host: config.get('smtp.host'),
            port: config.get('smtp.port'),
            tls: true
        });

        var message = {
            from: config.get('site.administrator.email'),
            to: to,
            subject: subject,
            text: plainTextBody,
            attachment:
                [
                    { data: htmlBody, alternative: true }
                ]
        };

        server.send(message, (err, res) => {
            console.log(err || message);
        });
    }
};
