const options = [
  { label: "червоний", color: "#F44336" },
  { label: "синій", color: "#2196F3" },
];

const colorPickerContainerEl = document.querySelector(".color-picker");
console.log(colorPickerContainerEl);

const elements = options.map((option) => {
  const buttonEl = document.createElement("button");
  buttonEl.classList.add("color-picker__option");
  buttonEl.textContent = option.label;
  buttonEl.style.backgroundColor = option.color;

  return buttonEl;
});

colorPickerContainerEl.append(...elements);
