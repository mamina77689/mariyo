for (let i = 0; i < 9; i++) {
  let pipe = document.createElement("div");
  pipe.style.width = "10vw";
  pipe.style.height = "10vw";
  pipe.style.backgroundImage = "url(pipe.png)";
  pipe.style.backgroundSize = "contain";
  pipe.style.backgroundRepeat = "no-repeat";
  pipe.style.display = "flex";
  pipe.style.justifyContent = "center";

  pipe.id = i.toString();
  const board = document.getElementById("board");
  board.appendChild(pipe);
}

let mole1 = document.createElement("img");
mole1.src = "monty-mole.png";
mole1.style.height = "5vw";
mole1.style.width = "5vw ";

function randomm() {
  let num = Math.floor(Math.random() * 9);
  return num.toString();
}
let mariyoo = 0;
function molee() {
  let number = randomm();
  mariyoo = number;
  document.getElementById(number).appendChild(mole1);
}

const store = document.getElementsByClassName("mole2")[0];
let result = 0;

function click() {
  result += 10;
  store.innerHTML = result;
}
mole1.onclick = click;

let monster = document.createElement("img");
monster.src = "piranha-plant.png";
monster.style.height = "5.5vw";
monster.style.width = "5.5vw";

interval = setInterval(molee, 1000);
interval2 = setInterval(randomm2, 1000);

function randomm2() {
  let number = randomm();
  if (mariyoo === number) {
    if (number + 1 === 9) {
      number--;
    } else {
      number++;
    }
  }
  document.getElementById(number).appendChild(monster);
}

function click2() {
  store.innerHTML = `game over : ${result}`;
  clearInterval(interval);
  clearInterval(interval2);
}
monster.onclick = click2;
