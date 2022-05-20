
const Jogo = require('./game');
describe("Controle de Pontuação de jogo de Vôlei", function () {
    describe("Pontuar", function () {
      it("deve retornar o adição de um ponto no time A", () => {
        var jogo = new Jogo("Time A","Time B");

        var value = jogo.pontuar("Time A");
        expect(value).toBe(1);
        expect(jogo.sets[0].a.pontoAtual).toBe(1);
        
        value = jogo.pontuar("Time A");
        expect(value).toBe(2);
        expect(jogo.sets[0].a.pontoAtual).toBe(2);
        
        
        value = jogo.pontuar("Time B");
        expect(value).toBe(1);
        expect(jogo.sets[0].a.pontoAtual).toBe(2);
        expect(jogo.sets[0].b.pontoAtual).toBe(1);

      });
    });

    describe("Vencedor de set", function () {
      it("deve retornar time correto que venceu Set", () => {
        var jogo = new Jogo("Time A","Time B");
        for(let i = 0; i<25;i++) {jogo.pontuar("Time A");}  
        for(let i = 0; i<25;i++) {jogo.pontuar("Time B");}
        expect(jogo.sets[0].a.pontoAtual).toBe(25);   
        expect(jogo.sets[0].b.pontoAtual).toBe(25);
        expect(jogo.sets[0].retornaVencedor() == null);

        
        jogo = new Jogo("Time A","Time B");
        for(let i = 0; i<25;i++) {jogo.pontuar("Time A");}  
        for(let i = 0; i<27;i++) {jogo.pontuar("Time B");}
        expect(jogo.sets[0].a.pontoAtual).toBe(25);   
        expect(jogo.sets[0].b.pontoAtual).toBe(27);
        expect(jogo.sets[0].retornaVencedor() == jogo.sets[0].b);

        jogo = new Jogo("Time A","Time B");
        for(let i = 0; i<25;i++) {jogo.pontuar("Time A");}  
        for(let i = 0; i<18;i++) {jogo.pontuar("Time B");}
        expect(jogo.sets[0].a.pontoAtual).toBe(25);   
        expect(jogo.sets[0].b.pontoAtual).toBe(18);
        expect(jogo.sets[0].retornaVencedor() == jogo.sets[0].a);

      });
    });
  });