function formValidation() {
    if (document.myForm.fname.value == "") {
        document.getElementById("first-name").style.border = "2px solid red";
        return false;
    } else {
        document.getElementById("first-name").style.border = "";
    };

    if (document.myForm.lname.value == "") {
        document.getElementById("last-name").style.border = "2px solid red";
        return false;
    } else {
        document.getElementById("last-name").style.border = "";
    };

    var checkMale = document.getElementById("gender-m").checked;
    var checkFemale = document.getElementById("gender-f").checked;

    if (checkMale == false && checkFemale == false) {
        alert("Please select gender");
        return false;
    };

    if (document.myForm.texta.value == "") {
        document.getElementById("area").style.border = "2px solid red";
        return false;
    } else {
        document.getElementById("area").style.border = "";
    };
    return true;
    
}



