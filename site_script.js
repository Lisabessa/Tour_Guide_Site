function CheckInfo(){
    let name=document.getElementById("userName").value;
    let email = document.getElementById("userEmail").value;
    let phone = document.getElementById("userPhone").value;
    
    const validateNameRegex = /^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/;
    const validateEmailRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/ 
    const validatePhoneRegex = /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;

    alert("Hello world");

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
