
function ValidateEmail(inputText, phone) {

  var mailformat = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z]{2,4})+$/;

  var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

  var em = false;

  var ph = false;

  if (inputText.value.match(mailformat)) {

      em = true;

  }

  else {

      alert("Not a valid Email");

      return false;

  }

  if (tnumber.value.match(phoneno)) {

      ph = true;

  }

  else {

      alert("Not a valid Phone");

      return false;

  }

  var userinput = document.getElementById("dob").value;

  var dob = new Date(userinput);

  if (userinput == null || userinput == '') {

      document.getElementById("message").innerHTML = "**Choose a date please!";

      return false;

  } else {



      var month_diff = Date.now() - dob.getTime();

      var age_dt = new Date(month_diff);

      var year = age_dt.getUTCFullYear();

      var age = Math.abs(year - 1970);

      if (age < 13) {

          alert("Under Age");

          return false;

      }

      if (age > 50) {

          alert("Put help Link here");

      }

  }

  return true;

}