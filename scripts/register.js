

function Person(name,surname,email,password) {
    this.firstName = name;
    this.lastName = surname;
    this.password  = password;
    this.email = email;

}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("btn_reg").addEventListener("click" , function () {
        let name,surname,email,password,person;
        name = document.getElementById("inp_name").value
        surname = document.getElementById("inp_surname").value
        email = document.getElementById("inp_email").value
        password = document.getElementById("inp_password").value
    if ((name != "") && (surname != "") && (email != "") && (password != "") ) {
        person = new Person(name,surname, email,password);
        console.log(person);
       alert("You successfully registered")
  
    }else alert("Please fullfil all inputs!")
    let user = JSON.stringify(person);
    if (localStorage.people) {
        let database = JSON.parse(localStorage.people);
    
if (Array.isArray()) {
    database.push(person);
    localStorage.people = JSON.stringify(database);

}else{

let database_array = [];
database_array.push(database , person);
localStorage.people = JSON.stringify(database_array);




}

    }else{
        localStorage.people = user;

    }



    });
        
    
});

