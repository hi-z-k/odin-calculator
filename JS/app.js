// "22+23-21*22" => [22,+,23,-21,*,22]
let OPERATORS = {
        "+":(a,b)=> a+b,
        "-":(a,b)=> a-b,
        "*":(a,b)=> a*b,
        "/":(a,b)=> a/b,
}

function replaceText(str){
    clearText()
    addText(str)
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
    let text = ioSpace.textContent
    let textArray = text.split("")
    let index = textArray.length-1
    if (index <= 0 || text ==="Invalid"){
        ioSpace.textContent = "0"
        return 0
    }
    let deletedChar = textArray[index]
    textArray.splice(index,1)
    ioSpace.textContent = textArray.join("")
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
    const equalButton = document.querySelector(".button.equals")
    equalButton.addEventListener("click", ()=>{
        let result;
        try{
            result = eval(getMathExpression())
        }
        catch (error){
            result = "Invalid"
        }
        finally{
            replaceText(result)
        }

    })
}

function validMathExpression(expressionArr){
    for (let i = 0; i<expressionArr.length; i++){
        let element = expressionArr[i]
        let typ = typeof element
        console.log(element,typ)
        if (i % 2 === 0){
            if(typ !== 'number') return false
        }
        else
            if (!(element in OPERATORS)) return false
    }
    return true
}

addListeners()
