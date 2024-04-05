const input = document.querySelector(".addyourtask");
const button = document.querySelector(".button");
const itemContainer = document.querySelector(".parron");
function aymen(input) {
  const todo = input.value;
  itemContainer.innerHTML += ` 
    <div class="items">
      <p> ${todo} </p>
      <img class="mines" src="pbl.png" alt="" />
    </div>
  `;
  input.value = "";
}
button.addEventListener("click", function () {
  aymen(input);
});
Document.body.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    aymen(input);
  }
});
