function adduser(){
    player1 = document.getElementById("player_1input").value;
    player2 = document.getElementById("player_2input").value;
    
    localStorage.setItem("Player 1", player1);
    localStorage.setItem("Player 2", player2);
    
    window.location = "quiz_game.html";
    
    }