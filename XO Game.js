/*Code of Minmax here*/

var board = [
	[0, 0, 0],
	[0, 0, 0],
	[0, 0, 0],
];

//COM เป็น MAX, HUMAN เป็น MIN
var HUMAN = -1;
var COMP = +1;

/*if (ForWinner()!=-1 && ForWinner()!="") { 
        if (ForWinner()=="X") { alert("Player 1 wins!"); }
        else { alert("Player 2 wins!"); }
        turn = false; 
	  }
	  
	  */

function gameOver() {
	// var winCase = [[stage[0][0], stage[0][1], stage[0][2]],
	// 			   [stage[1][0], stage[1][1], stage[1][2]],
	// 			   [stage[2][0], stage[2][1], stage[2][2]],
	// 			   [stage[0][0], stage[1][0], stage[2][0]],
	// 			   [stage[0][1], stage[1][1], stage[2][1]],
	// 			   [stage[0][2], stage[1][2], stage[2][2]],
	// 			   [stage[0][0], stage[1][1], stage[2][2]],
	// 			   [stage[0][2], stage[1][1], stage[2][0]]];

	// var winCase;

	var box1 = document.getElementById("00");
	var box2 = document.getElementById("01");
	var box3 = document.getElementById("02");
	var box4 = document.getElementById("10");
	var box5 = document.getElementById("11");
	var box6 = document.getElementById("12");
	var box7 = document.getElementById("20");
	var box8 = document.getElementById("21");
	var box9 = document.getElementById("22");

	if((box1 == box2)&&(box2 == box3)){
		return box3;
	}
	else if((box4 == box5)&&(box5 == box6)){
		return box6;
	}
	else if((box7 == box8)&&(box8 == box9)){
		return box9;
	}
	else if((box1 == box4)&&(box4 == box7)){
		return box7;
	}
	else if((box2 == box5)&&(box5 == box8)){
		return box8;
	}
	else if((box3 == box6)&&(box6 == box9)){
		return box9;
	}
	else if((box1 == box5)&&(box5 == box9)){
		return box9;
	}
	else if((box3 == box5)&&(box5 == box7)){
		return box7;
	}
return -1;
}



