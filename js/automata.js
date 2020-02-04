class AFD {
    constructor(){
        this.num_states = null;
        this.symbols_size = null;

        this.states = [];
        this.symbols = [];
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

    setSymbols(symbols) {
        symbols.forEach(x => this.symbols.push(x));
        this.symbols_size = symbols.length; 
    }

    setInitialState(initial_state) {
        this.initial_state = initial_state;
    }

    setAcceptStates(accept_states) {
        accept_states.forEach(x => this.accept_states.push(x));
    }

    setTransition()  {
        return;
    }
    
    getStatesNumber() {
        return this.num_states;
    }

    getSymbolsNumber() {
        return this.symbols_size;
    }
}

let afd = new AFD();


function drawState(x_pos, y_pos, r, i){
    $('#myCanvas').drawArc({
        strokeStyle: '#000',
        strokeWidth: 3,
        x: x_pos, y: y_pos,
        radius: r
    }).drawText({
        layer: false,
        fillStyle: "#000",
        strokeStyle: "#25a",
        x: x_pos,
        y: y_pos,
        text: "q"+i
    });
}

function drawAcceptState() {
    return;
}

$('#states').change( function() {
    const canvas = document.getElementById('myCanvas');
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);


    $('#logStates').text("El número de estados ha cambiado");
    afd.setStates( parseInt($(this).val() ) );
    const num = afd.getStatesNumber();

    const w = Math.floor( canvas.width / (num + 1) );
    console.log(w);
    for(var i=1; i<=num; i++) {
        drawState(i*w, canvas.height / 2, 30, i-1);
    }
});

function transitionTable() {
    let rows = afd.getStatesNumber();
    let cols = afd.getSymbolsNumber();
    let table_body = '<table border="1">';
    for (var i = 0; i<rows; i++) {
        table_body+='<tr>';

        for ( var j = 0; j<col; j++){
            table_body += '<td>';
            table_body += '<input type="text" id="'+ i + j + '">';
            table_body += '</td>';
        }

        table_body += '</tr>';
    }
    table_body += '</table>';
    $('#tableDiv').html(table_body);
}

$('#symbols').change( function() {
    $('#logSymb').text("El número de símbolos ha cambiado");
    // Save the symbols in an array
    let str = $(this).val();
    let res = str.split(" ");
    afd.setSymbols( res );
});



