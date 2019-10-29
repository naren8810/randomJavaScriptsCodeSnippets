var winFuncTimer = setInterval(windowSizeFunc, 3000);
function windowSizeFunc(event){
  var windowWidth = window.innerWidth
  || document.documentElement.clientWidth
  || document.body.clientWidth;

  var windowHeight = document.innerHeight
  || document.documentElement.clientHeight
  || document.body.clientHeight;

  var x = event.clientX;
  var y = event.clientY;
  var coor = "Coordinates: (" + x + "," + y + ")";
  document.getElementById("hw").innerHTML = coor;
  var hw = document.getElementById("hw");
  hw.innerHTML += "Browser Width: " + windowWidth + ", height: " + windowHeight;
  hw.innerHTML += " Screen Width: " + screen.width + ", height: " + screen.height;
  hw.innerHTML += " Available Screen Width: " + screen.availWidth + ", height: " + screen.availHeight;
  hw.innerHTML += " Screen Color & Pixel Depth: " + screen.colorDepth + ", Pixel: " + screen.pixelDepth; ;
}

var myBody = (function(){
        alert(document.body.innerHTML);
})();

var myDocument = (function(){
        alert(document.documentElement.innerHTML);
})();



//wndow.location
var loc  = document.getElementById("location");
loc.innerHTML = "<br>Locations: " + document.location + ", " + location.hostname + ", " + location.pathname + ", " + location.protocol ;

//window.navigator
var nav = document.getElementById("navigator");
nav.innerHTML = "<br> Navigation: " + window.navigator + ", App Name: " + 
window.navigator.appName + ", App CodeName: " + window.navigator.appCodeName +
 ", " + navigator.platform + ", App Version:" + window.navigator.appVersion +
  ", CookieEnabled:" + window.navigator.cookieEnabled + ", " + navigator.language + ", " + navigator.online;



var timeFunc = setInterval(myTimer, 1000);

function myTimer(){
  var d = new Date();
  document.getElementById("time").innerHTML = "<br> Time:" + d.toLocaleString();
}

function welcomealert(){
	alert("Welcome to Fully HTML CSS JS coded Website");
}

function templatealert(){
  alert("New Template Craeted Successfully");
}


function beforePrint(){
	alert("Document is beign Printed");
}
function afterPrint(){
	alert("Document Printing Compvare");
}

function colorChangeOneMe(){
  this.style.color = "blue";
}

(function(){
    document.getElementById("autoFuncId").innerHTML = "I called Myself";
    console.log("Auto Function");

    var btnElemBack = document.createElement("button");
    btnElemBack.setAttribute("id", "btnGoBack")
    var btnText = document.createTextNode("Go BACK");
    btnElemBack.appendChild(btnText);
    document.getElementById("autoFuncId").appendChild(btnElemBack);
    document.getElementById("btnGoBack").addEventListener("click", function(){ window.history.back();});

    var btnElemForward = document.createElement("button");
    btnElemForward.setAttribute("id", "btnGoForward");
    var btnText = document.createTextNode("Go FORWARD");
    btnElemForward.appendChild(btnText);
    document.getElementById("autoFuncId").appendChild(btnElemForward);
    document.getElementById("btnGoForward").addEventListener("click", function(){ window.history.forward();});

  })();

class Myclass{
  constructor(mysid){
    this.myid = mysid;
  }

  get myId(){
    return this.myid;
  }

  set myId(x){
    this.myid = x;
  }

  static hello(){
    return "Hello! Narendra Yadav";
  }
}

function hello2(){
  document.getElementById("jslist3").innerHTML = "Diff<sup>nt</sup> functions & styles";
}

hello3 = () => {
  document.getElementById("jslist3").innerHTML += "Function with Arrow Func =>()";
}

hello = function(){
  document.getElementById("jslist4").innerHTML += this ;
}

window.addEventListener("load",hello);
document.getElementById("btn").addEventListener("click", hello);

myrealsid = new Myclass("Naren8810");
document.getElementById("jslist2").innerHTML = "<b>Your ID:</b>" + myrealsid.myId;
document.getElementById("jslist2").innerHTML +=  " <b>Hello static msg:</b>" + Myclass.hello();  

var fruits,txt;
fruites = ["Mango","Banana","Apple","Watermalon"];

text = "<ul>";
fruites.forEach(myListFun);
text += "</ul>";
document.getElementById("jslist").innerHTML = text;

