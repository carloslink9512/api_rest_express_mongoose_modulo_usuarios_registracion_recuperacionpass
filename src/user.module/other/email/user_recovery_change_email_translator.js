const translator = (lang) => {
    let language;

    switch (true) {
        case (lang === 'es'):
            language = {
                legend: 'Tu nueva experiencia digital',
                hello: 'Hola',
                hello2: '¡bienvenido a LOGO!',
                text1: '¡Tu cambio de contraseña ha finalizado correctamente!',
                text2: 'Si tienes dudas estamos a tu disposición. ¡Muchas gracias!',
                text3: 'Equipo de LOGO',
                info1: 'Recibes este correo electrónico porque has finalizado correctamente tu proceso de cambio de contraseña. Si tienes dudas, completa el formulario de contacto, o bien envíanos un email a info@LOGO.com.',
                subject1: 'Hola',
                subject2: '¡Tu proceso de cambio de contraseña ha finalizado correctamente!',
            }
            break;

        default: 
            language = {
                legend: 'Your new digital experience',
                hello: 'Hello',
                hello2: 'welcome to LOGO!',
                text1: 'Your password change has been successfully completed!',
                text2: 'If you have questions, we are at your disposal. Thank you very much!',
                text3: 'LOGO team',
                info1: 'You are receiving this email because you have successfully completed your password change process. If you have questions, complete the contact form, or send us an email to info@LOGO.com.',
                subject1: 'Hello',
                subject2: 'Your password change process has been successfully completed!',
            }
            break;
    }
    return language;
}

//...we export the translator...
module.exports = {
    translator
}