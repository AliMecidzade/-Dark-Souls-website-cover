document.addEventListener("DOMContentLoaded" , function () {


    document.getElementById("inp_button").addEventListener("click" , function () {
    
        let email,password,database,userExists;
        email = document.getElementById("inp_email").value
     password = document.getElementById("inp_password").value
       database = JSON.parse(localStorage.people)
        userExists = false;
    
    
       
   if(email == "" || password == "") {
    alert("Inputs are empty")
  }
  else{
      if (Array.isArray(database)) {
        for (let person of database) {
            if (person.email == email && person.password == password) {
                userExists = true
                localStorage.user = JSON.stringify(person);
                break;
  
            }
          }
      } else {
        if (database.email == email && database.password == password) {
            userExists = true
            localStorage.user = JSON.stringify(database); 
      }}

     
        if (userExists) {
            alert("You successfully logged in")
            document.location.href = "newpage.html"
        }else{
            alert("email or password are wrong");
        }
    }
    });
});