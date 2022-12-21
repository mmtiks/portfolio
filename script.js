var project = document.getElementById("projecttext");
var description = document.getElementById("description");
var info = document.getElementById("info");
var counter =  document.getElementById("counter");
var githublink = document.getElementById("githublink");
var image = document.getElementById("image");
var projects = ['ESSAY GRADER', 'RENTAL SYSTEM', 'MEMORY MANAGEGEMENT', 'REGISTER & LOGIN', "BONUS CALCULATOR", "NIGHTTIME CALCULATOR", "SALE SYSTEM"]
var githubLinks = ["https://github.com/mmtiks/DSProject_2022", "github.com", "https://github.com/mmtiks/MemoryManagement", "https://github.com/mmtiks/bigeye-login", "https://github.com/mmtiks/nighttime-calculator", "https://github.com/mmtiks/naiiviBoonused", "github.com"];
var descriptions = ["NEURAL NETWORK THAT GRADES ENGLISH ESSAYS ON COHESION, SYNTAX, GRAMMAR, VOCABULARY, PHRASEOLOGY AND CONVENTIONS", "... FOR TARTU UNIVERSITY DELTA CENTRE TECHNICAL INVENTORY. FULL PROJECT FROM HARDWARE TO DOCKER FILES TO BE DEPLOYED ON THE UNIVERSITY'S SERVERS", "Simulator for visualizing one-dimensional indexed file system.", "REGISTER AND LOGIN PAGE STORING HASHED PASSWORDS AND USING PREPARED STATEMENTS", "CALCULATES BONUSES EARNED DURING THE MONTH FOR EACH WORKER FROM AN EXCEL SHEET WITH SCHEDULE AND INCOME", "PROGRAM CALCULATING THE DURATION OF NIGHTTIME WITH APIS BASED ON SELECTED LOCATION ON MAP AND DATE", "SALES SYSTEM SOFTWARE FOR CASHIER AND WAREHOUSE TASKS"]
var technologies = ["Python, PyTorch, Pandas", "Java, Spring, React, MySQL, Docker", "TypeScript, HTML, CSS", "PHP, Javascript, MySQL", "Java, Excel", "Javascript, Leaflet, HTML", "Java, JavaFX, HSQLDB"]
var images = [ "essay.png", "rental.png","memory.png","php.png","bonusimage.png", "night.png","salesystem.png"]
let index = 0;
project.innerHTML = projects[index];
description.innerHTML = descriptions[index];
info.innerHTML = technologies[index];
githublink.href = githubLinks[index];
counter.innerHTML = index +1 + ".";
image.src = images[index];


function back(){
    index++;
    if(index == projects.length) index = 0  ;
    project.innerHTML = projects[index];
    description.innerHTML = descriptions[index];
    info.innerHTML = technologies[index];
    githublink.href = githubLinks[index];
    image.src = images[index];
    counter.innerHTML = index +1 + ".";
}

function forward(){
    index--;
    if(index == -1) index = projects.length - 1;
    project.innerHTML = projects[index];
    description.innerHTML = descriptions[index];
    info.innerHTML = technologies[index];
    githublink.href = githubLinks[index];
    image.src = images[index];
    counter.innerHTML = index +1+ ".";

}