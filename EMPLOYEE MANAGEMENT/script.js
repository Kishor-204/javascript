

let employees = [];

let currentDepartment = "All";

let currentSearch = "";

let currentSort = "none";

let selectedDepartment = "";


const employeeContainer =
    document.getElementById("employeeContainer");

const employeeCount =
    document.getElementById("employeeCount");

const message =
    document.getElementById("message");

const searchInput =
    document.getElementById("searchInput");

const searchBtn =
    document.getElementById("searchBtn");

const employeeForm =
    document.getElementById("employeeForm");



function fetchEmployees() {

    message.innerHTML =
        "Loading employee data...";


    fetch("https://dummyjson.com/users")

        .then(function(response) {

            return response.json();

        })

        .then(function(data) {

            employees = data.users.map(function(user) {

                const department =
                    getDepartment(
                        user.company.department
                    );


                return {

                    id: user.id,

                    name:
                        user.firstName +
                        " " +
                        user.lastName,

                    age: user.age,

                    email: user.email,

                    phone: user.phone,

                    department: department,

                    image: user.image,

                    
                    salary: 50000

                };

            });


            message.innerHTML =
                "Employee data loaded successfully.";


            displayEmployees(employees);


            setTimeout(function() {

                message.innerHTML = "";

            }, 2500);

        })


        .catch(function(error) {

            console.log(error);

            message.innerHTML =
                "Unable to load employee data.";

        })


        .finally(function() {

            console.log(
                "API request completed."
            );

        });

}




function getDepartment(apiDepartment) {

    const department =
        apiDepartment.toLowerCase();


    if (
        department.includes("human")
    ) {

        return "HR";

    }


    else if (
        department.includes("engineering")
    ) {

        return "IT";

    }


    else if (
        department.includes("finance")
    ) {

        return "Finance";

    }


    else if (
        department.includes("marketing")
    ) {

        return "Marketing";

    }


    else {

        return "IT";

    }

}


function displayEmployees(employeeArray) {

    employeeContainer.innerHTML = "";


    if (employeeArray.length === 0) {

        employeeContainer.innerHTML = `

            <div class="empty-message">

                <h3>
                    No employees found.
                </h3>

            </div>

        `;


        updateEmployeeCount(employeeArray);

        calculateSalary(employeeArray);

        displayHighestSalary(employeeArray);

        return;

    }


    employeeArray.forEach(function(employee) {

        createEmployeeCard(employee);

    });


    updateEmployeeCount(employeeArray);

    calculateSalary(employeeArray);

    displayHighestSalary(employeeArray);

}


function createEmployeeCard(employee) {

    const card =
        document.createElement("div");


    card.classList.add(
        "employee-card"
    );


    const {
        name,
        age,
        email,
        department,
        phone,
        image,
        salary
    } = employee;


    card.innerHTML = `

        <img
            src="${
                image ||
                "https://via.placeholder.com/110"
            }"
            alt="${name}"
        >

        <h3>
            ${name}
        </h3>

        <p>
            <strong>Age:</strong>
            ${age}
        </p>

        <p>
            <strong>Email:</strong>
            ${email}
        </p>

        <p>
            <strong>Department:</strong>
            ${department}
        </p>

        <p>
            <strong>Phone:</strong>
            ${phone || "Not available"}
        </p>

        <p>
            <strong>Salary:</strong>
            ₹${salary.toLocaleString()}
        </p>

        <button
            class="delete-btn"
        >
            Delete
        </button>

    `;


    const deleteButton =
        card.querySelector(
            ".delete-btn"
        );


    deleteButton.addEventListener(
        "click",
        function() {

            deleteEmployee(
                employee.id
            );

        }
    );


    employeeContainer.appendChild(
        card
    );

}


function searchEmployees() {

    currentSearch =
        searchInput.value
            .toLowerCase()
            .trim();


    applyFilters();

}


function filterDepartment(
    department
) {

    currentDepartment =
        department;


    applyFilters();

}



function applyFilters() {

    let filteredEmployees =
        [...employees];


    // Search

    if (
        currentSearch !== ""
    ) {

        filteredEmployees =
            filteredEmployees.filter(
                function(employee) {

                    return employee.name
                        .toLowerCase()
                        .includes(
                            currentSearch
                        );

                }
            );

    }


    // Department

    if (
        currentDepartment !== "All"
    ) {

        filteredEmployees =
            filteredEmployees.filter(
                function(employee) {

                    return (
                        employee.department ===
                        currentDepartment
                    );

                }
            );

    }


    // Sort

    filteredEmployees =
        applySorting(
            filteredEmployees
        );


    displayEmployees(
        filteredEmployees
    );

}


