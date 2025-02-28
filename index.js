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
