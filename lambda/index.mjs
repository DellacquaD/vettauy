import nodemailer from 'nodemailer';

export async function handler(event) {
    console.log('Event:', JSON.stringify(event, null, 2)); // Imprime el evento completo para depuración

    try {
        const httpMethod = event.requestContext?.http?.method || event.httpMethod || 'UNKNOWN';
        if (httpMethod !== 'POST') {
            console.log(`Method not allowed ${httpMethod}`); // Log en caso de método no permitido
            return {
                statusCode: 405,
                body: JSON.stringify({
                    message: 'Method not alloweed',
                    method: httpMethod
                }),
            };
        }

        const { nombre, email, telefono, consulta } = JSON.parse(event.body);

        console.log('Payload:', { nombre, email, telefono, consulta }); // Log para verificar el payload

        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER, // Dirección de correo electrónico del remitente
            to: `${process.env.EMAIL_USER}, ${email}`, // Dirección del destinatario y la dirección de la persona que realizó la consulta
            subject: `Consulta de ${nombre} a VettaUy`,
            text: `Hola ${nombre}, gracias por contactarnos.\n\nEstaremos  analizando tu consulta y a la brevedad nos comunicaremos con todos los detalles.\n\nLos datos de contacto con los que contamos son:\nEmail: ${email}\nTeléfono: ${telefono}\nConsulta:\n${consulta}\n\Gracias por esperar nuestra respuesta\nSaludos`,
        };

        await transporter.sendMail(mailOptions);

        console.log('Correo enviado exitosamente'); // Log en caso de éxito

        return {
            statusCode: 200,
            body: JSON.stringify({
                message: 'Correo enviado exitosamente',
                payload: { nombre, email, telefono, consulta }
            }),
        };
    } catch (error) {
        console.error('Error al enviar el correo:', error); // Log en caso de error
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: 'Error al enviar el correo',
                error: error.message, // Agrega el mensaje de error
                event: event // Opcionalmente, agrega el evento para depuración adicional
            }),
        };
    }
}
