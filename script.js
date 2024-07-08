// @ts-nocheck
const textareaEl = document.querySelector(".textarea");
const charactersNumberEl = document.querySelector(".stat__number--characters");
const twitterNumberEl = document.querySelector(".stat__number--twitter");
const facebooksNumberEl = document.querySelector(".stat__number--facebook");
const wordsNumberEl = document.querySelector(".stat__number--words");

const inputHandler = () => {
  if (textareaEl.value.includes("<script>")) {
    alert("you cannot use that ");
    textareaEl.value = textareaEl.value.replace("<script>", " ");
  }
  // words set numbers
  let numberOfWords = textareaEl.value.split("").length;
  if (textareaEl.value.length === 0) {
    wordsNumberEl = 0;
  }
  //determine new numbers
  const numberOfCharacters = textareaEl.value.length;
  //set new numbers
  const twitterCharactersLeft = 280 - numberOfCharacters;
  const facebookCharactersLeft = 2200 - numberOfCharacters;

  // add visual indicator if limit is exceeded
  if (twitterCharactersLeft < 0) {
    twitterNumberEl.classList.add("stat__number--limit");
  } else {
    twitterNumberEl.classList.remove("stat__number--limit");
  }

  if (facebooksNumberEl < 0) {
    facebooksNumberEl.classList.add("stat__number--limit");
  } else {
    facebooksNumberEl.classList.remove("stat__number--limit");
  }

  wordsNumberEl.textContent = numberOfWords;
  charactersNumberEl.textContent = numberOfCharacters;
  twitterNumberEl.textContent = twitterCharactersLeft;
  facebooksNumberEl.textContent = facebookCharactersLeft;
};

textareaEl.addEventListener("input", inputHandler);
