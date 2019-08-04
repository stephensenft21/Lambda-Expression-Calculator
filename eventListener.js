



let Calculate = { 
    Multiply:(a,b) => {
        let answer = 0
        answer = Number(a) * Number(b)
        return answer;
    },
    Add:(a,b) => {
        let answer = 0
        answer = Number(a) + Number(b)
        return answer
    },
    Subtract:(a,b) => {
        let answer = 0
        answer = Number(a) - Number(b)
        return answer
    },
    Divide:(a,b) =>{
        let answer = 0
        answer = Number(a)/Number(b)
        return answer
    },
    
    performOperation:(operation) => {
    operation()
    document.getElementById("answer").value = answer.toFixed(2);
    }
}



document.getElementById("add--button").addEventListener("click",() => {
    Calculate.Add()
    Calculate.performOperation()
})
document.getElementById("subtract--button").addEventListener("click",Calculate.Subtract)
document.getElementById("multi--button").addEventListener("click",Calculate.Multiply)
document.getElementById("divide--button").addEventListener("click",Calculate.Divide)
