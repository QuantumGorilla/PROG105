let generateHandler = document.querySelector(".btn");
let appNameElem = document.querySelector(".app-field");
let tableElem = document.querySelector(".table");

//Function checks if an app already has an password
const createdPassword = (appName) => {
    if (apps.length != 0){
        for(let i = 0; i < apps.length; i++){
            if(apps[i].name === appName){
                return true;
            }
        }
        return false;
    }
}

/**Function generates password with at least 1 uppercase letter, 1 lowercase letter, 1 number and 
 * 16 chacaracters length
*/
const passwordGenerator = (appName) => {
    if(createdPassword(appName)){
        alert("¡Ya existe una contraseña para esta app!");
        return false;
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
        apps.push({'name':appName, 'password':password});
        return true;
    }
}

const addRows = () => { 
    let newRow = tableElem.insertRow(tableElem.length);
    let cell = newRow.insertCell(0);
    cell.innerHTML = apps[apps.length-1].name;
    cell = newRow.insertCell(1);
    cell.innerHTML =apps[apps.length-1].password;
}


const apps = [];

generateHandler.addEventListener("click", function(){
    if(passwordGenerator(appNameElem.value)) addRows();
});