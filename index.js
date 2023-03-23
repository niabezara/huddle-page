const input = document.querySelector(".input");
const subs = document.querySelector(".subs");
const error = document.querySelector(".error");

let mailRegex =
  /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/;

function testmail(input, error) {
  if (input.value.match(mailRegex)) {
    error.classList.remove("visible");
    console.log("this is true");
  } else {
    error.classList.add("visible");
    console.log("no true");
  }
}

// event listener
subs.addEventListener("click", (event) => {
  event.preventDefault();
  testmail(input, error);
  console.log("click");
});
