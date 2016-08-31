/* parser generated by jison 0.4.17 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var mundo = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,11],$V1=[1,12],$V2=[1,13],$V3=[1,14],$V4=[1,15],$V5=[5,44],$V6=[5,20,28,34,39,40,42,44],$V7=[1,29],$V8=[1,30],$V9=[1,31],$Va=[1,32],$Vb=[1,33],$Vc=[1,37],$Vd=[1,38],$Ve=[1,39],$Vf=[1,40],$Vg=[1,41],$Vh=[1,42],$Vi=[1,43],$Vj=[7,8,9,10,11,12,13,15],$Vk=[7,8,15],$Vl=[7,8,9,10,15];
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"mundo":3,"instrucoes":4,"EOF":5,"expressao":6,"PLUS":7,"MINUS":8,"MULT":9,"DIV":10,"POW":11,"FACT":12,"PORCENT":13,"LPAREN":14,"RPAREN":15,"NUMBER":16,"E":17,"PI":18,"instrucao":19,"SEMICOLON":20,"tipo_pessoa":21,"tipo_curso":22,"tipo_universidade":23,"q_universidade_cursos":24,"info":25,"imprimir_resumo":26,"condicional_simples":27,"NOME":28,"V_SER":29,"N_PESSOA":30,"N_UNIVERSIDADE":31,"N_CURSO":32,"P_DE":33,"P_QUAIS":34,"V_SAO":35,"A_OS":36,"N_CURSOS":37,"INTERROGACAO":38,"INFO":39,"V_IMPRIMIR":40,"N_RESUMO":41,"SE":42,"ENTAO":43,"FIM_SE":44,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",7:"PLUS",8:"MINUS",9:"MULT",10:"DIV",11:"POW",12:"FACT",13:"PORCENT",14:"LPAREN",15:"RPAREN",16:"NUMBER",17:"E",18:"PI",20:"SEMICOLON",28:"NOME",29:"V_SER",30:"N_PESSOA",31:"N_UNIVERSIDADE",32:"N_CURSO",33:"P_DE",34:"P_QUAIS",35:"V_SAO",36:"A_OS",37:"N_CURSOS",38:"INTERROGACAO",39:"INFO",40:"V_IMPRIMIR",41:"N_RESUMO",42:"SE",43:"ENTAO",44:"FIM_SE"},
productions_: [0,[3,2],[6,3],[6,3],[6,3],[6,3],[6,3],[6,2],[6,2],[6,2],[6,3],[6,1],[6,1],[6,1],[4,3],[4,2],[4,2],[4,1],[19,1],[19,1],[19,1],[19,1],[19,1],[19,1],[19,1],[21,3],[23,3],[22,5],[24,7],[25,1],[26,2],[27,7]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:

			console.log('mundo');
		
break;
case 2:
this.$ = $$[$0-2]+$$[$0];
break;
case 3:
this.$ = $$[$0-2]-$$[$0];
break;
case 4:
this.$ = $$[$0-2]*$$[$0];
break;
case 5:
this.$ = $$[$0-2]/$$[$0];
break;
case 6:
this.$ = Math.pow($$[$0-2], $$[$0]);
break;
case 7:

          this.$ = (function fact (n) { return n==0 ? 1 : fact(n-1) * n })($$[$0-1]);
        
break;
case 8:
this.$ = $$[$0-1]/100;
break;
case 9:
this.$ = -$$[$0];
break;
case 10:
this.$ = $$[$0-1];
break;
case 11:
this.$ = Number(yytext);
break;
case 12:
this.$ = Math.E;
break;
case 13:
this.$ = Math.PI;
break;
case 25:

			console.log('adicionando pessoa');
			pessoas.push($$[$0-2]);
			console.log(pessoas);
		
break;
case 26:

		console.log('adicionando universidade');
		universidades.push($$[$0-2]);
		console.log(universidades);
	
break;
case 27:

		console.log('adicionando curso');
		cursos.push([$$[$0], $$[$0-4]]);
	
break;
case 28:

		var c = cursos_de_universidade($$[$0-1]);
		console.log('cursos de ' + $$[$0-1]);
		console.log(c);
	
break;
case 29:

		return info();
	
break;
case 30:

		console.log('pessoas');
		console.log(pessoas);
		
		console.log('universidades:');
		console.log(universidades);
		
		console.log('cursos:');
		console.log(cursos);
	
break;
case 31:

			console.log('se');
		
break;
}
},
table: [{3:1,4:2,19:3,21:4,22:5,23:6,24:7,25:8,26:9,27:10,28:$V0,34:$V1,39:$V2,40:$V3,42:$V4},{1:[3]},{5:[1,16]},o($V5,[2,17],{19:3,21:4,22:5,23:6,24:7,25:8,26:9,27:10,4:18,20:[1,17],28:$V0,34:$V1,39:$V2,40:$V3,42:$V4}),o($V6,[2,18]),o($V6,[2,19]),o($V6,[2,20]),o($V6,[2,21]),o($V6,[2,22]),o($V6,[2,23]),o($V6,[2,24]),{29:[1,19]},{35:[1,20]},o($V6,[2,29]),{41:[1,21]},{14:[1,22]},{1:[2,1]},o($V5,[2,16],{19:3,21:4,22:5,23:6,24:7,25:8,26:9,27:10,4:23,28:$V0,34:$V1,39:$V2,40:$V3,42:$V4}),o($V5,[2,15]),{30:[1,24],31:[1,26],32:[1,25]},{36:[1,27]},o($V6,[2,30]),{6:28,8:$V7,14:$V8,16:$V9,17:$Va,18:$Vb},o($V5,[2,14]),o($V6,[2,25]),{33:[1,34]},o($V6,[2,26]),{37:[1,35]},{7:$Vc,8:$Vd,9:$Ve,10:$Vf,11:$Vg,12:$Vh,13:$Vi,15:[1,36]},{6:44,8:$V7,14:$V8,16:$V9,17:$Va,18:$Vb},{6:45,8:$V7,14:$V8,16:$V9,17:$Va,18:$Vb},o($Vj,[2,11]),o($Vj,[2,12]),o($Vj,[2,13]),{28:[1,46]},{33:[1,47]},{43:[1,48]},{6:49,8:$V7,14:$V8,16:$V9,17:$Va,18:$Vb},{6:50,8:$V7,14:$V8,16:$V9,17:$Va,18:$Vb},{6:51,8:$V7,14:$V8,16:$V9,17:$Va,18:$Vb},{6:52,8:$V7,14:$V8,16:$V9,17:$Va,18:$Vb},{6:53,8:$V7,14:$V8,16:$V9,17:$Va,18:$Vb},o($Vj,[2,7]),o($Vj,[2,8]),o($Vj,[2,9]),{7:$Vc,8:$Vd,9:$Ve,10:$Vf,11:$Vg,12:$Vh,13:$Vi,15:[1,54]},o($V6,[2,27]),{28:[1,55]},{4:56,19:3,21:4,22:5,23:6,24:7,25:8,26:9,27:10,28:$V0,34:$V1,39:$V2,40:$V3,42:$V4},o($Vk,[2,2],{9:$Ve,10:$Vf,11:$Vg,12:$Vh,13:$Vi}),o($Vk,[2,3],{9:$Ve,10:$Vf,11:$Vg,12:$Vh,13:$Vi}),o($Vl,[2,4],{11:$Vg,12:$Vh,13:$Vi}),o($Vl,[2,5],{11:$Vg,12:$Vh,13:$Vi}),o([7,8,9,10,11,15],[2,6],{12:$Vh,13:$Vi}),o($Vj,[2,10]),{38:[1,57]},{44:[1,58]},o($V6,[2,28]),o($V6,[2,31])],
defaultActions: {16:[2,1]},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        function _parseError (msg, hash) {
            this.message = msg;
            this.hash = hash;
        }
        _parseError.prototype = Error;

        throw new _parseError(str, hash);
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};

var pessoas = [];
var universidades = [];
var cursos = []; 
var relacoes = [];

function relacoes_de(nome) {
	var r = [];
	for(var i = 0; i < relacoes.length; i++) {
		if (relacoes[i][0] == nome) {
			r.push(relacoes[i]);
		}
	}
	return r;
}

function info() {
	return { 
		pessoas : pessoas,
		relacoes : relacoes,
		relacoes_de : relacoes_de
	};
}

function cursos_de_universidade(universidade) {
	var c = [];
	for(var i = 0; i < cursos.length; i++) {
		if (cursos[i][0] == universidade) {
			c.push(cursos[i][1]);
		}
	}
	return c;
}
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function (match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex() {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState(condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/* ignore whitespace */
break;
case 1:return 16;
break;
case 2:return 30;
break;
case 3:return 31;
break;
case 4:return 37;
break;
case 5:return 32;
break;
case 6:return 'N_ALUNO';
break;
case 7:return 34;
break;
case 8:return 40;
break;
case 9:return 41;
break;
case 10:return 29;
break;
case 11:return 33;
break;
case 12:return 35;
break;
case 13:return 42;
break;
case 14:return 43;
break;
case 15:return 44;
break;
case 16:return 36;
break;
case 17:return 38;
break;
case 18:return 14;
break;
case 19:return 15;
break;
case 20:return 9
break;
case 21:return 10
break;
case 22:return 8
break;
case 23:return 7
break;
case 24:return 11
break;
case 25:return 12
break;
case 26:return 13
break;
case 27:return 18
break;
case 28:return 17
break;
case 29:return 'GT';
break;
case 30:return 'LT';
break;
case 31:return 'GTE';
break;
case 32:return 'LTE';
break;
case 33:return 'COLON';
break;
case 34:return 20;
break;
case 35:return 'NL';
break;
case 36:return 'ASSIGN'
break;
case 37:return 'EQUALS';
break;
case 38:return 28;
break;
case 39:return 5;
break;
case 40:return 'INVALID';
break;
}
},
rules: [/^(?:\s+)/,/^(?:[0-9]+(\.[0-9]+)?\b)/,/^(?:pessoa\b)/,/^(?:universidade\b)/,/^(?:cursos\b)/,/^(?:curso\b)/,/^(?:aluno\b)/,/^(?:quais\b)/,/^(?:imprimir\b)/,/^(?:resumo\b)/,/^(?:eh\b)/,/^(?:de\b)/,/^(?:sao\b)/,/^(?:se\b)/,/^(?:entao\b)/,/^(?:fim-se\b)/,/^(?:os\b)/,/^(?:\?)/,/^(?:\()/,/^(?:\))/,/^(?:\*)/,/^(?:\/)/,/^(?:-)/,/^(?:\+)/,/^(?:\^)/,/^(?:!)/,/^(?:%)/,/^(?:PI\b)/,/^(?:E\b)/,/^(?:>)/,/^(?:<)/,/^(?:>=)/,/^(?:<=)/,/^(?:,)/,/^(?:;)/,/^(?:\n+)/,/^(?:=)/,/^(?:==)/,/^(?:[a-zA-Z][a-zA-Z0-9\-]*)/,/^(?:$)/,/^(?:.)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = mundo;
exports.Parser = mundo.Parser;
exports.parse = function () { return mundo.parse.apply(mundo, arguments); };
exports.main = function commonjsMain(args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}