function applySorting(
    employeeArray
) {

    const sortedEmployees =
        [...employeeArray];


    if (
        currentSort === "nameAsc"
    ) {

        sortedEmployees.sort(
            function(a, b) {

                return a.name.localeCompare(
                    b.name
                );

            }
        );

    }


    else if (
        currentSort === "nameDesc"
    ) {

        sortedEmployees.sort(
            function(a, b) {

                return b.name.localeCompare(
                    a.name
                );

            }
        );

    }


    else if (
        currentSort === "ageAsc"
    ) {

        sortedEmployees.sort(
            function(a, b) {

                return a.age - b.age;

            }
        );

    }


    else if (
        currentSort === "ageDesc"
    ) {

        sortedEmployees.sort(
            function(a, b) {

                return b.age - a.age;

            }
        );

    }


    else if (
        currentSort === "salaryAsc"
    ) {

        sortedEmployees.sort(
            function(a, b) {

                return a.salary - b.salary;

            }
        );

    }


    else if (
        currentSort === "salaryDesc"
    ) {

        sortedEmployees.sort(
            function(a, b) {

                return b.salary - a.salary;

            }
        );

    }


    return sortedEmployees;

}




function updateEmployeeCount(
    employeeArray
) {

    employeeCount.innerHTML =
        employeeArray.length;


    document.getElementById(
        "salaryEmployeeCount"
    ).innerHTML =
        employeeArray.length;

}


function addEmployee() {

    const name =
        document
            .getElementById("name")
            .value
            .trim();


    const age =
        Number(
            document
                .getElementById("age")
                .value
        );


    const email =
        document
            .getElementById("email")
            .value
            .trim();


    const department =
        document
            .getElementById("department")
            .value;


    const salary =
        Number(
            document
                .getElementById("salary")
                .value
        );


    if (
        !validateEmployee(
            name,
            age,
            email,
            department,
            salary
        )
    ) {

        return;

    }


    const newEmployee = {

        id: Date.now(),

        name: name,

        age: age,

        email: email,

        department: department,

        phone: "Not available",

        image:
            "https://via.placeholder.com/110",

        salary: salary

    };


    employees = [
        ...employees,
        newEmployee
    ];


    applyFilters();


    clearForm();


    message.innerHTML =
        "Employee added successfully.";


    setTimeout(function() {

        message.innerHTML = "";

    }, 2500);

}

function validateEmployee(
    name,
    age,
    email,
    department,
    salary
) {

    document.getElementById(
        "nameError"
    ).innerHTML = "";


    document.getElementById(
        "ageError"
    ).innerHTML = "";


    document.getElementById(
        "emailError"
    ).innerHTML = "";


    document.getElementById(
        "departmentError"
    ).innerHTML = "";


    document.getElementById(
        "salaryError"
    ).innerHTML = "";


    let isValid = true;


    // Name

    if (
        name === ""
    ) {

        document.getElementById(
            "nameError"
        ).innerHTML =
            "❌ Please enter employee name.";

        isValid = false;

    }


    // Age

    if (
        age <= 18
    ) {

        document.getElementById(
            "ageError"
        ).innerHTML =
            "❌ Age must be greater than 18.";

        isValid = false;

    }


    // Email

    if (
        email === ""
    ) {

        document.getElementById(
            "emailError"
        ).innerHTML =
            "❌ Please enter employee email.";

        isValid = false;

    }


    // Department

    if (
        department === ""
    ) {

        document.getElementById(
            "departmentError"
        ).innerHTML =
            "❌ Please select a department.";

        isValid = false;

    }


    // Salary

    if (
        salary <= 0
    ) {

        document.getElementById(
            "salaryError"
        ).innerHTML =
            "❌ Please enter a valid salary.";

        isValid = false;

    }


    return isValid;

}




function deleteEmployee(id) {

    const employee =
        employees.find(
            function(employee) {

                return employee.id === id;

            }
        );


    employees =
        employees.filter(
            function(employee) {

                return employee.id !== id;

            }
        );


    applyFilters();


    if (employee) {

        message.innerHTML =
            employee.name +
            " deleted successfully.";

    }


    setTimeout(function() {

        message.innerHTML = "";

    }, 2500);

}



function clearForm() {

    employeeForm.reset();


    selectedDepartment = "";


    document.getElementById(
        "department"
    ).value = "";


    document.getElementById(
        "departmentSelected"
    ).innerHTML = `

        Select Department

        <span class="arrow">
            ▼
        </span>

    `;


    document.getElementById(
        "nameError"
    ).innerHTML = "";


    document.getElementById(
        "ageError"
    ).innerHTML = "";


    document.getElementById(
        "emailError"
    ).innerHTML = "";


    document.getElementById(
        "departmentError"
    ).innerHTML = "";


    document.getElementById(
        "salaryError"
    ).innerHTML = "";

}


function calculateSalary(
    employeeArray
) {

    const totalSalary =
        employeeArray.reduce(
            function(total, employee) {

                return (
                    total +
                    employee.salary
                );

            },
            0
        );


    let averageSalary = 0;


    if (
        employeeArray.length > 0
    ) {

        averageSalary =
            totalSalary /
            employeeArray.length;

    }


    document.getElementById(
        "totalSalary"
    ).innerHTML =

        "₹" +
        totalSalary.toLocaleString();


    document.getElementById(
        "averageSalary"
    ).innerHTML =

        "₹" +
        Math.round(
            averageSalary
        ).toLocaleString();

}




