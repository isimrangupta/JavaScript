// attribute(attr) :- to the get attribute value

let div = document.querySelector("div")
console.log(div);
let valueId = div.getAttribute("id")
console.log(valueId);                      

let valueName = div.getAttribute("name")
console.log(valueName);                    


// let para = document.querySelector("p")
// console.log(para.getAttribute("class"));

//___________________________________________________________________

// setAttribute(attr, value) :- to set the attribute value

// question:- <h1 class="heading">I am Heading</h1> 
// const firstHeading = document.querySelector("h1")
// console.log(firstHeading.setAttribute("class", "newHeading"));
// result :- <h1 class="newHeading">I am Heading</h1>


//________________________________________________________________

// node.style :-

let valu = document.querySelector("div")
console.log(valu.style.backgroundColor = "red");
console.log(valu.style.color = "blue");


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// (a) node.append(el) :- add at the end of node (inside)
let newBtn = document.createElement("button")
newBtn.innerText = "Click me!";
console.log(newBtn);

let h3 = document.querySelector("h3")
h3.append(newBtn)                    

//_________________________________________________________________________________

// (b) node.prepend(el) :- add at the start of node (inside)
let paragraph = document.createElement("p")
paragraph.innerHTML = "<p>2346567</p>"
console.log(paragraph);
h3.prepend(paragraph)             


//_________________________________________________________________________________

// (c) node.before(el) :- add before the node (Outside)

let newDiv = document.createElement("div")
newDiv.innerText = "I am a big DIV"
console.log(newDiv);

let p = document.querySelector("p")
p.before(newDiv)

//_________________________________________________________________________________

// (d) node.after(el) :- add after the node (Outside)
p.after(newDiv)


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// node.remove() :- remove the node

let h2 = document.querySelector("h2")
h2.remove();