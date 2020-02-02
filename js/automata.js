class Automata {
    constructor(numStates, language, initState, transFunc, acceptStates){
        this.numStates = numStates;
        this.language = language;
        this.initState = initState;
        this.transFunc = transFunc;
        this.acceptStates = acceptStates;
    }
}

function new_af(){
    return;
}

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}