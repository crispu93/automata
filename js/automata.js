class AFD {
    constructor(){
        this.num_states = null;
        this.language_size = null;

        this.states = [];
        this.language = [];
        this.initial_state = null;
        this.accept_states = [];
        this.transition = [];
    }

    setStates(num_states) {
        for(var i=0; i<num_states; i++) {
            this.states.push("q"+i);
        }
        this.num_states = num_states;
    }

    setLanguage(language) {
        language.forEach(x => this.language.push(x));
        this.language_size = language.length; 
    }

    setInitialState(initial_state) {
        this.initial_state = initial_state;
    }

    setAcceptStates(accept_states) {
        accept_states.forEach(x => this.accept_states.push(x));
    }

    // This is the way we set transition function
    // We set it from the new state
    // The number is determined by the user
    setTransition()  {
        return;
    }
    
    getStates() {
        return this.states;
    }
}

var $myCanvas = $('#myCanvas');
let afd = new AFD();


function drawState(x_pos, y_pos, r){
    $myCanvas.drawArc({
        strokeStyle: '#000',
        strokeWidth: 5,
        x: x_pos, y: y_pos,
        radius: r
    });
}

function drawAcceptState() {
    return;
}

$('#states').change( function() {
    $('#log').text("El número de estados ha cambiado");
});