function myListFun(value){
	text += "<li>" + value + "</li>";
}

var name = "Na,re,nd,ra";
var surname = "Yadav";

var age = 23;
const mydbay = 12121995;

//Array of my Stuff
var myStuff = [];
myStuff = ["laptop","activa","mobile"];


var nameArr = name.split(",");
var nameArr2 = new Array(name.split(","));

var counterObj = {counter: 0};
Object.defineProperty(counterObj, "reset", {
  get: function(){ this.counter = 0; }
});
Object.defineProperty(counterObj, "increament", {
  get: function(){ this.counter++; }
});
Object.defineProperty(counterObj, "decreament", {
  get: function(){ this.counter--; }
});
Object.defineProperty(counterObj, "add", {
  set: function(value){ this.counter += value; }
});
Object.defineProperty(counterObj, "subtract", {
  set: function(value){ this.counter -+ value; }
});

counterObj.reset;
counterObj.add = 5;
counterObj.subtract = 1;
counterObj.increament;
counterObj.decreament;
document.getElementById("counterSpan").innerHTML = counterObj.counter;
//document.getElementById("counterId").innerHTML = counterObj.counter;
function Mydata(name,surname,age){
  this.Firstname = name;
  this.Lastname = surname;
  this.age = age;
}


Mydata.prototype.nationality = "Indian"; //externally adding property into Contructor using Prototype

var myBioData = new Mydata("Narendra","Yadav",24);
myBioData.fullname = function(){
  return this.Firstname + " " + this.Lastname;
}
document.getElementById("demoId").innerHTML = myBioData.nationality + myBioData.fullname();

//Object with Prperty & Value
var my = {
	name: 'Narendra',
	age: 23,
	surname: 'Yadav',
	father: 'Tejasing',
	mother: 'Sunitadevi',
	brother: 'Navin',
	sister: 'Anju',
	fullname: function() {
		return this.name+" "+this.surname;
	},
  get sibling(){
    return this.brother;
  },
  set myage(value){
    this.age = value;
  }
};

my.myage = 24;

var txt = "";
for(var m in my){
  txt += my[m] + "|";
}
document.getElementById("jslist").innerHTML += "Old Object Property:" + txt + "<br>";
Object.defineProperty(my, "type", {
  value: "Admin",
  enumerable: false,
});
document.getElementById("demoId").innerHTML += " ,Adding New Property List of My: "+Object.getOwnPropertyNames(my);
document.getElementById("demoId").innerHTML += " ,Property List of My(Only Enumerable: "+Object.keys(my);

Object.defineProperty(my, "mother", {
  value: "Snita",
  writable: true,
  enumerable: true,
  configurable: true
});

Object.defineProperty(my, "name", {
  get: function(){ return name},
  set: function(value){ name = value.toUpperCase()}
});
my.name = "Narendra";
document.getElementById("jslist").innerHTML += "UpperCase name:" + my.name + " " + my.sibling+ "<br>";

var txt = "";
for (var x in my) {
  txt += my[x] + "|";
}
document.getElementById("jslist").innerHTML += " Changed Property of Object:" + txt + "<br>";
document.getElementById("welcomemsg").innerHTML = my.fullname();

var txt = "";
for(var m in my){
  txt += my[m] + "|";
}
document.getElementById("jslist").innerHTML += "Again calling Object, Result its New Properteis Now:" + txt + "<br>";
my.broterinlaw = 'Rakesh';
my.nephew = 'Youvraj';

console.log(name, surname, age, myStuff, myStuff[1], my, my.name);

var txt = '{ "name":"JsonNarendra", "surname":"JsonYadav", "father":"JsonTejasing"}';
var objTxt = { name:"JsonStringNarendra", surname:"JsonStringYadav", father:"JsonStringTejasing"};
var obj = JSON.parse(txt);
document.getElementById("jslist2").innerHTML += " JSON DATA:" + obj.name + " " + obj.father;
var jsonstring = JSON.stringify(objTxt);
document.getElementById("jslist2").innerHTML += " JSON StringDATA:" + jsonstring; 

for (var i=0;i<=nameArr.length;i++) {
	window.document.write(nameArr[i]);
}
document.write(nameArr2);

var numberToDate = new Date('12/12/1995');
document.write(numberToDate);
var numberToDateValue = new Number("numberToDate");
document.write(numberToDateValue);

