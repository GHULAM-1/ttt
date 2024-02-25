let bgMusic = new Audio("assests/gamemusic.mp3");
let turnMusic = new Audio("assests/ting.mp3");
let overMusic = new Audio("assests/gameover.mp3");
let btn = document.getElementById("reset");
let boxes = document.querySelectorAll(".boxes");
let pic = document.getElementsByTagName("img")[0];
let line = document.querySelector(".line")
let info = (document.getElementsByClassName("info")[0]);
let turn = true;

const reset = ()=>{
    for (const box of boxes) {
        box.innerText = ""
        line.hidden = true
        box.disabled = false
        
    }
    pic.style.width = " 0px"
}

const disableBox = ()=>{
    for (const box of boxes) {
        box.disabled = true
    }
}

const checkWin = () => {
  let win = [
    [0, 1, 2 ,0,5,0],
    [3, 4, 5 ,0,15,0],
    [6, 7, 8 ,0,25,0],
    [0, 3, 6 ,-9.7,14.7 ,90],
    [1, 4, 7 ,0 ,17 ,90],
    [2, 5, 8 ,9.7,14.7,90],
    [0, 4, 8 ,0,14.7,45],
    [2, 4, 6 , 0,14.7,135],
  ];
  for (const pattren of win) {
    let v1 = boxes[pattren[0]].innerText;
    let v2 = boxes[pattren[1]].innerText;
    let v3 = boxes[pattren[2]].innerText;
    let v4 = pattren[3];
    let v5 = pattren[4];
    let v6 = pattren[5];

    console.log(v4)

    if (v1 != "" && v2 != "" && v3 != "") {
      if (v1 == v2 && v2 == v3) {
        info.innerText = "WINNER IS " + v1;
        line.hidden = false
        line.style.transform = `translate(${v4}vw ,${v5}vw) rotate(${v6}deg)`
        pic.style.width = "200px";
        overMusic.play()
        disableBox()

      }
    }
    // else if(v1!=v2&&v2!=v3)
    // {
    //   info.innerText = "DRAW......";
    //   overMusic.play()
      
    // }
  }
};

 boxes.forEach((box) => {
    document.getElementsByClassName("info")[0].innerText = "Turn for X"
  box.addEventListener("click",()=> {
    turnMusic.play();
    if (turn) {
      document.getElementsByClassName("info")[0].innerText = "Turn for O";
      box.innerText = "X";
      turn = false;
    } else {
      document.getElementsByClassName("info")[0].innerText = "Turn for X";
      box.innerText = "O";
      turn = true;
    }
    box.disabled = true
    checkWin();
  });
});

btn.addEventListener("click" , reset)
