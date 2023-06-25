const name = "Furkan Boncuk";
const department = "IT";
const salary = 10000;

const employeeDetail = `Name: ${name}\nDepartment: ${department}\nSalary: ${salary}.00 TL`;

// const html = "<ul> "+
//              "<li>"+ name + "</li>" +
//              "<li>"+ department + "</li>" +
//              "<li>"+ salary + "</li>" + 
//              "</ul>";


function a() {
    return "---Employee Detail---";
}

const html = `
    <ul>
    <li>${a()}</li>
    <li>${name}</li>
    <li>${department}</li>
    <li>${salary}</li>
    </ul>
`;

document.body.innerHTML = html;



console.log(employeeDetail);
