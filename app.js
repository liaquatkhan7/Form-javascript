var sub = document.getElementById("submit");
sub.onclick = function (){
    var firstName = document.getElementById("fName").value;
    var secondName = document.getElementById("lName").value;
    var mail = document.getElementById("eMail").value;
    var number = document.getElementById("telephone").value;
    var savingGender;
    var allRadios = document.getElementsByName("gender");
    var checkingRadios = false;
    for(var i=0; i < allRadios.length; i++){
        if(allRadios[i].checked){
            savingGender = allRadios[i].value;
            checkingRadios = true;
        }
    }
    var country = document.getElementById("country").value;
    if(firstName == ""){
        document.getElementById("fName").value = "Enter First Name";
        return false
    }
    
    else if(secondName == ""){
        document.getElementById("lName").value = "Enter Last Name";
        return false
    }

    else if (checkingRadios == false){
        alert("please fill male or female");
        return false;
    }

    else if(country == ""){
        alert("Select country")
        return false;
    }

    else if(mail == ""){
        document.getElementById("eMail").value = "Enter Email";
        return false
    }

    else if (number == ""){
        document.getElementById("telephone").value = "only number allow";    
        return false
    }
    else if(isNaN(number)){
        document.getElementById("telephone").value = "only number allow";
        return false
    }
}