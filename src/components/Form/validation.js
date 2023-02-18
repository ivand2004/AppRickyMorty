export default function validate(inputs){
    let errors = {}
    const emailREGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(!inputs.username) errors.username = "Por favor, complete este campo";
    else if(!emailREGEX.test(inputs.username)) errors.username = "Por favor, ingrese un email"
    else if (inputs.username.length > 35) errors.username = "El usuario no puede tener mas de 35 caracteres"
    if(!inputs.password) errors.password = "Por favor, complete este campo";
    else if(!/\d/.test(inputs.password)) errors.password = "La contraseña debe contener un numero";
    else if(inputs.password.length<6 || inputs.password.length>10) errors.password = "La contraseña debe tener mas de 6 caracteres y hasta 10 caracteres"
    return errors
}