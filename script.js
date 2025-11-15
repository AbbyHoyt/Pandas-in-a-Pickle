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
    decisionText.textContent = "Time to get up! Do you want to snooze your alarm?";
    option1.textContent = "Yes! Back to bed!";
    option2.textContent = "Nope! Rise and shine!";
    document.getElementById("scene-image").src = "assets/bedroom.jpeg"
    document.getElementById('audio').play();
});

let scene = 0;

option1.addEventListener('click', function() {
    scene++;

    if (scene == 1) {
        happiness += 10;
        happinessText.textContent = happiness;
        time -= 10;
        timeText.textContent = time;

        decisionText.textContent = "Do you want to eat breakfast before you leave?";
        option1.textContent = "Yes! Breakfast is the most important meal of the day!";
        option2.textContent = "Breakfast can wait - I have a pickleball game to get to!";
        document.getElementById("scene-image").src = "assets/breakfast.jpeg"
    } else if (scene == 2) {
        happiness += 5;
        happinessText.textContent = happiness;
        time -= 10;
        timeText.textContent = time;

        decisionText.textContent = "Should you stop and check the mail?";
        option1.textContent = "Absolutely! I love snail mail.";
        option2.textContent = "No way - I don't want to see any bills or jury summons.";
        document.getElementById("scene-image").src = "assets/mailbox.jpeg"
    } else if  (scene == 3) {
        happiness += 15;
        happinessText.textContent = happiness;
        time -= 5;
        timeText.textContent = time;

        decisionText.textContent = "You got a postcard from your friend traveling the world, how cool! You spot your grouchy neighbor who collects rubber ducks. She looks a little less miserable today, do you take your chances?";
        option1.textContent = "Yes! Maybe I can cheer her up.";
        option2.textContent = "I'm not in the mood to test my luck today.";
        document.getElementById("scene-image").src = "assets/neighbor.jpeg"
    } else if (scene == 4) {
        happiness += 25;
        happinessText.textContent = happiness;
        time -= 5;
        timeText.textContent = time;

        decisionText.textContent = "Did anyone see any pigs flying this morning? You had a nice conversation with your neighbor. Aw, how sweet! A little panda jumping in a puddle. Join them?";
        option1.textContent = "Duh! I love splashing in the rain!";
        option2.textContent = "Puddles aren't for me...";
        document.getElementById("scene-image").src = "assets/puddle.jpeg"
    } else if (scene == 5) {
        happiness -= 5;
        happinessText.textContent = happiness;
        time -= 5;
        timeText.textContent = time;

        decisionText.textContent = "Oh no, jumping in the puddles got your socks wet! Will you check the community bulletin board?";
        option1.textContent = "Yup! I love seeing what's going on in my community.";
        option2.textContent = "No time today!";
        document.getElementById("scene-image").src = "assets/community-board.jpeg"
    } else if (scene == 6) {
        happiness += 15;
        happinessText.textContent = happiness;
        time -= 5;
        timeText.textContent = time;

        decisionText.textContent = "The community bulletin board had lots of good news - including a found cat poster! Hey, look! It’s the mayor! Is now a good time to talk to him about your taco Tuesday initiative?";
        option1.textContent = "Oh yeah! I've got my pitch ready!";
        option2.textContent = "Hmm... probably not.";
        document.getElementById("scene-image").src = "assets/mayor-taco.jpeg"
    } else if (scene == 7) {
        happiness -= 15;
        happinessText.textContent = happiness;
        time -= 10;
        timeText.textContent = time;

        decisionText.textContent = "Unfortunately the mayor didn’t have time to talk. Taco Tuesday will have to wait. A hopscotch! You’re not sure that last time you’ve seen one - skip through the squares?";
        option1.textContent = "Absolutely! A little hopscotch never hurt anyone!";
        option2.textContent = "I'm feeling a bit clumsy today... Don't need a twisted ankle!";
        document.getElementById("scene-image").src = "assets/hopskotch.jpeg"
    } else if (scene == 8) {
        happiness += 10;
        happinessText.textContent = happiness;
        time -= 10;
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
        happiness -= 5;
        happinessText.textContent = happiness;
        time -= 5;
        timeText.textContent = time;

        decisionText.textContent = "Do you want to eat breakfast before you leave?";
        option1.textContent = "Yes! Breakfast is the most important meal of the day!";
        option2.textContent = "Breakfast can wait - I have a pickleball game to get to!";
        document.getElementById("scene-image").src = "assets/breakfast.jpeg"
    } else if (scene == 2) {
        happiness -= 5;
        happinessText.textContent = happiness;
        time -= 5;
        timeText.textContent = time;

        decisionText.textContent = "Should you stop and check the mail?";
        option1.textContent = "Absolutely! I love snail mail.";
        option2.textContent = "No way - I don't want to see any bills or jury summons.";
        document.getElementById("scene-image").src = "assets/mailbox.jpeg"
    } else if  (scene == 3) {
        happiness += 0;
        happinessText.textContent = happiness;
        time -= 5;
        timeText.textContent = time;

        decisionText.textContent = "You spot your grouchy neighbor who collects rubber ducks. She looks a little less miserable today, do you take your chances?";
        option1.textContent = "Yes! Maybe I can cheer her up.";
        option2.textContent = "I'm not in the mood to test my luck today.";
        document.getElementById("scene-image").src = "assets/neighbor.jpeg"
    } else if (scene == 4) {
        happiness += 5;
        happinessText.textContent = happiness;
        time -= 5;
        timeText.textContent = time;

        decisionText.textContent = "Aw, how sweet! A little panda jumping in a puddle. Join them?";
        option1.textContent = "Duh! I love splashing in the rain!";
        option2.textContent = "Puddles aren't for me...";
        document.getElementById("scene-image").src = "assets/puddle.jpeg"
    } else if (scene == 5) {
        happiness += 0;
        happinessText.textContent = happiness;
        time -= 5;
        timeText.textContent = time;

        decisionText.textContent = "Will you check the community bulletin board?";
        option1.textContent = "Yup! I love seeing what's going on in my community.";
        option2.textContent = "No time today!";
        document.getElementById("scene-image").src = "assets/community-board.jpeg"
    } else if (scene == 6) {
        happiness += 0;
        happinessText.textContent = happiness;
        time -= 5;
        timeText.textContent = time;

        decisionText.textContent = "Hey, look! It’s the mayor! Is now a good time to talk to him about your taco Tuesday initiative?";
        option1.textContent = "Oh yeah! I've got my pitch ready!";
        option2.textContent = "Hmm... probably not.";
        document.getElementById("scene-image").src = "assets/mayor-taco.jpeg"
    } else if (scene == 7) {
        happiness += 0;
        happinessText.textContent = happiness;
        time -= 5;
        timeText.textContent = time;

        decisionText.textContent = "A hopscotch! You’re not sure that last time you’ve seen one - skip through the squares?";
        option1.textContent = "Absolutely! A little hopscotch never hurt anyone!";
        option2.textContent = "I'm feeling a bit clumsy today... Don't need a twisted ankle!";
        document.getElementById("scene-image").src = "assets/hopskotch.jpeg"
    } else if (scene == 8) {
        happiness += 0;
        happinessText.textContent = happiness;
        time -= 5;
        timeText.textContent = time;

        decisionText.textContent = "Yay! You made it to the pickleball court with " + time  + " minutes to spare! Along the way you earned " + happiness + " happiness points!";
        option1.style.display = 'none';
        option2.style.display = 'none';
        document.getElementById("scene-image").src = "assets/pandas-in-a-pickle-home.jpeg"
    } 
});
