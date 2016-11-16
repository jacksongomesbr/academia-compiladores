var parser = require('./classy').parser;
var c = parser.parse(`class Chris extends Person {
}

main {
	var string cool;
	printnat(cool);
}`);

console.log(c);