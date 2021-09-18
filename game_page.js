player1_name=loaclStorage.getItem("player1_name");
player2_name=loaclStorage.getItem("player2_name");

player1_score=0;
player2_score=0;

document.getElementById("player1_name").innerHTML=player1_name+" : ";
document.getElementById("player2_name").innerHTML=player2_name+" : ";

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="question turn - " + player1_name;
document.getElementById("player_answer").innerHTML="answer turn - " + player2_name;

function send() {
    get_word=document.getElementById("word").nodeValue;
    word=get_word.toLowerCase();
    console.log("word in lowerCase = " + word);

    charAt1=word.charat(1);
    console.log(charAt1);

    length_devide_2=Math_floor(word.length/2);
    charAt2=word.charAt(length_devide_2);
    console.log(charAt2);

    length_minus_1=word.length-1;
    charAt3=word.charAt(length_minus_1);
    console.log(charAt3);

    remove_charAt1=word.replace(charAt1, "_");
    remove_charAt2=remove_charAt1.replace(charAt2, "_");
    remove_charAt3=remove_charAt2.replace(charAt3, "_");
    console.log(remove_charAt3);

    question_word="<h4 id='word display'> Q."+remove_charAt3+"</h4";
    input_box="<br>Answer:<input type='text' id='input_check_box'>";
    check_button="<br><br><button class='btn btn-info' onclick='check()'>Check</button>"
    row=question_word+input_box+check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";
}
