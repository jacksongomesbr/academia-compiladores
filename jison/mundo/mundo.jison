/* linguagem mundo real */

%{
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
%}

%lex
%%

\s+						/* ignore whitespace */
[0-9]+("."[0-9]+)?\b  	return 'NUMBER';
"pessoa"				return 'N_PESSOA';
"universidade"			return 'N_UNIVERSIDADE';
"cursos"				return 'N_CURSOS';
"curso"					return 'N_CURSO';
"aluno"					return 'N_ALUNO';
"quais"					return 'P_QUAIS';
"imprimir"				return 'V_IMPRIMIR';
"resumo"				return 'N_RESUMO';
"eh"					return 'V_SER';
"de"					return 'P_DE';
"sao"					return 'V_SAO';
"se"					return 'SE';
"entao"					return 'ENTAO';
"fim-se"				return 'FIM_SE';
"os"					return 'A_OS';
"?"						return 'INTERROGACAO';
"("                     return 'LPAREN';
")"                     return 'RPAREN';
"*"                 	return 'MULT'
"/"                 	return 'DIV'
"-"                 	return 'MINUS'
"+"                 	return 'PLUS'
"^"                 	return 'POW'
"!"                 	return 'FACT'
"%"                 	return 'PORCENT'
"PI"                  	return 'PI'
"E"                   	return 'E'
">"						return 'GT';
"<"						return 'LT';
">="					return 'GTE';
"<="					return 'LTE';
","						return 'COLON';
";"						return 'SEMICOLON';
\n+                   	return 'NL';
"="                   	return 'ASSIGN'
"=="					return 'EQUALS';
[a-zA-Z][a-zA-Z0-9\-]*	return 'NOME';
<<EOF>>               	return 'EOF';
.                     	return 'INVALID';

/lex

/* operator associations and precedence */
%left PLUS MINUS
%left MULT DIV
%left POW
%right FACT
%right PORCENT
%left UMINUS

%start mundo

%%

mundo
    : instrucoes EOF
		{
			console.log('mundo');
		}
    ;	

expressao
    : expressao PLUS expressao
        {$$ = $1+$3;}
    | expressao MINUS expressao
        {$$ = $1-$3;}
    | expressao MULT expressao
        {$$ = $1*$3;}
    | expressao DIV expressao
        {$$ = $1/$3;}
    | expressao POW expressao
        {$$ = Math.pow($1, $3);}
    | expressao FACT
        {{
          $$ = (function fact (n) { return n==0 ? 1 : fact(n-1) * n })($1);
        }}
    | expressao PORCENT
        {$$ = $1/100;}
    | MINUS expressao %prec UMINUS
        {$$ = -$2;}
    | LPAREN expressao RPAREN
        {$$ = $2;}
    | NUMBER
        {$$ = Number(yytext);}
    | E
        {$$ = Math.E;}
    | PI
        {$$ = Math.PI;}
    ;
	
instrucoes
	: instrucao SEMICOLON instrucoes
	| instrucao instrucoes
	| instrucao SEMICOLON
	| instrucao
	;
	
instrucao
	: tipo_pessoa
	| tipo_curso
	| tipo_universidade
	| q_universidade_cursos
	| info
	| imprimir_resumo
	| condicional_simples
	;
	
tipo_pessoa
	: NOME V_SER N_PESSOA 
		{
			console.log('adicionando pessoa');
			pessoas.push($1);
			console.log(pessoas);
		}	
	;
	
tipo_universidade
	: NOME V_SER N_UNIVERSIDADE
	{
		console.log('adicionando universidade');
		universidades.push($1);
		console.log(universidades);
	}
	;

tipo_curso
	: NOME V_SER N_CURSO P_DE NOME
	{
		console.log('adicionando curso');
		cursos.push([$5, $1]);
	}
	;
	
q_universidade_cursos
	: P_QUAIS V_SAO A_OS N_CURSOS P_DE NOME INTERROGACAO
	{
		var c = cursos_de_universidade($6);
		console.log('cursos de ' + $6);
		console.log(c);
	}
	;
	
info
	: INFO
	{
		return info();
	}
	;
	
imprimir_resumo
	: V_IMPRIMIR N_RESUMO
	{
		console.log('pessoas');
		console.log(pessoas);
		
		console.log('universidades:');
		console.log(universidades);
		
		console.log('cursos:');
		console.log(cursos);
	}
	;
	
condicional_simples
	: SE LPAREN expressao RPAREN ENTAO instrucoes FIM_SE
		{
			console.log('se');
		}
	;