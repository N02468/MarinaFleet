function validate() {
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    error_message.style.padding="10px";
    var text;
    if (name.length<2){
        text = "Please Enter valid Name (minimum 3 character)";
        error_message.innerHTML = text;
        return false;
    }
    if (subject.length<10) {
        text = "Please Enter Correct Subject (Minimum 10 character)";
        error_message.innerHTML = text;
        return false;
    }
    if(isNaN(phone) || phone.length !=10) {
        text = "Please Enter valid Phone Number (10-digit)";
        error_message.innerHTML = text;
        return false;}
        //Message should have more than 140 characters
        if (message.length <=140){
            text="Please enter more than 140 characters";
            error_message.innerHTML = text;
            return false;
        }
         //Message should have less than 500 characters
         if (message.length >=500){
            text="Please enter less than 500 characters";
            error_message.innerHTML = text;
            return false;
         }
         //This alert message will appear if all the fields are filled correctly
         alert("Form submitted successfully! Thank you for contacting us");
         return true;
}