var funcName = function(a,b){ return a*b };
var funcResult = funcName(3,4);
document.getElementById("demoId").innerHTML += " funcResult: "+funcResult;
document.getElementById("demoId").innerHTML += " funcResult2: "+funcName(3,8);
function showTemplate(){
	var temp = document.getElementsByTagName("template")[0];
	var clon = temp.content.cloneNode(true);
	document.body.appendChild(clon);
	//window.print();
}

function hidediv2(){
	document.getElementById("showtempdev2").style.display = 'block';
}

function hidediv3(){
	
	document.getElementById("showtempdev3").style.visibility = 'visible';
}

//aaadocument.getElementByTagName("template").style.backgroundColor = 'yellow';


function welcomemsgextend(){
	document.getElementById("welcomemsg").innerHTML = "Have A Nice Day";
}

function welcomemsgshrink(){
	document.getElementById("welcomemsg").innerHTML = "Narendra Yadav";
}

function formValidate(){
  var x = document.forms["mySearchForm"]["search"].value;
  if (x == "") {
    alert("Searhc Filed must be Filled");
    return false;
  }
  if (!isNaN(x)) {
    alert("Should Not be Number only String");
  }
}

function myInputFunction(){
  var inpObj = document.getElementById("inputNumId");
  if (!inpObj.checkValidity()) {
    document.getElementById("inpDemo").innerHTML = inpObj.validationMessage;
  }else{
    document.getElementById("inpDemo").innerHTML = "Input Ok!";
  }

  if (document.getElementById("inputNumId").validity.rangeOverflow) {
      document.getElementById("inpDemo").innerHTML = "Value To large";
    }
}

var addCounter = (function(){
    var counterX = 0;
    return function() { counterX += 1; return counterX;}
  })(); 


function myCounterFunc(){
  document.getElementById("counterXSpan").innerHTML = addCounter();
}


//Node accessing nodeValue of DOM in JS
document.getElementById("nodeInJsP1").innerHTML += document.getElementById("nodeInJsDiv1").innerHTML;

document.getElementById("nodeInJsP2").innerHTML += document.getElementById("nodeInJsDiv2").firstChild.nodeValue;

document.getElementById("nodeInJsP3").innerHTML += document.getElementById("nodeInJsDiv3").childNodes[0].nodeValue;

//Accesing nodeName & nodeValue & nodeTYpe of DOM Navigation in JS
document.getElementById("nodeInJsP1").innerHTML += document.getElementById("nodeInJsP1").nodeName;
document.getElementById("nodeInJsP1").innerHTML += document.getElementById("nodeInJsDiv1").nodeName;

document.getElementById("nodeInJsP1").innerHTML += document.getElementById("nodeInJsP1").nodeValue; //nodeValue of element is Null
document.getElementById("nodeInJsP1").innerHTML += document.getElementById("nodeInJsP1").attributeValue;
document.getElementById("nodeInJsP1").innerHTML += document.getElementById("nodeInJsP1").nodeType;

//Addind/Creating Element in DOM at theEnd
var newPAppendAtEnd1 = document.createElement("p"); //creates new P element to add in div1
var newTextNode1 = document.createTextNode("This is New Text Added"); //creates new text node element to add in P
newPAppendAtEnd1.appendChild(newTextNode1); //appending the textnode into p element
var elementDiv1 = document.getElementById("nodeInJsDiv1"); //getting div element & id
elementDiv1.appendChild(newPAppendAtEnd1); //finally appendig the p element in div element


//Addind/Creating Element in DOM at theStart
var newPInsertBefore1 = document.createElement("p"); //creates new P element to be Inserted
var newTextNode2 = document.createTextNode("This is text Inserted Before"); //creates Text to be inserted in P
newPInsertBefore1.appendChild(newTextNode2); //Adds text to P
var elementDiv2 = document.getElementById("nodeInJsDiv1"); //gets main div Id to append P
var chilElement = document.getElementById("nodeInJsP1"); // getss elementID, where new P will be inserted
elementDiv2.insertBefore(newPInsertBefore1, chilElement); //Inserts new element before Child Element

//Replacing DOM elements in
var parentElement = document.getElementById("nodeInJsDiv2");
var childElement = document.getElementById("nodeInJsP2");
var newReplaceElement = document.createElement("p");
var newTextReplace = document.createTextNode("This Text is replaced");
newReplaceElement.appendChild(newTextReplace);
parentElement.replaceChild(newReplaceElement, childElement); //replace new text with old text of child element



