function changecolor() {
  let color = getRandomcolor();
  //   let color = getRandcolor();
  document.body.style.backgroundColor = color;
  document.getElementById("btn").style.backgroundColor = color;
}

function getRandcolor() {
  var str = "#";
  for (let i = 0; i < 6; i++) {
    let num = Math.floor(Math.random() * 15);
    if (num > 9) {
      switch (num) {
        case 10:
          num = "A";
          break;
        case 11:
          num = "B";
          break;
        case 12:
          num = "C";
          break;
        case 13:
          num = "D";
          break;
        case 14:
          num = "E";
          break;
        case 15:
          num = "F";
          break;
      }
    }
    str += num;
  }
  return str;
}

function getRandomcolor() {
  return "#" + Math.random().toString(16).substring(2, 8);
}
