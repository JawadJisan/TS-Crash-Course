console.log("Test")

// one way
// const input = document.getElementById("email") as HTMLInputElement;
// const button = document.getElementById("send") as HTMLButtonElement;

// button.addEventListener("click", () => {
//   alert(`Subscription compleate for ${input.value}`);
//   console.log(`Subscription compleate for ${input.value}`);
// });



// another way
const input = document.querySelector<HTMLInputElement>("email");
const button = document.querySelector<HTMLButtonElement>("send");

if (button && input) {
  button.addEventListener("click", () => {
    // alert(`Subscription compleate for ${input.value}`);
    console.log(`Subscription compleate for ${input.value}`);
  });
}
