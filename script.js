let queue = [];

function addPatient() {
  let name = document.getElementById("name").value;
  let priority = document.getElementById("priority").value;

  if (name === "") {
    alert("Enter patient name");
    return;
  }

  queue.push({ name: name, priority: priority });

  // Sort by priority (highest first)
  queue.sort((a, b) => b.priority - a.priority);

  displayQueue();
}

function allocateBed() {
  if (queue.length === 0) {
    document.getElementById("result").innerText = "No patients waiting";
    return;
  }

  let patient = queue.shift();

  document.getElementById("result").innerText =
    "Bed allocated to: " + patient.name;

  displayQueue();
}

function displayQueue() {
  let list = document.getElementById("list");
  list.innerHTML = "";

  queue.forEach(p => {
    let li = document.createElement("li");
    li.innerText = p.name + " (Priority: " + p.priority + ")";
    list.appendChild(li);
  });
}