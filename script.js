
function addStudent() {
    let name = document.getElementById("name").value.trim();
    let roll = document.getElementById("roll").value.trim();
    let course = document.getElementById("course").value.trim();

    if (name === "" || roll === "" || course === "") {
        alert("Please fill all the fields!");
        return;
    }

    let table = document.getElementById("studentList");
    let row = table.insertRow();

    row.insertCell(0).innerText = name;
    row.insertCell(1).innerText = roll;
    row.insertCell(2).innerText = course;

    let cell = row.insertCell(3);
    let button = document.createElement("button");

    button.innerText = "Delete";
    button.className = "delete";

    button.onclick = function () {
        row.remove();
    };

    cell.appendChild(button);

    document.getElementById("name").value = "";
    document.getElementById("roll").value = "";
    document.getElementById("course").value = "";
}
