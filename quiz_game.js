player_1score = 0;
player_2score = 0;

player_1 = localStorage.getItem("Player 1");
document.getElementById("player_1name").innerHTML = player_1 + ": 0";

player_2 = localStorage.getItem("Player 2");
document.getElementById("player_2name").innerHTML = player_2 + ": 0";


function send(){
number1 = document.getElementById("input_1").value;
number2 = document.getElementById("input_2").value;
console.log("Number 1 = "+number1);
console.log("Number 2 = "+number2);

sum_of_numbers = number1*number2;
console.log(sum_of_numbers);

question_timeds = "<h4>" + number1 + "X" + number2 + "</h4>";
input_box = "<br>Answer: <input type = 'number' id = 'input_checkbox'>";
check_button = "<br><br><button class = 'btn btn-info' onclick = 'check()'>CHECK</button>";
row = question_timeds + input_box + check_button;

document.getElementById("output").innerHTML = row;

document.getElementById("input_1").value = "";
document.getElementById("input_2").value = "";



console.log(question_turn, answer_turn);
}

question_turn = "player1";
	answer_turn = "player2";




function logout(){

    localStorage.clear();

	window.location = "index.html"
}






function check()
{

	

	get_answer = document.getElementById("input_checkbox").value;
	if(get_answer == sum_of_numbers)	
	{
		if(answer_turn == "player1")
		{
			player_1score = player_1score +1;
		    document.getElementById("player_1name").innerHTML = player_1 +":"+ player_1score;
		}
		
		if(answer_turn == "player2"){
			player_2score = player_2score +1;
		    document.getElementById("player_2name").innerHTML = player_2+":"+ player_2score;
		}
	}
	
	if(question_turn == "player1")
	{
		question_turn = "player2"
		console.log(question_turn);
		document.getElementById("question_turn").innerHTML = "Question Turn - " + player_2 ;
	}
	else
	{
		question_turn = "player1"
		console.log(question_turn);
		document.getElementById("question_turn").innerHTML = "Question Turn - " + player_1 ;
	}

	if(answer_turn == "player1")
	{
		answer_turn = "player2"
		console.log(answer_turn);
		document.getElementById("answer_turn").innerHTML = "Answer Turn - " + player_2 ;
	}
	else
	{
		answer_turn = "player1"
		console.log(answer_turn);
		document.getElementById("answer_turn").innerHTML = "Answer Turn - " + player_1 ;
	}

    document.getElementById("output").innerHTML = "";
console.log(player_1score, player_2score);

}
