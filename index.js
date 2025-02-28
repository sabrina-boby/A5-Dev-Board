//add random background colour
document
  .getElementById("colour-cng-btn")
  .addEventListener("click", function () {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    document.body.style.backgroundColor = randomColor;
  });

//small card dynamic date
function updateDate() {
  const dateElement = document.querySelector(".dynamic-date");
  const now = new Date();

  const options = { month: "short", day: "2-digit", year: "numeric" };
  const formattedDate = now.toLocaleDateString("en-US", options);

  dateElement.textContent = formattedDate;
}
updateDate();

// discover-new-page
document.getElementById("discover-new").addEventListener("click", function () {
  window.location.href = "discover-something.html";
});

//add card
let taskAssigned = document.getElementById("task-assigned");
let taskAssignedData = parseInt(taskAssigned.innerText);

let addedCardCount = document.getElementById("added-card-count");
let addedCardCountAll = parseInt(addedCardCount.innerText);

let addedActivity = document.getElementById("added-activity");

let buttons = document.getElementsByClassName("completed-btn");

let currentTime = new Date().toLocaleTimeString();

for (let btn of buttons) {
  btn.addEventListener("click", function () {
    // button disabled
    alert("Board updated Successfully");
    this.classList.add("disabled");
    // increse number
    taskAssignedData -= 1;
    taskAssigned.innerText = taskAssignedData;
    if (taskAssignedData <= 0) {
      alert("congrates!!!You have completed all the current task");
    }
    // decrese number
    addedCardCountAll += 1;
    addedCardCount.innerText = addedCardCountAll;
    let cardTitle =
      this.closest(".hero").querySelector(".card-title").innerText;
    addedActivity.innerHTML += `
      <p class="bg-[#e0e2e9] p-2 rounded">You have Complete The Task ${cardTitle} at ${currentTime}</p>
  `;
  });

  // clearHistory
  let clearHistory = document
    .getElementById("clear-history")
    .addEventListener("click", function () {
      addedActivity.innerHTML = ``;
    });
}

