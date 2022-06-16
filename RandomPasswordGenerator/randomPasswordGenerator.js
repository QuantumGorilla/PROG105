//16 caracteres, 1 numero 1 mayuscula y minuscula
const createdPassword = (appName) => {
    if (apps.length != 0){
        for(let i = 0; i < apps.length; i++){
            if(apps[i][appName]){
                return true;
            }
        }
        return false;
    }
}

const passwordGenerator = (appName) => {
    if(createdPassword(appName)){
        alert("¡Ya existe una contraseña para esta app!");
    } else {
        let password = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
        const number = '0123456789';
        password += upperCase.charAt(Math.floor(Math.random() * upperCase.length)) 
        + lowerCase.charAt(Math.floor(Math.random() * lowerCase.length)) 
        + number.charAt(Math.floor(Math.random() * number.length))
        for (let i = 0; i < 13; i++) {
            password += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        apps.push({[appName]: password});
        return apps;
    }
}

const apps = [];
while(true){
    passwordGenerator(prompt("Nombre de la app que desea generar la contraseña:"));
    if(!confirm("¿Desea ingresar otra contraseña para otra app?")){
        break;
    }
}

console.log(apps);