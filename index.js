function formValidation() {
    if (document.myForm.fname.value == "") {
      document.getElementById("first-name").style.border = "2px solid red";
      return false;
    } else {
      document.getElementById("first-name").style.border = "";
    }
  
    if (document.myForm.lname.value == "") {
      document.getElementById("last-name").style.border = "2px solid red";
      return false;
    } else {
      document.getElementById("last-name").style.border = "";
    }
  
    var checkMale = document.getElementById("gender-m").checked;
    var checkFemale = document.getElementById("gender-f").checked;
  
    if (checkMale == false && checkFemale == false) {
      alert("Please select gender");
      return false;
    }
  
    if (document.myForm.texta.value == "") {
      document.getElementById("area").style.border = "2px solid red";
      return false;
    } else {
      document.getElementById("area").style.border = "";
    }
    var success = true;
    if (success) {
      var data =
        "First name: " +
        document.getElementById("first-name").value +
        " " +
        "Last name: " +
        document.getElementById("last-name").value +
        " " +
        "Users message: " +
        document.getElementById("area").value;
      console.log(data);
      var html = "";
      html +=
        "Thank you for contacting us, " +
        document.getElementById("first-name").value;
      document.getElementById("msg").innerHTML = html;
    }
  }
  