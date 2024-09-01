// services/emailService.js
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = async (to, subject, text, html) => {
  const msg = {
    to,
    from: 'tu-email@example.com', // Asegúrate de que este correo esté verificado en SendGrid
    subject,
    text,
    html,
  };

  try {
    await sgMail.send(msg);
    console.log('Email enviado con éxito');
  } catch (error) {
    console.error('Error enviando email:', error);
    throw new Error('No se pudo enviar el email');
  }
};

module.exports = { sendEmail };