//Remove element
//var element = document.getElementById("nodeInJsP3");
//element.remove();

//Here is a common workaround: Find the child you want to remove, and use its parentNode property to find the parent:
//var childElement = document.getElementById("nodeInJsP2");
//childElement.parentNode.removeChild(childElement);

//getElementByTagName is Collection of data An HTMLCollection object is an array-like list (collection) of HTML elements.
var myPTagCollection = document.getElementsByTagName("p");
var myDivTagCollection = document.getElementsByTagName("div");
var myFormTagCollection = document.getElementsByTagName("form");
document.getElementById("nodeInJsP3P1").innerHTML = "The innerHTML of the second paragraph is: " + 
myPTagCollection[1].innerHTML;
//finding total numbers of Tags using Collection.length
document.getElementById("nodeInJsP3P1").innerHTML += " Total P tags are: " + myPTagCollection.length;
document.getElementById("nodeInJsP3P1").innerHTML += " Total Div tags are: " + myDivTagCollection.length;
document.getElementById("nodeInJsP3P1").innerHTML += " Total Form tags are: " + myFormTagCollection.length;

//aternate to above: document.getElementById("nodeInJsP3P1").innerHTML = document.querySelectorAll("p");

//auto function to chagne all P tag color
var changeColorPTag = (function(){
        var myPTagCollection = document.getElementsByTagName("p");
        var i;
        for(i=0;i<myPTagCollection.length;i++){
          myPTagCollection[i].style.fontVariant = 'small-caps';
          //myPTagCollection[i].style.color = 'blue';
        }
})();


/*
function drag(ev){
	ev.dragTransfer.setData("Text", ev.target.id);
}

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("Text", ev.target.id);
}

function drop(ev) {
  var data = ev.dataTransfer.getData("Text");
  ev.target.appendChild(document.getElementById(data));
  ev.preventDefault();
} */


/* Events fired on the drag target */

document.addEventListener("dragstart", function(event) {
  // The dataTransfer.setData() method sets the data type and the value of the dragged data
  event.dataTransfer.setData("Text", event.target.id);
  
  // Output some text when starting to drag the p element
  document.getElementById("demo").innerHTML = "Started to drag the p element.";
  
  // Change the opacity of the draggable element
  event.target.style.opacity = "0.4";
});

// While dragging the p element, change the color of the output text
document.addEventListener("drag", function(event) {
  document.getElementById("demo").style.color = "red";
});

// Output some text when finished dragging the p element and reset the opacity
document.addEventListener("dragend", function(event) {
  document.getElementById("demo").innerHTML = "Finished dragging the p element.";
  event.target.style.opacity = "1";
});

/* Events fired on the drop target */

// When the draggable p element enters the droptarget, change the DIVS's border style
document.addEventListener("dragenter", function(event) {
  if ( event.target.className == "droptarget" ) {
    event.target.style.border = "3px dotted red";
  }
});

// By default, data/elements cannot be dropped in other elements. To allow a drop, we must prevent the default handling of the element
document.addEventListener("dragover", function(event) {
  event.preventDefault();
});

// When the draggable p element leaves the droptarget, reset the DIVS's border style
document.addEventListener("dragleave", function(event) {
  if ( event.target.className == "droptarget" ) {
    event.target.style.border = "";
  }
});

/* On drop - Prevent the browser default handling of the data (default is open as link on drop)
   Reset the color of the output text and DIV's border color
   Get the dragged data with the dataTransfer.getData() method
   The dragged data is the id of the dragged element ("drag1")
   Append the dragged element into the drop element
*/
document.addEventListener("drop", function(event) {
  event.preventDefault();
  if ( event.target.className == "droptarget" ) {
    document.getElementById("demo").style.color = "";
    event.target.style.border = "";
    var data = event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data));
  }
});

function replaceText(){
	var str = document.getElementById("intromsg").innerHTML;
	var txt = str.replace("this","My");
	document.getElementById("intromsg").innerHTML = txt;
}

//coloring the floating div
var c = document.getElementById("mycanvas");
var ctx = c.getContext("2d");
ctx.fillStyle = "#FF0000";
ctx.fillRect(20, 20, 150, 100);



//AJAX
function showHint(str) {
  var xhttp;
  if (str.length == 0) { 
    document.getElementById("txtHint").innerHTML = "";
    return;
  }
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("txtHint").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "gethint.php?q="+str, true);
  xhttp.send();   
}