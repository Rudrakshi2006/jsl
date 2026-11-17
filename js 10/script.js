function loadStudents() {
    fetch("students.json")
        .then(response => response.json())
        .then(data => {
            let tableBody = document.querySelector("#studentTable tbody");
            tableBody.innerHTML = "";

            data.forEach(student => {
                tableBody.innerHTML += `
                    <tr>
                        <td>${student.id}</td>
                        <td>${student.name}</td>
                        <td>${student.department}</td>
                        <td>${student.marks}</td>
                    </tr>
                `;
            });
        })
        .catch(error => {
            console.log("Error:", error);
        });
}
