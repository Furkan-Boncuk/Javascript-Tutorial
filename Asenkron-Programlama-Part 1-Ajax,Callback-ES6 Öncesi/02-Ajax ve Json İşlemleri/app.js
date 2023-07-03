const button = document.getElementById("ajax");
button.addEventListener("click",getAllEmployees);

function getAllEmployees() {
    const xhr = new XMLHttpRequest();

    xhr.open("GET","employees.json",true);

    xhr.onload = function() { // isteğimiz geldiğinde

        let list = document.getElementById("employees");

        if(this.status == 200) {

            const employees = JSON.parse(this.responseText);

            employees.forEach(function(employee) {

                list.innerHTML += `
                    <tr>
                        <td>${employee.name}</td>
                        <td>${employee.department}</td>
                        <td>${employee.salary}</td>
                    </tr>
                `;

            });

        }

    }

    xhr.send();

}








