let contacts = [];

function newContact() {
    const inputName = document.getElementById("inputName");
    const inputNumber = document.getElementById("inputNumber");
    const message = document.getElementById("message");

    let name = inputName.value.trim();
    let number = inputNumber.value.trim();

    if (name === "" || number === "") {
        message.textContent = "Please fill in all fields!";
        message.style.color = "red";
        return;
    }

    // Add contact to array
    contacts.push({ name, number });
    message.textContent = "Contact added successfully!";
    message.style.color = "green";

    // Clear the fields
    inputName.value = "";
    inputNumber.value = "";

    renderContacts();
}

function renderContacts() {
    const listContacts = document.getElementById("listContacts");
    listContacts.innerHTML = ""; // Clear table before update

    contacts.forEach((contact, index) => {
        let row = document.createElement("tr");

        row.innerHTML = `
            <td>${contact.name}</td>
            <td>${contact.number}</td>
            <td>
                <button class="btn btn-warning btn-sm" onclick="editContact(${index})">Edit</button>
                <button class="btn btn-danger btn-sm" onclick="removeContact(${index})">Remove</button>
            </td>
        `;

        listContacts.appendChild(row);
    });
}

function editContact(index) {
    let newName = prompt("Edit name:", contacts[index].name);
    let newNumber = prompt("Edit number:", contacts[index].number);

    if (newName.trim() !== "" && newNumber.trim() !== "") {
        contacts[index] = { name: newName, number: newNumber };
        renderContacts();
    }
}

function removeContact(index) {
    contacts.splice(index, 1);
    renderContacts();
}
