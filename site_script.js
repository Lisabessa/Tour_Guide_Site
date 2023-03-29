var form = document.querySelector("form");

const validateNameRegex = /^[A-Za-z][A-Za-z\'\-]+([\ A-Za-z][A-Za-z\'\-]+)*/;
const validateEmailRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/ 
const validatePhoneRegex = /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;

form.addEventListener("submit", function(event){
    let data = new FormData(form);
    let name = "";
    let email = "";
    let phone = "";
    
    for (const entry of data) {
        if (entry[0] == 'userName'){
            name = entry[1];
        }
        else if (entry[0] == 'userEmail'){
            email = entry[1];
        }
        else if (entry[0] == 'userPhone'){
            phone = entry[1];
        }
    };
    
    CheckInfo(name, email, phone);
    event.preventDefault();
}, false);

function CheckInfo(name, email, phone){

    if(!validateNameRegex.test(name)){
       alert('Incorrect name');
    }
    else if (!validateEmailRegex.test(email)){
        alert('Incorrect email adress');
    }
    else if(!validatePhoneRegex.test(phone)){
        alert('Incorrect phone number');
    }
    else{
        alert ("Form was sent");
        return true;
    }
    return false;
}

function Go_To_Tours(){
    window.location.href = 'Tours.html';
}