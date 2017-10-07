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