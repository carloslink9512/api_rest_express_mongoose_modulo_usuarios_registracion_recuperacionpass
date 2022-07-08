const translator = (lang) => {
    let language;

    switch (true) {
        case (lang === 'es'):
            language = {
                hello: 'Hola',
                legend: 'Tu nueva experiencia digital',
                hello2: '¡bienvenido a LOGO!',
                text1: 'Has iniciado el proceso de cambio de contraseña.',
                text2: 'Para continuar copia el código y pégalo en el casillero correspondiente.',
                text3: 'Código',
                text4: 'Si tu no has iniciado este proceso, ignora este mensaje.',
                text5: 'Si tienes dudas envíanos un email y nos contactaremos a la brevedad. ¡Muchas gracias!',
                text6: 'Equipo de LOGO',
                subject1: 'Hola',
                subject2: 'has iniciado el proceso de recuperación de contraseña',
            }
            break;

        default: 
            language = {
                hello: 'Hello',
                legend: 'Your new digital experience',
                hello2: 'welcome to LOGO!',
                text1: 'You have started the password change process.',
                text2: 'To continue copy the code and paste it in the corresponding box.',
                text3: 'Code',
                text4: 'If you have not started this process, ignore this message.',
                text5: 'If you have questions, send us an email and we will contact you as soon as possible. Thank you very much!',
                text6: 'LOGO team',
                subject1: 'Hello',
                subject2: 'you have started the password recovery process',
            }
            break;
    }
    return language;
}

//...we export the translator...
module.exports = {
    translator
}