function displayHighestSalary(
    employeeArray
) {

    const highestEmployee =
        employeeArray.reduce(
            function(
                highest,
                employee
            ) {

                if (!highest) {

                    return employee;

                }


                if (
                    employee.salary >
                    highest.salary
                ) {

                    return employee;

                }


                return highest;

            },
            null
        );


    const highestEmployeeElement =
        document.getElementById(
            "highestEmployee"
        );


    if (
        !highestEmployee
    ) {

        highestEmployeeElement.innerHTML =
            "No employee data.";

        return;

    }


    highestEmployeeElement.innerHTML = `

        <h3>
            ${highestEmployee.name}
        </h3>

        <p>
            <strong>
                Salary:
            </strong>

            ₹${highestEmployee.salary.toLocaleString()}
        </p>

        <p>
            <strong>
                Department:
            </strong>

            ${highestEmployee.department}
        </p>

    `;

}


function displayDateTime() {

    const currentDate =
        new Date();


    const day =
        currentDate.getDate();


    const month =
        currentDate.getMonth();


    const year =
        currentDate.getFullYear();


    const months = [

        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"

    ];


    let hours =
        currentDate.getHours();


    const minutes =
        currentDate.getMinutes();


    const seconds =
        currentDate.getSeconds();


    let period = "AM";


    if (
        hours >= 12
    ) {

        period = "PM";

    }


    if (
        hours > 12
    ) {

        hours =
            hours - 12;

    }


    if (
        hours === 0
    ) {

        hours = 12;

    }


    const formattedMinutes =
        minutes
            .toString()
            .padStart(2, "0");


    const formattedSeconds =
        seconds
            .toString()
            .padStart(2, "0");


    document.getElementById(
        "today"
    ).innerHTML =

        `Today: ${day} ${months[month]} ${year}`;


    document.getElementById(
        "time"
    ).innerHTML =

        `Time: ${hours}:${formattedMinutes}:${formattedSeconds} ${period}`;

}


searchBtn.addEventListener(
    "click",
    searchEmployees
);



searchInput.addEventListener(
    "keyup",
    function(event) {

        if (
            event.key === "Enter"
        ) {

            searchEmployees();

        }

    }
);


const departmentButtons =
    document.querySelectorAll(
        ".department-btn"
    );


departmentButtons.forEach(
    function(button) {

        button.addEventListener(
            "click",
            function() {


                departmentButtons.forEach(
                    function(btn) {

                        btn.classList.remove(
                            "active"
                        );

                    }
                );


                button.classList.add(
                    "active"
                );


                const department =
                    button.getAttribute(
                        "data-department"
                    );


                filterDepartment(
                    department
                );

            }
        );

    }
);



employeeForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();

        addEmployee();

    }
);



const sortDropdown =
    document.getElementById(
        "sortDropdown"
    );


const sortSelected =
    document.getElementById(
        "sortSelected"
    );


const sortOptions =
    document.querySelectorAll(
        "#sortOptions .dropdown-option"
    );



sortSelected.addEventListener(
    "click",
    function(event) {

        event.stopPropagation();


        departmentDropdown.classList.remove(
            "open"
        );


        sortDropdown.classList.toggle(
            "open"
        );

    }
);


sortOptions.forEach(
    function(option) {

        option.addEventListener(
            "click",
            function() {


                currentSort =
                    option.getAttribute(
                        "data-value"
                    );


                const text =
                    option.textContent.trim();


                sortSelected.innerHTML = `

                    ${text}

                    <span class="arrow">
                        ▼
                    </span>

                `;


                sortOptions.forEach(
                    function(item) {

                        item.classList.remove(
                            "selected"
                        );

                    }
                );


                option.classList.add(
                    "selected"
                );


                sortDropdown.classList.remove(
                    "open"
                );


                applyFilters();

            }
        );

    }
);


const departmentDropdown =
    document.getElementById(
        "departmentDropdown"
    );


const departmentSelected =
    document.getElementById(
        "departmentSelected"
    );


const departmentOptions =
    document.querySelectorAll(
        "#departmentOptions .dropdown-option"
    );



departmentSelected.addEventListener(
    "click",
    function(event) {

        event.stopPropagation();


        sortDropdown.classList.remove(
            "open"
        );


        departmentDropdown.classList.toggle(
            "open"
        );

    }
);


departmentOptions.forEach(
    function(option) {

        option.addEventListener(
            "click",
            function() {


                selectedDepartment =
                    option.getAttribute(
                        "data-value"
                    );


                document.getElementById(
                    "department"
                ).value =
                    selectedDepartment;


                const text =
                    option.textContent.trim();


                departmentSelected.innerHTML = `

                    ${text}

                    <span class="arrow">
                        ▼
                    </span>

                `;


                departmentOptions.forEach(
                    function(item) {

                        item.classList.remove(
                            "selected"
                        );

                    }
                );


                option.classList.add(
                    "selected"
                );


                departmentDropdown.classList.remove(
                    "open"
                );

            }
        );

    }
);



document.addEventListener(
    "click",
    function() {

        sortDropdown.classList.remove(
            "open"
        );


        departmentDropdown.classList.remove(
            "open"
        );

    }
);



displayDateTime();


setInterval(
    displayDateTime,
    1000
);


fetchEmployees();