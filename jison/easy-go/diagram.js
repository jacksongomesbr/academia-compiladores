function Diagram() {
    this.ponto = [];
}

function ParseError(message, hash) {
    _.extend(this, hash);

    this.name = "ParseError";
    this.message = (message || "");
}

ParseError.prototype = new Error();

Diagram.ParseError = ParseError;

Diagram.parse = function (input) {
    // Create the object to track state and deal with errors
    easy.yy = new Diagram();
    easy.yy.parseError = function (message, hash) {
        throw new ParseError(message, hash);
    };

    // Parse
    var diagram = easy.parse(input);

    // Then clean up the parseError key that a user won't care about
    delete diagram.parseError;
    return diagram;
};

Diagram.prototype.moverPara = function(ponto) {
    console.log('definindo novo ponto atual: ', ponto);
    this.ponto = ponto;
}

Diagram.prototype.marcar = function() {
    console.log('marcando ponto atual: ', this.ponto);
}

Diagram.prototype.Ponto = function(x, y) {
    return [x, y];
}