function PixelArt(id, row, col) {
  let element = document.querySelector(id);

  for (let i = 0; i < row * col; i++) {
    let cell = document.createElement("div");
    cell.classList.add("cell");
    element.appendChild(cell);
  }

  let mousedown = false;

  document.addEventListener("mousedown", (e) => {
    mousedown = true;
    if (e.target.className === "cell") e.target.style.background = "pink";
  });

  document.addEventListener("mouseup", (e) => {
    mousedown = false;
  });

  element.addEventListener("mousemove", (e) => {
    if (mousedown && e.target.className === "cell") {
      e.target.style.background = "pink";
    }
  });
}

PixelArt("#grid", 10, 10);
