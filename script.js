const myProblem = () => {
    var answ1 = document.getElementById("input1").value;
    if (answ1 == "x+3/x+5") {
        return "Good Job!";
    }  else
        return "x+3/x+5";
};
const myCalc = () => {
    document.getElementById("demo").innerHTML = myProblem();
}
const myProblem2 = () => {
    var answ2 = document.getElementById("input2").value;
    if (answ2 == "x+4/x+2") {
        return "Good Job!";
    }  else
        return "x+4/x+2";
};
const myCalc2 = () => {
    document.getElementById("demo2").innerHTML = myProblem2();
}