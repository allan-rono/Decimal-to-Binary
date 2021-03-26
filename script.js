const decimal =document.getElementById("decimal");
const submit = document.getElementById("submit");
const answer = document.getElementById("answer");

function toBinary(){
    let num = Number(decimal.value);
    let binary = [];
    let quotient = num;
    let remainder;

    while (quotient > 0) {
        remainder = (quotient / 2) % 1;
        quotient = (quotient / 2) - ((quotient / 2) % 1);

        if (remainder > 0) { binary.unshift(1) }
        else { binary.unshift(0) }
    }
    answer.innerHTML = binary;
}

submit.addEventListener("click",toBinary);

