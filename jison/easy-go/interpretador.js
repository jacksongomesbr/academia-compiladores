/*
* Define a classe Interpretador, com funções para processamento de uma
* AST no contexto da gramática definida em easy.js
*/
function Interpretador(ast, canvasId, texto) {
    this.ast = ast;
    this.canvasId = canvasId;
    this.canvas = new fabric.StaticCanvas(this.canvasId);
    this.texto = texto;
    this.pontoAtual = null;
    this.ator = null;
    this.iniciar();
}

/*
* Este método inicia a posição do ator (no centro do canvas).
*/
Interpretador.prototype.iniciar = function() {
    /* encontra o meio do canvas (altura e largura) */
    var x = this.canvas.width/2, y = this.canvas.height/2;

    /* cria o ator, um retângulo posicionado em x e y */
    this.ator = new fabric.Rect({
        left: x, top: y, fill: 'blue', 
        width: 10, height: 10, angle: 45
    });

    /* adiciona o ator ao canvas */
    this.canvas.add(this.ator); 
    this.pontoAtual = {x: x, y: y};
}

/*
* Este método percorre a árvore recursivamente e, conforme cada tipo de nó,
* executa a operação apropriada.
*/
Interpretador.prototype.executarAST = function(no) {
    /*  se o parâmetro no não estiver definido
        então inicia a execução pela raiz da AST
    */
    if (!no) 
        no = this.ast;

    if (no.type == 'Programa') {
        /* se o nó for do tipo programa */        
        /* percorre os blocos */
        /* se há um array de blocos */
        if (Array.isArray(no.blocos)) {
            /* chama a função recursivamente para cada bloco */
            for(var i = 0; i < no.blocos.length; i++) {
                this.executarAST(no.blocos[i]);
            }
        } else {
            /* se há apenas um bloco */
            /* chama a função recursivamente para o bloco */
            this.executarAST(no.blocos);
        }
    } else if (no.type == 'Bloco') {
        /* se o nó for do tipo bloco */
        /* se há um array de sentenças */
        if (Array.isArray(no.sentencas)) {
            /* chama a função recursivamente para cada sentença */
            for(var i = 0; i < no.sentencas.length; i++) {
                this.executarAST(no.sentencas[i]);
            }        
        } else {
            /* se há apenas uma sentença */
            /* chama a função recursivamente para a sentença */
            this.executarAST(no.sentencas);
        }
    } else if (no.type == 'Comando') {
        /* se o nó for do tipo comando */
        if (no.name == 'MoverPara') {
            /* se o comando for 'mover para' */
            this.moverPara(no.ponto[0], no.ponto[1]);
        } else if (no.name == 'MarqueAqui') {
            /* se o comando for 'marque aqui' */
            this.marqueAqui(this.pontoAtual.x, this.pontoAtual.y);
        }
    }
}

/*
* Este método move o ator para a posição definida por x e y
*/
Interpretador.prototype.moverPara = function(x, y) {
    /* guarda o ponto atual em formato de objeto */ 
    this.pontoAtual = {x: x, y: y};
    /* move o ator usando recurso de animação da fabric.js */ 
    this.ator.animate({'left': x, 'top': y}, {
        /* atualiza o canvas */
        onChange: this.canvas.renderAll.bind(this.canvas)
    });    
}

/*
* Este método cria uma marca (um círculo) na posição definida por x e y
*/
Interpretador.prototype.marqueAqui = function(x, y) {
    /* cria um círculo na posição definida por x e y */
    var circle = new fabric.Circle({
        radius: 5, fill: 'red', left: x, top: y
    });
    /* adiciona o círculo no canvas */
    this.canvas.add(circle);
}

/*
* Este método limpa o canvas e reinicia a posição do ator
*/
Interpretador.prototype.clear = function() {
    this.canvas.clear();
    this.iniciar();
    this.pontoAtual = null;
    this.ast = null;
}

if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
    exports.Interpretador = Interpretador;
}
