var parser = require('./easy').parser;
var c = parser.parse('mover para (10,10). marque aqui. marque aqui. mover para (100, 100). \n marque aqui.');
console.log('\n\nAST do parser:\n\n ', JSON.stringify(c, null, 4)); 
console.log('\n\nSentencas na AST: \n');
for(var i = 0; i < c.sentencas.length; i++) {
    var s = c.sentencas[i];
    console.log('* sentenca ' + i + ' [' + s.node + '] => ' + s.name);
}