// "22+23-21*22" => [22,+,23,-21,*,22]

let OPERATORS = {
        "+":(a,b)=> a+b,
        "-":(a,b)=> a-b,
        "x":(a,b)=> a*b,
        "/":(a,b)=> a/b,
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
    if (index <= 0){
        ioSpace.textContent = "0"
        return 0
    }
    let deletedChar = text[index]
    text.splice(index,1)
    ioSpace.textContent = text.join("")
    return deletedChar
}

function getMathExpression(){
    const ioSpace = document.querySelector(".IO-outlet")
    return ioSpace.textContent
}



function addListeners(){
    const inputButtons = document.querySelectorAll(".number-button,.operation-button")
    inputButtons.forEach(button => 
        button.addEventListener("click", ()=>{
            addText(button.dataset.value);
        })
    )
    const deleteButton = document.querySelector(".function-button.delete")
    deleteButton.addEventListener("click",deleteLastTextEntry)
    const clearButton = document.querySelector(".function-button.clear")
    clearButton.addEventListener("click",clearText)
}

addListeners()


//FIXME: the input still can record multiple decimal points
//TODO: the equals to button is not functional
// FIXME:errors around negative values must be solved
// TODO:change your approach from this, this looks messy

