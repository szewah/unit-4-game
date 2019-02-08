$(document).ready(function() {

    var randomNumber = Math.floor(Math.random()*100 + 1);
    var num1 = Math.floor(Math.random()*10 + 1);
    var num2 = Math.floor(Math.random()*10 + 1);
    var num3 = Math.floor(Math.random()*10 + 1);
    var num4 = Math.floor(Math.random()*10 + 1);
    var score =0;
    var wins = 0;
    var losses = 0;

    function startGame() {
        score = 0;
        randomNumber =Math.floor(Math.random()*101 + 19)
        console.log(randomNumber);
        num1 = Math.floor(Math.random()*11 + 1);
        num2 = Math.floor(Math.random()*11 + 1);
        num3 = Math.floor(Math.random()*11 + 1);
        num4 = Math.floor(Math.random()*11 + 1);
        $('#number').text(randomNumber);
        $('#wins').text('Wins: ' + wins);
        $('#losses').text('Losses: ' + losses);
    };

    startGame();

    $('#colorImage').on('click', function() {
        score += num1;
        winlose();
        $('#scoreBox').text(score);
    });

    $('#blackWhiteImage').on('click', function() {
        score += num2;
        winlose();
        $('#scoreBox').text(score);
    });

    $('#goldBlackImage').on('click', function() {
        score += num3;
        winlose();
        $('#scoreBox').text(score);
    });

    $('#pink').on('click', function() {
        score += num4;
        winlose();
        $('#scoreBox').text(score);
    });

    function winlose() {
        if (score === randomNumber) {
            wins++;
            alert('You won');
            $('#wins').text('Wins: ' + wins);
            startGame(); 
        } else if (score > randomNumber) {
            losses++;
            alert('You lost');
            $('#losses').text('Losses: ' + losses);
            startGame(); 
        }       
    };
});
