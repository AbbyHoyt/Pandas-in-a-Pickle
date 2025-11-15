let happiness = 20;
let happinessText = document.getElementById("happiness");
happinessText.textContent = happiness;

let time = 60;
let timeText = document.getElementById("time");
timeText.textContent = time;

let start = document.getElementById("start");
let welcome = document.getElementById("welcome");

let decisionMenu = document.getElementById("decision-menu");
let decisionText = document.getElementById("decision-text");
let option1 = document.getElementById("option1");
let option2 = document.getElementById("option2");

start.addEventListener('click', function() {
    welcome.style.display = 'none';
    decisionMenu.style.display = 'block';
    decisionText.textContent = "Scene 1 Decision Description";
    option1.textContent = "Option 1 Scene 1";
    option2.textContent = "Option 2 Scene 1";
    document.getElementById("scene-image").src = "assets/bedroom.jpeg"
});

let scene = 0;

option1.addEventListener('click', function() {
    scene++;

    if (scene == 1) {
        happiness += 5;
        happinessText.textContent = happiness;
        time -= 5;
        timeText.textContent = time;

        decisionText.textContent = "Scene 2 Decision Description";
        option1.textContent = "Option 1 Scene 2";
        option2.textContent = "Option 2 Scene 2";
        document.getElementById("scene-image").src = "assets/breakfast.jpeg"
    } else if (scene == 2) {
        happiness += 5;
        happinessText.textContent = happiness;
        time -= 5;
        timeText.textContent = time;

        decisionText.textContent = "Scene 3 Decision Description";
        option1.textContent = "Option 1 Scene 3";
        option2.textContent = "Option 2 Scene 3";
        document.getElementById("scene-image").src = "assets/mailbox.jpeg"
    } else if  (scene == 3) {
        happiness += 5;
        happinessText.textContent = happiness;
        time -= 5;
        timeText.textContent = time;

        decisionText.textContent = "Scene 4 Decision Description";
        option1.textContent = "Option 1 Scene 4";
        option2.textContent = "Option 2 Scene 4";
        document.getElementById("scene-image").src = "assets/neighbor.jpeg"
    } else if (scene == 4) {
        happiness += 5;
        happinessText.textContent = happiness;
        time -= 5;
        timeText.textContent = time;

        decisionText.textContent = "Scene 5 Decision Description";
        option1.textContent = "Option 1 Scene 5";
        option2.textContent = "Option 2 Scene 5";
        document.getElementById("scene-image").src = "assets/puddle.jpeg"
    } else if (scene == 5) {
        happiness += 5;
        happinessText.textContent = happiness;
        time -= 5;
        timeText.textContent = time;

        decisionText.textContent = "Scene 6 Decision Description";
        option1.textContent = "Option 1 Scene 6";
        option2.textContent = "Option 2 Scene 6";
        document.getElementById("scene-image").src = "assets/community-board.jpeg"
    } else if (scene == 6) {
        happiness += 5;
        happinessText.textContent = happiness;
        time -= 5;
        timeText.textContent = time;

        decisionText.textContent = "Scene 7 Decision Description";
        option1.textContent = "Option 1 Scene 7";
        option2.textContent = "Option 2 Scene 7";
        document.getElementById("scene-image").src = "assets/mayor-taco.jpeg"
    } else if (scene == 7) {
        happiness += 5;
        happinessText.textContent = happiness;
        time -= 5;
        timeText.textContent = time;

        decisionText.textContent = "Scene 8 Decision Description";
        option1.textContent = "Option 1 Scene 8";
        option2.textContent = "Option 2 Scene 8";
        document.getElementById("scene-image").src = "assets/hopskotch.jpeg"
    } else if (scene == 8) {
        happiness += 5;
        happinessText.textContent = happiness;
        time -= 5;
        timeText.textContent = time;

        decisionText.textContent = "Yay! You made it to the pickleball court with " + time  + " minutes to spare! Along the way you earned " + happiness + " happiness points!";
        option1.style.display = 'none';
        option2.style.display = 'none';
        document.getElementById("scene-image").src = "assets/pandas-in-a-pickle-home.jpeg"
    } 
});

option2.addEventListener('click', function() {
    scene++;

    if (scene == 1) {
        happiness += 5;
        happinessText.textContent = happiness;
        time -= 5;
        timeText.textContent = time;

        decisionText.textContent = "Scene 2 Decision Description";
        option1.textContent = "Option 1 Scene 2";
        option2.textContent = "Option 2 Scene 2";
        document.getElementById("scene-image").src = "assets/breakfast.jpeg"
    } else if (scene == 2) {
        happiness += 5;
        happinessText.textContent = happiness;
        time -= 5;
        timeText.textContent = time;

        decisionText.textContent = "Scene 3 Decision Description";
        option1.textContent = "Option 1 Scene 3";
        option2.textContent = "Option 2 Scene 3";
        document.getElementById("scene-image").src = "assets/mailbox.jpeg"
    } else if  (scene == 3) {
        happiness += 5;
        happinessText.textContent = happiness;
        time -= 5;
        timeText.textContent = time;

        decisionText.textContent = "Scene 4 Decision Description";
        option1.textContent = "Option 1 Scene 4";
        option2.textContent = "Option 2 Scene 4";
        document.getElementById("scene-image").src = "assets/neighbor.jpeg"
    } else if (scene == 4) {
        happiness += 5;
        happinessText.textContent = happiness;
        time -= 5;
        timeText.textContent = time;

        decisionText.textContent = "Scene 5 Decision Description";
        option1.textContent = "Option 1 Scene 5";
        option2.textContent = "Option 2 Scene 5";
        document.getElementById("scene-image").src = "assets/puddle.jpeg"
    } else if (scene == 5) {
        happiness += 5;
        happinessText.textContent = happiness;
        time -= 5;
        timeText.textContent = time;

        decisionText.textContent = "Scene 6 Decision Description";
        option1.textContent = "Option 1 Scene 6";
        option2.textContent = "Option 2 Scene 6";
        document.getElementById("scene-image").src = "assets/community-board.jpeg"
    } else if (scene == 6) {
        happiness += 5;
        happinessText.textContent = happiness;
        time -= 5;
        timeText.textContent = time;

        decisionText.textContent = "Scene 7 Decision Description";
        option1.textContent = "Option 1 Scene 7";
        option2.textContent = "Option 2 Scene 7";
        document.getElementById("scene-image").src = "assets/mayor-taco.jpeg"
    } else if (scene == 7) {
        happiness += 5;
        happinessText.textContent = happiness;
        time -= 5;
        timeText.textContent = time;

        decisionText.textContent = "Scene 8 Decision Description";
        option1.textContent = "Option 1 Scene 8";
        option2.textContent = "Option 2 Scene 8";
        document.getElementById("scene-image").src = "assets/hopskotch.jpeg"
    } else if (scene == 8) {
        happiness += 5;
        happinessText.textContent = happiness;
        time -= 5;
        timeText.textContent = time;

        decisionText.textContent = "Yay! You made it to the pickleball court with " + time  + " minutes to spare! Along the way you earned " + happiness + " happiness points!";
        option1.style.display = 'none';
        option2.style.display = 'none';
        document.getElementById("scene-image").src = "assets/pandas-in-a-pickle-home.jpeg"
    } 
});
