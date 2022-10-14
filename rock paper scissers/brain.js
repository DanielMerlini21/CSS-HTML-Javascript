var id = null;
var counter = 0;
var names = ["rock", "paper", "scissors"];
function Reset() {
    elem = document.getElementById("player_score");
    elem2 = document.getElementById("draw_score");
    elem3 = document.getElementById("computer_score");
    elem.innerHTML = 0;
    elem2.innerHTML = 0;
    elem3.innerHTML = 0;
}
function myMove(id_img) {
      var elem = document.getElementById("player");
      var elem2 = document.getElementById("computer");
      elem.src = "rock.png";
      elem2.src = "rock2.png";
      var pos = 0;
      var pos2 = 0;
      var acceleration = -10;
      var acceleration2 = -10;
      clearInterval(id);
      id = setInterval(frame, 10);
      function frame() {
        if (acceleration == 10) {
          clearInterval(id);
          elem.style.top = 350 + 'px';
          elem2.style.top = 350 + "px";
          random = names[Math.floor(Math.random() * names.length)];
          elem.src = id_img + ".png";
          elem2.src = random + "2.png";
          win = who_win(id_img, random);
          thing = document.getElementById(win);
          dis = document.getElementById("show_winner");
          win = win.split("_");
          dis.innerHTML = win[0];
          score = thing.innerHTML;
          score = parseInt(score, 10);
          score += 1;
          thing.innerHTML = score;
        }
        else {
          pos += acceleration;
          pos2 += acceleration2;
          acceleration+=0.5;
          acceleration2 += 0.5;
          elem.style.top = (pos + 300) + 'px';
          elem2.style.top = (pos2 + 300) + "px";
        }
      }

}

function who_win(player1, comp){
    if (player1 == "rock"){
        if (comp == "paper"){
            return "computer_score";
        } if (comp == "rock"){
            return "draw_score";
        } else {
            return "player_score";
        }
    }
    if (player1 == "paper"){
        if (comp == "scissors"){
            return "computer_score";
        } if (comp == "paper") {
            return "draw_score";
        } else {
            return "player_score";
        }
    }
    if (player1 == "scissors"){
        if (comp == "rock"){
            return "computer_score";
        } if (comp == "scissors"){
            return "draw_score";
        } else {
            return "player_score";
        }
    }
}

document.onclick= function(event) {
   var v = document.getElementById("start_screen");
   var a = document.getElementById("game");
   v.className += "hide";
   a.className += "show";
}