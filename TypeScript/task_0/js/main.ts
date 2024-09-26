interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

let student1: Student = {
    firstName: "Elma",
    lastName: 'Quinon',
    age: 24,
    location: "Puerto Rico"
};

let student2: Student = {
    firstName: 'Sonic',
    lastName: 'The Hedgehog',
    age: 33,
    location: 'Metropolis'
};

let studentList: Student[] = [student1, student2]

const table = document.createElement('table');


const headerRow = document.createElement('tr');
const headers = ['First Name', 'Location'];
headers.forEach(headerText => {
    const header = document.createElement('th');
    header.textContent = headerText;
    headerRow.appendChild(header);
});
table.appendChild(headerRow);

studentList.forEach(student => {
    const row = document.createElement('tr');

    const fisrtNameCell = document.createElement('td');
    fisrtNameCell.textContent = student.firstName;
    row.appendChild(fisrtNameCell);

    const locationCell = document.createElement('td');
    locationCell.textContent = student.location;
    row.appendChild(locationCell);

    table.appendChild(row);
});


document.getElementById('table-container').appendChild(table);