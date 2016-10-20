function Diagram(output) {
    this.ponto = [];
    this.output = output;
}

function ParseError(message, hash) {
    _.extend(this, hash);

    this.name = "ParseError";
    this.message = (message || "");
}

ParseError.prototype = new Error();

Diagram.ParseError = ParseError;

Diagram.parse = function (input, output) {
    // Create the object to track state and deal with errors
    easy.yy = new Diagram(output);
    easy.yy.parseError = function (message, hash) {
        $(easy.yy.output).append('<li>' + message + '</li>');
        throw new ParseError(message, hash);
    };

    // Parse
    var diagram = easy.parse(input);

    // Then clean up the parseError key that a user won't care about
    delete diagram.parseError;
    return diagram;
};

Diagram.prototype.moverPara = function(ponto) {
    $(this.output).append('<li>definindo novo ponto atual: ' +  ponto + '</li>');
    this.ponto = ponto;
}

Diagram.prototype.marcar = function() {
    $(this.output).append('<li>marcando ponto atual: ' +  this.ponto + '</li>');
}

Diagram.prototype.Ponto = function(x, y) {
    return [x, y];
}