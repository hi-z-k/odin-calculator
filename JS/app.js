// "22+23-21*22" => [22,+,23,-21,*,22]


let OPERATORS = {
        "+":(a,b)=> a+b,
        "-":(a,b)=> a-b,
        "x":(a,b)=> a*b,
        "÷":(a,b)=> a/b,
}

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

console.log(mathExpression("-22 + - 2333 - 2122 x -244"))