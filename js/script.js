function init() {
    var d = document.getElementById("eventTestOutput");
    d.innerHTML = "Loaded Page!!";
}

//  Loops, Conditional Statements, Functions, Variables, Parameters, Arrays, Associative Arrays
function countUp() {
    var d = document.getElementById("1to100");
    d.innerHTML = "";
    for(var i = 1; i <= 100; i++){
        d.innerHTML += i + ", ";
    }
}
function countUp2() {
    var d = document.getElementById("1to100even");
    d.innerHTML = "";
    for(var i = 1; i <= 100; i++){
        if( i % 2 != 0){
            d.innerHTML += i + ", ";
        } else {
            d.innerHTML += "<em>" + i + "</em>, ";
        }
    }
}

// Object Creation Functions, Inheritance, Properties, Methods, Instantiation

// JSON Parse, Stringify
function jsonParseTest() {
    var Person = JSON.parse('{"race":"Hispanic","name":"Jared","desireForaGoodGradeInCIT261": 999}');
    var d = document.getElementById("jsonParse");
    d.innerHTML = Person.name + " says Hi!"; 
}
function jsonStringTest() {
    var Person = JSON.parse('{"race":"Hispanic","name":"Jared","desireForaGoodGradeInCIT261": 999}');
    var d = document.getElementById("jsonString");
    d.innerHTML = Person.name + " says Hi!<br>";
    var jsonString = JSON.stringify(Person);
    d.innerHTML += jsonString;
}

// Using XMLHTTPRequest to Consume a JSON Web Service
function requestTest() {
    console.log("Request Test Running...");
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var test = JSON.parse(xhttp.responseText);
            console.log(test);
            document.getElementById("requestTestResult").innerHTML = test.body;
        } else {
            document.getElementById("requestTestResult").innerHTML = "Error in request";
        }
    };
    xhttp.open("GET", 'https://jsonplaceholder.typicode.com/posts/1', true);
    xhttp.send();
}

// Local Storage API, Storing and Retrieving Simple Data, Arrays, Associative Arrays, and Objects
function localTest() {
    console.log("Local Storage Test Running...");
    // Storing in Local Storage
    localStorage.simpleData = "Hello world! ";
    localStorage.setItem("array", JSON.stringify(["blue", "orange", "red"]));
    var aa = {
        "love" : "chocolate",
        "like" : "to dance",
        "hate" : "loosing"
    };
    localStorage.setItem("associative", JSON.stringify(aa));
    var Person = new Object();
    Person.name = "Jared";
    Person.age = 23;
    localStorage.setItem("obj", JSON.stringify(Person));

    // Retriving from Local Storage
    var output = document.getElementById("localOutput");
    var savedPerson = JSON.parse(localStorage.getItem("obj"));
    output.innerHTML = localStorage.simpleData
        + "My name is " + savedPerson.name + ". "
        + "I am " + savedPerson.age + " years old. "
        + "My favorite colors are:<ul>";
    var savedArray = JSON.parse(localStorage.getItem("array"));
    savedArray.forEach(function(color) {
        output.innerHTML += "<li>"+color+"</li>";
    }, this);
    output.innerHTML += "</ul><br>";
    var savedAA = JSON.parse(localStorage.getItem("associative"));
    console.log(savedAA);
    Object.keys(savedAA).forEach(function(key) {
        output.innerHTML += "I " + key +" "+ savedAA[key] + ". ";
    }, this);
}

// DOM Manipulation Using createElement, appendChild, insertBefore, removeChild, etc.

// Manipulating CSS Class Properties Using JavaScript

// Standard JavaScript Events Including those for Mobile Devices ( Ex. onTouchBegin, onLoad, etc.) and Animation and Transition Events
function eventTest() {
    var output = document.getElementById('eventTestOutput');
    var output2 = document.getElementById('eventTestOutput2');
    output.innerHTML = "<br><button class='btn' id='eventButton'>Click Me!</button><br>";
    output2.innerHTML = "<br><button class='btn' id='eventButton2'>Touch Me!</button><br>";
    var btn = document.getElementById('eventButton');
    var btn2 = document.getElementById('eventButton2');
    btn.onclick = function() {
        var rndCol = 'rgb(0,0,255)';
        output.style.backgroundColor = rndCol;
        output.innerHTML += "Clicked!<br>";
    }
    output2.onmouseover = function() {
        var rndCol = 'rgb(255,255,255)';
        output2.style.backgroundColor = rndCol;
        output2.innerHTML += "Mouse over!<br>";
    }
    output2.onmouseout = function() {
        var rndCol = 'rgb(0,255,0)';
        output2.style.backgroundColor = rndCol;
        output2.innerHTML += "Mouse out!<br>";
    }
    btn2.ontouchstart = function () {
        var rndCol = 'rgb(255,255,0)';
        output2.style.backgroundColor = rndCol;
        output2.innerHTML += "Touch Started!<br>";
    }
    btn2.ontouchend = function () {
        var rndCol = 'rgb(0,255,255)';
        output2.style.backgroundColor = rndCol;
        output2.innerHTML += "Touch Ended!<br>";
    }
    var move = document.getElementById("eventTestOutput3");

    move.style.animation = "move 4s 2";

    move.animationstart = function() {
        move.innerHTML = "animationstart event occured - The animation has started";
        move.style.background = "pink";
    }
    move.animationiteration = function() {
        move.style.background = "lightblue";
    }
    move.animationend = function() {
        move.style.background = "lightgray";
    }
}