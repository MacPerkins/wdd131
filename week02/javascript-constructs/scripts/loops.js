const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

const reportList = document.getElementById("report-list");
const daysList = document.getElementById("days-list");

// for (let index = 0; index < studentReport.length; index++) {
//   if (studentReport[index] < LIMIT) {
//     const listItem = document.createElement("li");
//     listItem.textContent = studentReport[index];
//     reportList.appendChild(listItem);
//   }
// }

// let index = 0;
// while (index < studentReport.length) {
//   if (studentReport[index] < LIMIT) {
//     const listItem = document.createElement("li");
//     listItem.textContent = studentReport[index];
//     reportList.appendChild(listItem);
//   }
//   index++;
// }

// studentReport.forEach(report => {
//   if (report < LIMIT) {
//     const listItem = document.createElement("li");
//     listItem.textContent = report;
//     reportList.appendChild(listItem);
//   }
// });

for (index in studentReport) {
  if (studentReport[index] < LIMIT) {
    const listItem = document.createElement("li");
    listItem.textContent = studentReport[index];
    reportList.appendChild(listItem);
  }
}

for (let index = 0; index < DAYS; index++) {
  switch (index) {
    case 0:
      daysList.innerHTML += "<li>Sunday</li>";
      break;
    case 1:
      daysList.innerHTML += "<li>Monday</li>";
      break;
    case 2:
      daysList.innerHTML += "<li>Tuesday</li>";
      break;
    case 3:
      daysList.innerHTML += "<li>Wednesday</li>";
      break;
    case 4:
      daysList.innerHTML += "<li>Thursday</li>";
      break;
    case 5:
      daysList.innerHTML += "<li>Friday</li>";
      break;
    case 6:
      daysList.innerHTML += "<li>Saturday</li>";
      break;
  }
}
