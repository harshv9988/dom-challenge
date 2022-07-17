function Star(id, count, callback) {
  const element = document.querySelector(id);
  for (let i = 0; i < count; i++) {
    let star = document.createElement("i");
    star.classList.add("fa");
    star.classList.add("fa-star-o");
    star.dataset.ratingVal = i + 1;
    element.appendChild(star);
  }

  let selectedVal = 0;
  let stars = document.querySelectorAll(".fa");

  element.addEventListener("click", (e) => {
    selectedVal = e.target.dataset.ratingVal;
    outsourceLogic(selectedVal, stars);
    callback(selectedVal);
  });

  element.addEventListener("mouseover", (e) => {
    const rating = e.target.dataset.ratingVal;
    outsourceLogic(rating, stars);
  });

  element.addEventListener("mouseleave", (e) => {
    console.log(e);
    outsourceLogic(selectedVal, stars);
  });
}

const outsourceLogic = (rating, stars) => {
  for (let i = 0; i < stars.length; i++) {
    if (i < rating) stars[i].classList.add("fa-star");
    else stars[i].classList.remove("fa-star");
  }
};

function getStar(value) {
  document.getElementById("display-star").innerHTML = value;
}
Star("#star", 5, getStar);
