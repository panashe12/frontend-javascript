// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two student objects
const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 22,
  location: 'New York',
};

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Smith',
  age: 20,
  location: 'London',
};

// Create an array of students
const studentsList: Student[] = [student1, student2];

// Create a table element
const table: HTMLTableElement = document.createElement('table');
const tableBody: HTMLTableSectionElement = document.createElement('tbody');

// For each student, create a new row and cells for firstName and location
studentsList.forEach((student) => {
  const row: HTMLTableRowElement = document.createElement('tr');

  const nameCell: HTMLTableCellElement = document.createElement('td');
  nameCell.textContent = student.firstName;

  const locationCell: HTMLTableCellElement = document.createElement('td');
  locationCell.textContent = student.location;

  row.appendChild(nameCell);
  row.appendChild(locationCell);
  tableBody.appendChild(row);
});

// Append body to table and table to document
table.appendChild(tableBody);
document.body.appendChild(table);
