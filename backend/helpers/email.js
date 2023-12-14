import nodemailer from "nodemailer"

export const emailRegistro = async (datos) => {

    const { email, nombre, token } = datos
    
    const transport = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
              user: "4dce1f207e6cd0",
              pass: "ce3964efe7cdf0"
            }
          });

          // Informacion del email
          const info = await transport.sendMail({
            from: '"UpTask - Comprueba tu Cuenta" <cuentas@uptask.com>',
            to: email,
            text: "Comprueba tu cuenta en UpTask",
            html: `<p>Hola:${nombre} Compruba tu cuenta en UpTask</p>
            <p>Tu cuneta ya esta casi lista, solo debes comprobarla en el siguiente enlace:
            <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Comprobar Cuenta</a>
            </p>
            <p>Si tu no creaste esta cuenta, puedes ignorar el mensaje</p>

            `,
          })
}