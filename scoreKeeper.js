var one = document.getElementById("one");

var two  = document.getElementById("two");

var reset = document.getElementById("reset");

var h1 = document.querySelector("h1");

var result = document.getElementById("result");

var span1 = document.querySelector("#span1");
var span2 = document.querySelector("#span2");

var numin = document.querySelector("input");

var nam1 ,nam2 ;

var pspan = document.querySelector("#pspan");

var scoreOne = 0;
var scoreTwo = 0;
var winningScore = 5;
var gameOver = false;

result.style.color = "blue";



function inputnames(){
	nam1 = prompt("NAME OF PLAYER 1");
	nam2 = prompt("NAME OF PLAYER 2");
}

inputnames();
// changenames(nam1 , nam2);

// function changenames(name1="PLAYER 1" , name2 = "PLAYER 2"){

// 	one.textContent = name1;
// 	two.textContent = name2;
// }


one.addEventListener("click" , function(){

	if((winningScore > scoreOne) && !(gameOver))
	{	scoreOne++;
		h1.innerHTML = scoreOne.toString() + " to " + scoreTwo.toString();



		if(winningScore === scoreOne){

			gameOver = true;

			result.textContent = "CONGRATULATIONS " + nam1.toString() + " WON!";
		
		}
	} 

});


two.addEventListener("click" , function(){

	if(!(gameOver) && (winningScore > scoreTwo)){
		scoreTwo++;
		h1.innerHTML = scoreOne.toString() + " to " + scoreTwo.toString();

		if(winningScore ===  scoreTwo){

			gameOver = true;
			result.textContent = "CONGRATULATIONS " + nam2.toString() + " WON!";

			}
		}	
} );


reset.addEventListener("click" , function(){

	reseter(0);
});


function reseter(ch=0){

	scoreOne = scoreTwo = 0;

	h1.innerHTML = scoreOne.toString() + " to " + scoreTwo.toString();
	gameOver = false;
	result.textContent = "";
	
	if(ch){
		inputnames();
		// changenames(nam1 , nam2);
	}
}


numin.addEventListener("change" , function(){

	pspan.textContent = numin.value;

	winningScore = Number(numin.value);

	reseter();

});


