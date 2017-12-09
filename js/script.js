function init() {
    var d = document.getElementById("eventTestOutput");
    d.innerHTML = "Loaded Page!!";
    init0();
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
function objectTest(){
    var Person = new Object();
    Person.race = 'Hispanic';
    Person.name = 'Jared';
    Person.desireForaGoodGradeInCIT261 = 999;
    Person.greet = function() {
        var d = document.getElementById("object");
        d.innerHTML = "Hello, my name is " + this.name +
            ". I am " + this.race + ". I have a " +
            this.desireForaGoodGradeInCIT261.toString() + 
            " desire to do well in this class.";
    }
    Person.greet();
}
function Person(first, last, gender) {
    this.name = {
        first,
        last
    };
    this.gender = gender;
};
Person.prototype.greeting = function() {
    var d = document.getElementById("object2");
    d.innerHTML += "Hi!<br>";
};
Person.prototype.introduce = function() {
    var d = document.getElementById("object2");
    d.innerHTML += "I'm " + this.name.first + " "
                  + this.name.last + ".<br>";
};
function Professor(first, last, gender, course) {
    Person.call(this, first, last, gender);
    this.course = course;
}
Professor.prototype = Object.create(Person.prototype);
Professor.prototype.constructor = Professor;
Professor.prototype.introduce = function() {
    var d = document.getElementById("object2");
    var title = "";
    switch (this.gender) {
        case "M":
            title = "Bro.";
            break;
        case "F":
            title = "Sis.";
            break;
        default:
            break;
    }
    d.innerHTML += "I'm " + title + " "
                  + this.name.last + ".";
}
function objectTest2(){
    // Base Class
    var me = new Person("Jared", "Pinargote", "M");
    // Inherited Class
    var prof = new Professor("Johan", "Baer", "M");
    // Base Methods
    me.greeting();
    me.introduce();
    // Inherited Method
    prof.greeting();
    // Modified Inherited Method
    prof.introduce();
}

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
            document.getElementById("requestTestResult").innerHTML = "Loading";
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
function domManipTest() {
    // Creates the 'paragraph' element
    var paragaph = document.createElement("p");

    var text = document.createTextNode("This is a text node that will become a child in the paragraph element. Clicking the button again will add this paragraph again, thus duplicating the text.");

    // Adds the text into the paragraph element
    paragaph.appendChild(text);

    // Adds the paragraph to the div for the user to see
    document.getElementById("domManip").appendChild(paragaph);
}

function domManipTest2() {
    // Set the div which the paragraphs reside in
    // as the target to which we remove a child from
    var target = document.getElementById("domManip");
    
    // Remove the first child from the div
    document.getElementById("domManip").removeChild(target.childNodes[0]);
}

function domManipTest3() {
    // Creates the 'paragraph' element
    var paragraph = document.createElement("p");

    var text = document.createTextNode("THIS WILL BE INSERTED BEFORE THE FIRST PARAGRAPH");

    paragraph.appendChild(text);

    // Set the div which the paragraphs reside in
    // as the target to which we insert
    var target = document.getElementById("domManip");
    
    // Insert before the first child
    document.getElementById("domManip").insertBefore(paragraph, target.childNodes[0]);
}

// Manipulating CSS Class Properties Using JavaScript
function jsCSSColor() {
    // Create random HSL color
    var cssHSL = randomHSL();

    // Set text color to random color
    document.getElementById("jsCSS").style.color = cssHSL;
}

function jsCSSSize() {
    // Set text size to random size
    document.getElementById("jsCSS").style.fontSize = "" 
        + 300 * Math.random() + "%";
}

function randomHSL() {
    return "hsl(" + 360 * Math.random() + ',' +
    (70 + 30 * Math.random()) + '%,' + 
    (10 + 80 * Math.random()) + '%)';
}

// Creating CSS3 Transitions and Animations in CSS and triggering them with JavaScript
function cssTransitionTest(){
    document.getElementById("cssTransAni").classList.add("grow");
}

function cssAnimationTest(){
    document.getElementById("cssTransAni").classList.add("move");
}

function cssClear(){
    document.getElementById("cssTransAni").classList.remove("grow");
    document.getElementById("cssTransAni").classList.remove("move");
}

// Standard JavaScript Events Including those for Mobile Devices ( Ex. onTouchBegin, onLoad, etc.) and Animation and Transition Events
function eventTest() {
    var output = document.getElementById('eventTestOutput');
    var output2 = document.getElementById('eventTestOutput2');
    output.innerHTML = "<br><button class='btn' id='eventButton'>Click Me!</button><br>";
    // output2.innerHTML = "<br><button class='btn' id='eventButton2'>Touch Me!</button><br>";
    var btn = document.getElementById('eventButton');
    btn.onclick = function() {
        var rndCol = 'rgb(0,0,255)';
        btn.style.backgroundColor = rndCol;
        btn.innerHTML = "Clicked!";
    }
    btn.onmouseover = function() {
        var rndCol = 'rgb(255,255,255)';
        btn.style.backgroundColor = rndCol;
        btn.innerHTML = "Mouse over!<br>";
    }
    btn.onmouseout = function() {
        var rndCol = 'rgb(0,255,0)';
        btn.style.backgroundColor = rndCol;
        btn.innerHTML = "Mouse out!<br>";
    }
    output2.ontouchstart = function () {
        var rndCol = 'rgb(255,255,0)';
        output2.style.backgroundColor = rndCol;
        output2.innerHTML = "Touch Started!<br>";
    }
    output2.ontouchend = function () {
        var rndCol = 'rgb(0,255,255)';
        output2.style.backgroundColor = rndCol;
        output2.innerHTML = "Touch Ended!<br>";
    }
}

// HTML5 Tags - Video, Audio, and Canvas

// Designing, Defining, and Triggering CSS3 Transitions without Custom Libraries (Thought Library)

// Designing, Defining, and Triggering CSS3 Transforms without Custom Libraries (Thought Library)

// Designing, Defining, and Triggering CSS3 Animations without Custom Libraries (Thought Library)