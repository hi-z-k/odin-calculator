// "22+23-21*22" => [22,+,23,-21,*,22]


let OPERATORS = {
        "+":(a,b)=> a+b,
        "-":(a,b)=> a-b,
        "x":(a,b)=> a*b,
        "÷":(a,b)=> a/b,
}

let INPUT_KEYS = {
    "zero": 0,
    "one": 1,
    "two": 2,
    "three": 3,
    "four": 4,
    "five": 5,
    "six": 6,
    "seven": 7,
    "eight": 8,
    "nine": 9,
    "decimal":".",
    "addition": "+",
    "subtraction": "-",
    "multiplication": "*",
    "division": "/"
}

function addText(str){
    const ioSpace = document.querySelector(".IO-outlet")
    let currentText = ioSpace.textContent 
    if (currentText !== "0") ioSpace.textContent += str
    else ioSpace.textContent = str
}
function clearText(){
    const ioSpace = document.querySelector(".IO-outlet")
    ioSpace.textContent = "0"
}
function deleteLastTextEntry(){
    const ioSpace = document.querySelector(".IO-outlet")
    let text = ioSpace.textContent.split("")
    let index = text.length-1
    let deletedChar = text[index]
    text.splice(index,1)
    ioSpace.textContent = text.join("")
    return deletedChar
}




const numberButtons = document.querySelectorAll(".number-button,.operation-button")
//FIXME: the input still can record multiple decimal points
//TODO: the equals to button is not functional
numberButtons.forEach(button => 
    button.addEventListener("click", ()=>{
        addText(button.textContent);
    })
)

const deleteButton = document.querySelector(".function-button.delete")
deleteButton.addEventListener("click",deleteLastTextEntry)

const clearButton = document.querySelector(".function-button.clear")
clearButton.addEventListener("click",clearText)



function ASCII(char){
    if (char.length != 1) return
    return char.charCodeAt(0)
}

function isDigit(char){
    if (char.length != 1) return
    let ascii = char.charCodeAt(0)
    return (ascii >= 48 && ascii <= 57) || ascii == 46
}



function isOperator(char){
    if (char.length != 1) return
    return char in OPERATORS
}
function isNegative(char,num){
    return num === "" && char === "-"
}

function mathExpression(string){
    let expression = []
    let num = ""
    for(let letter of string){
        if (isDigit(letter) || isNegative(letter,num)){
            num += letter
            continue
        }
        if (num) expression.push(+num)
        if (isOperator(letter)){            
            expression.push(letter)
        }
        num = ""
    }
    if (num) expression.push(+num)
    return expression
}


// FIXME:errors around negative values must be solved
// TODO:change your approach from this, this looks messy

