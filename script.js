let queue = [];
let beds = 5;

function addPatient() {
  let name = document.getElementById("name").value;
  let priority = parseInt(document.getElementById("priority").value);

  if (name === "") {
    alert("Enter patient name");
    return;
  }

  queue.push({ name, priority });

  // Priority Queue logic
  queue.sort((a, b) => b.priority - a.priority);

  displayQueue();
}

function allocateBed() {
  if (beds <= 0) {
    document.getElementById("result").innerText = "No beds available!";
    return;
  }

  if (queue.length === 0) {
    document.getElementById("result").innerText = "No patients waiting!";
    return;
  }

  let patient = queue.shift();
  beds--;

  document.getElementById("result").innerText =
    "Bed allocated to: " + patient.name;

  document.getElementById("beds").innerText = beds;

  displayQueue();
}

function displayQueue() {
  let list = document.getElementById("list");
  list.innerHTML = "";

  queue.forEach(p => {
    let li = document.createElement("li");

    // Unique color logic
    if (p.priority === 3) li.style.background = "red";
    else if (p.priority === 2) li.style.background = "orange";
    else li.style.background = "green";

    li.innerText = p.name;
    list.appendChild(li);
  });
}
