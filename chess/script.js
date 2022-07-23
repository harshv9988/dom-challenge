const chess = function (id, row, col) {
  let element = document.querySelector(id);
  let isBlack = false;

  for (let r = 0; r < row; r++) {
    let val = isBlack;
    for (let c = 0; c < col; c++) {
      let cell = document.createElement("div");
      cell.classList.add("cell");
      if (val) {
        cell.classList.add("black");
      }
      cell.setAttribute("r-cod", r);
      cell.setAttribute("c-cod", c);
      cell.classList.add(`${r}${c}`);
      element.appendChild(cell);
      val = !val;
    }
    isBlack = !isBlack;
  }

  element.addEventListener("click", (e) => {
    let curCol = e.target.getAttribute("c-cod");
    let curRow = e.target.getAttribute("r-cod");
    fillColor(curRow, curCol);
  });
};

const fillColor = (curRow, curCol) => {
  let col = curCol;
  let row = curRow;

  while (col < 8 && row >= 0) {
    let classe = `${row}${col}`;
    console.log(document.getElementsByClassName(classe));

    document.getElementsByClassName(classe)[0].style.backgroundColor = "pink";
    col++;
    row--;
  }

  col = curCol;
  row = curRow;

  while (row < 8 && col >= 0) {
    let classe = `${row}${col}`;
    console.log(document.getElementsByClassName(classe));

    document.getElementsByClassName(classe)[0].style.backgroundColor = "pink";
    col--;
    row++;
  }
  col = curCol;
  row = curRow;

  while (col < 8 && row < 8) {
    let classe = `${row}${col}`;
    console.log(document.getElementsByClassName(classe));

    document.getElementsByClassName(classe)[0].style.backgroundColor = "pink";
    col++;
    row++;
  }

  col = curCol;
  row = curRow;

  while (row >= 0 && col >= 0) {
    let classe = `${row}${col}`;
    console.log(document.getElementsByClassName(classe));

    document.getElementsByClassName(classe)[0].style.backgroundColor = "pink";
    col--;
    row--;
  }
};

chess("#grid", 8, 8);
