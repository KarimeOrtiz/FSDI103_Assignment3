function calculate(){
    let number1 = Number(prompt("Enter the number 1"));
    let number2 = Number(prompt("Enter the number 2"));
    document.getElementById("numbers").innerHTML = `<p>Number one: ${number1}</p> <p>Number two: ${number2}</p>`;
    display(number1,number2);
}

function display(n1, n2){
    document.getElementById("results").
    innerHTML = `<p>Addition (➕): ${n1+n2}</p> 
                 <p>Subtraction (➖): ${n1-n2}</p> 
                 <p>Multiplication (✖️): ${n1*n2}</p> 
                 <p>Division (➗): ${n1/n2}</p>`;
}