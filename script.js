function handleSubmit(){
    let firstname=document.getElementById('fname').value;
    let lastname=document.getElementById('lname').value;
    let email=document.getElementById('email').value;
    let address=document.getElementById('address').value;


    if(firstname!=='' & lastname!=='' & email!=='' & address!==''){
        if(validateEmail(email)){
            alert("Successfully submitted");
            document.getElementById('fname').value='';
            document.getElementById('lname').value='';
            document.getElementById('email').value='';
            document.getElementById('address').value='';
            document.getElementById('invalidmail').innerHTML="&nbsp";
        }else{
            document.getElementById('invalidmail').innerHTML="Invalid email address";
            document.getElementById('email').style.color='#FF0000';
        }
    }else{
        alert("Please fill all text fields")

    }
}
const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}
