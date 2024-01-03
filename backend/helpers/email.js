import nodemailer from "nodemailer"

export const emailRegistro = async (datos) => {

    const { email, nombre, token } = datos
    //TODO: Mover hacia variables de entorno

    var transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "2f57f715e0b354",
        pass: "55b628c6e84bce"
      }
    });
          // Informacion del email
          const info = await transport.sendMail({
            from: '"UpTask -Administrador de Proyectos" <cuentas@uptask.com>',
            to: email,
            subject: "Uptask - Compruba tu cuenta",
            text: "Comprueba tu cuenta en UpTask",
            html: `<p>Hola:${nombre} Comprueba tu cuenta en UpTask</p>
            <p>Tu cuenta ya esta casi lista, solo debes comprobarla en el siguiente enlace:</p>
            <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Comprobar Cuenta</a>

            <p>Si tu no creaste esta cuenta, puedes ignorar el mensaje</p>

            `,
          })
}

export const emailOlvidePassword = async (datos) => {

  const { email, nombre, token } = datos
  
  //TODO: Mover hacia variables de entorno
  var transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "2f57f715e0b354",
      pass: "55b628c6e84bce"
    }
  });
        // Informacion del email
        const info = await transport.sendMail({
          from: '"UpTask -Administrador de Proyectos" <cuentas@uptask.com>',
          to: email,
          subject: "Uptask - Reestablece tu Password",
          text: "Comprueba tu cuenta en UpTask",
          html: `<p>Hola:" "${nombre} has solicitado reestablecer tu password</p>
          <>Dar click en el siguiente enlace para generar un nuevo password:</p>
          <a href="${process.env.FRONTEND_URL}/olvide-password/${token}">Reestablecer Password</a>

          <p>Si tu no creaste esta cuenta, puedes ignorar el mensaje</p>

          `,
        })
}