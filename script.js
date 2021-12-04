const input = document.querySelector(".text");
const result = document.querySelector(".result");
const checkBtn = document.querySelector(".check-button");

const palindrome = () => {
  const text = input.value.trim();

  let len = text.length;

  let first = text.substring(0, Math.floor(len / 2)).toLowerCase();

  let last = text.substring(len - Math.floor(len / 2)).toLowerCase();

  let flip = last.split("").reverse().join("");

  if (text === "") {
    result.innerHTML = `Type a word`;
  } else if (first === flip) {
    result.innerHTML = `${text.toUpperCase()} is a Palindrome`;
    input.value = "";
    result.style.color = "#B4FE98";
  } else {
    result.innerHTML = `${text.toUpperCase()} is not a Palindrome`;
    input.value = "";
    result.style.color = "#FF0000";
  }
};
checkBtn.addEventListener("click", palindrome);
