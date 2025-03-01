function newContact(){
   let message = "Added new Contact";
   document.getElementById("message").textContent = message;

   //name
   let inputName = document.getElementById("inputName")
   let name = inputName.value 
   console.log(name)

   //list
   let listContacts = document.getElementById("listContacts")
   let newName = document.createElement("li")
   newName.textContent = name
   listContacts.appendChild(newName)

   inputName.value = ""
}


