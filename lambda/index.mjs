import nodemailer from 'nodemailer';

export async function handler(event) {
    try {
        if (event.httpMethod !== 'POST') {
            return {
                statusCode: 405,
                body: JSON.stringify({ message: 'Method not allowed' }),
            };
        }

        const { nombre, email, telefono, consulta } = JSON.parse(event.body);

        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: email,
            to: process.env.RECEIVER_EMAIL,
            subject: `Consulta de ${nombre}`,
            text: `Nombre: ${nombre}\nEmail: ${email}\nTeléfono: ${telefono}\nConsulta:\n${consulta}`,
        };

        await transporter.sendMail(mailOptions);

        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Correo enviado exitosamente' }),
        };
    } catch (error) {
        console.error('Error al enviar el correo:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Error al enviar el correo' }),
        };
    }
}
