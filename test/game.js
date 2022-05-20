class Time {
  constructor (nome){
    this.nome = nome;
    this.set = 0;
    this.pontoAtual = 0;
  };
}

class SetDojogo {
  constructor (timeA, timeB, score){
    this.a = timeA;
    this.b = timeB;
    this.score = score;
    this.fim = false;
  }

  retornaVencedor(){
    if (this.a.pontoAtual < this.score && this.b.pontoAtual < this.score)
      return null;
    if (this.a.pontoAtual >= this.score || this.b.pontoAtual >= this.score)
      if (this.a.pontoAtual-this.b.pontoAtual >=2)
        return this.a;
      if (this.b.pontoAtual-this.a.pontoAtual >=2)
        return this.b;
    return null;
  }
}

module.exports = class Jogo {
  sets = [];
  constructor (nomeA, nomeB){
    // this.timeA = new Time(nomeA, 0);
    // this.timeB = new Time(nomeB, 0);
    for (let i = 0; i<=5; i++){ 
      if (i==4){
        this.sets[i] = new SetDojogo(new Time(nomeA, 0),new Time(nomeB, 0),15) ;
        return;
      }
      this.sets[i] = new SetDojogo(new Time(nomeA, 0),new Time(nomeB, 0),25);
    }
  }
  
  pontuar(nome) {
    for (let i=0;i<this.sets.length; i++){
      if (!this.sets[i].fim){
        if (this.sets[i].a.nome == nome){
          this.sets[i].a.pontoAtual++;
          if(this.sets[i].retornaVencedor()!= null){
            this.sets[i].fim == true;
          }
          return this.sets[i].a.pontoAtual;
        } else{
          this.sets[i].b.pontoAtual++;
          if(this.sets[i].retornaVencedor()!= null){
            this.sets[i].fim == true;
          }
          return this.sets[i].b.pontoAtual;
        }
      }
    }
    return 0; 
  }
  
  
  
}