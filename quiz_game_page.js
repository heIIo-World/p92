function send() {
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2);
    question_number  = "<h4>" + number1 + " x " + number2 + "</h4>";
    input_box = "<br> Answer: <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value= "";
    document.getElementById("number2").value = "";
}

question_turn = "player2";
answer_turn = "player1";
player1_score = 0;
player2_score = 0;


function check() 
{
    document.getElementById("player1_name").innerText = localStorage.getItem("player1_name");
    document.getElementById("player2_name").innerText = localStorage.getItem("player2_name");
    get_answer = document.getElementById("input_check_box").value;


    if (get_answer == actual_answer)
    {
        if (answer_turn == "player1")
        {
            player1_score = player1_score+1;
            document.getElementById("player1_score").innerText = player1_score;
            console.log(player1_score);
        
        }
        else {
            player2_score = player2_score +1;
            document.getElementById("player2_score").innerText = player2_score;
            console.log(player2_score);
        }
    }
    if(question_turn == "player1") {
        question_turn="player2";
        document.getElementById("player_question").innerText = "Question Turn - " + localStorage.getItem("player1_name");

    }
    else {
        question_turn="player1";
        document.getElementById("player_question").innerText = "Question Turn - " + localStorage.getItem("player2_name");
    }
    if(answer_turn == "player1") {
        answer_turn="player2";
        document.getElementById("player_answer").innerText = "Answer Turn - " + localStorage.getItem("player1_name");
    }
    else {
        answer_turn="player1";
        document.getElementById("player_answer").innerText = "Answer Turn - " + localStorage.getItem("player2_name");
    }
    document.getElementById("output").innerText = "";
}