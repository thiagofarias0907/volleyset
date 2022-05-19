/**********************************************
  Setting up Jest
***********************************************/

const {
  core: { describe, it, expect, run },
  enzyme: { mount },
  prettify
} = window.jestLite;

/**
  Variáveis do jogo
*/

class Time {
  constructor (nome,score){
    this.nome = nome;
    this.score = score;
  };
}

// var sets= [{"A":0,"B":0, score:25,max:30 }];

class Jogo {
  constructor (nomeA, nomeB){
    this.timeA = new Time(nomeA, 0);
    this.timeB = new Time(nomeB, 0);
    for (let i = 0; i<=5; i++){ 
      if (i==4){
        sets[i] = {nomeA:0,nomeB:0, score:15,max:20, fim:false } ;
        return;
      }
      sets[i] = {nomeA:0,nomeB:0, score:25,max:30, fim:false };
    }
  }
  
  pontuar(nome) {
    for (set in this.sets){
      if (!set.fim){
        if (nomeA == nome){
          set.nomeA++;
          break;
        } else{
          set.nomeB++;
          break;
        }
      }
    } 
  } 
  
}



// FUNCOES


describe("Controle de Pontuação de jogo de Vôlei", function () {
  describe("Pontuar", function () {
    it("deve retornar o adição de um ponto no time A", () => {
      var jogo = new Jogo("Time A","Time B")
      const value = pontuar("Time A");
      // 3. Expect
      expect(value).toBe(true);
      expect(jogo.a.score).toBe(1);
    });
  });
});



