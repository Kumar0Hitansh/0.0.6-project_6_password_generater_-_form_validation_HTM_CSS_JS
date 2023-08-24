
// password generator start===================================
// password generating function

function genPassword(){

    let chars="0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let passwordLength=30;

    let password="";

    for (let i = 0; i<=passwordLength; i++){

        let rendomNumber = Math.floor(Math.random()*chars.length);

        password += chars.substring(rendomNumber , rendomNumber +1);
    }

    // now appling it
    document.querySelector(".password").value=password;

    document.querySelector(".password").style.border="none"
    
}

// copy function

function copypassword(){
    let copybtn= document.querySelector(".password").select();
    document.execCommand("copy");  
    
    let checkpass=document.querySelector(".password").value;
    
    if(checkpass==undefined){
        document.querySelector(".password").style.border="2px solid red"

    }else{
        document.querySelector(".password").style.border="2px solid green"

    }
  
}
// password generator over====================================

// form validator start=======================================

function validate(){

    username=document.querySelector(".username1");

    pass1=document.querySelector(".pass1");


    console.log ( username +","+ pass1  )

    if (username.value=="" ){
        username.style.border="2px solid red"
    }
    else{
        username.style.border="2px solid green"
    }


    if(pass1.value==""){
            pass1.style.border="2px solid red"      
    }
    else{
            pass1.style.border="2px solid green"
    }
}

// form validator over========================================
