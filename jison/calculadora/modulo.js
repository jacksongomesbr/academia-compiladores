var parser = require("./calculadora").parser;

function exec (input) {
    return parser.parse(input);
}

var vinte = exec("4 * 5");