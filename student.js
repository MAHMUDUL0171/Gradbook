let students = [];

function displayStudents(students) {
    const studentListDiv = document.getElementById('studentList');
    let html = '<table><tr><th>ID</th><th>First Name</th><th>Last Name</th><th>Grade</th></tr>';
    for (const student of students) {
        html += `<tr><td>${student.id}</td><td>${student.firstName}</td><td>${student.lastName}</td><td>${student.grade}</td></tr>`;
    }
    html += '</table>';
    studentListDiv.innerHTML = html;
}

function addStudent() {
    const id = document.getElementById('studentID').value;
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const grade = document.getElementById('grade').value;

    if (id && firstName && lastName && grade) {
        students.push({
            id: parseInt(id),
            firstName: firstName,
            lastName: lastName,
            grade: parseInt(grade)
        });

        displayStudents(students);

        // Clear the input fields
        document.getElementById('studentID').value = '';
        document.getElementById('firstName').value = '';
        document.getElementById('lastName').value = '';
        document.getElementById('grade').value = '';
    } else {
        alert('Please fill in all fields.');
    }
}

function sortStudents() {
    const sortBy = document.getElementById('sortBy').value;

    students.sort((a, b) => {
        if (sortBy === 'id') {
            return a.id - b.id;
        } else if (sortBy === 'firstName') {
            return a.firstName.localeCompare(b.firstName);
        } else if (sortBy === 'lastName') {
            return a.lastName.localeCompare(b.lastName);
        } else if (sortBy === 'grade') {
            return a.grade - b.grade;
        }
    });

    displayStudents(students);
}
