let mainContainer = document.querySelector("#display-container")
console.log(mainContainer)
let calcForm = htmlBuilder.createElementWithText("form")
let calcField = htmlBuilder.createElementWithText("fieldset")
let calcContainer = htmlBuilder.createElementWithText("div","Calculator","inputs")



let inputContainer = htmlBuilder.createElementWithText("div",undefined,undefined,"inputContainer")
let inputLabel1 = htmlBuilder.createElementWithText("span","First Input",undefined,"Labels")
let input1 = htmlBuilder.createElementWithText("input",undefined,"num1",)
let inputLabel2 = htmlBuilder.createElementWithText("span","Second Input", undefined,"Labels")
let input2 = htmlBuilder.createElementWithText("input",undefined,"num2")


let buttonContainer = htmlBuilder.createElementWithText("div","","math--functions")
let mathLabel = htmlBuilder.createElementWithText("span","Perform Functions",)
let add = htmlBuilder.createElementWithText("button","+","add--button","add")
let subtract = htmlBuilder.createElementWithText("button","-", "subtract--button","subtract")
let multiply = htmlBuilder.createElementWithText("button","x","multi--button", "multiply")
let divide = htmlBuilder.createElementWithText("button","/","divide--button","divide")

let answerDiv = htmlBuilder.createElementWithText("div","input")
let answerLabel = htmlBuilder.createElementWithText("span","Answer",undefined,"labels")
let input3 = htmlBuilder.createElementWithText("input",undefined,"answer",undefined,"")
input3.type = Text



mainContainer.appendChild(calcForm)
calcForm.appendChild(calcField)
calcField.appendChild(calcContainer)
calcContainer.appendChild(inputContainer)
inputContainer.appendChild(inputLabel1)
inputContainer.appendChild(input1)
inputContainer.appendChild(inputLabel2)
inputContainer.appendChild(input2)
calcContainer.appendChild(buttonContainer)
buttonContainer.appendChild(mathLabel)
buttonContainer.appendChild(add)
buttonContainer.appendChild(subtract)
buttonContainer.appendChild(multiply)
buttonContainer.appendChild(divide)
calcField.appendChild(answerDiv)
answerDiv.appendChild(answerLabel)
answerDiv.appendChild(input3)





{
    
    
     
    /* <fieldset>

<div id="inputs">
    <span class="labels">First Input</span><br>
    <input id="num1" type="text" size="13"><br><br>

    <span class="labels">Second Input</span><br>
    <input id="num2" type="text" size="13"><br><br>
</div>

<div id="mathFunctions">
    <span>Perform Function</span><br>
    <button id="btn-div" type="button">/</button>&nbsp;&nbsp;
    <button id="btn-multi" type="button">x</button>&nbsp;&nbsp;
    <button id="btn-sub" type="button">-</button>&nbsp;&nbsp;
    <button id="btn-add" type="button">+</button><br><br>
</div>

<div id="inputs">
    <span class="labels">Answer</span><br>
    <input id="answer" type="text" size="13" value=""><br><br>						
</div>

</fieldset> */}


    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
   








