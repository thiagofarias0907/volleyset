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

class Jogo {
  sets = [];
  constructor (nomeA, nomeB){
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
          document.getElementById("pontuacaoA").innerHTML = this.sets[i].a.pontoAtual;
          if(this.sets[i].retornaVencedor()!= null){
            this.sets[i].fim = true;
            alert("Fim de set!");
            this.encerrarSet();
          }
          return this.sets[i].a.pontoAtual;
        } else{
          this.sets[i].b.pontoAtual++;
          document.getElementById("pontuacaoB").innerHTML = this.sets[i].b.pontoAtual;
          if(this.sets[i].retornaVencedor()!= null){
            this.sets[i].fim = true;
            alert("Fim de set!");
            this.encerrarSet();
          }
          return this.sets[i].b.pontoAtual;
        }
      }
    }
    return 0; 
  }

  encerrarSet(){
    document.getElementById("pontuacaoA").innerHTML = '00';
    document.getElementById("pontuacaoB").innerHTML = '00';

    
    for (let i=0;i<this.sets.length; i++){
      if (!this.sets[i].fim)
        continue;

      if(this.sets[i].a.pontoAtual > this.sets[i].b.pontoAtual)
        this.sets[i].a.set = 1;
      else
        this.sets[i].b.set = 1;

      document.getElementById([i+1]+"A").innerHTML = this.sets[i].a.pontoAtual;
      document.getElementById([i+1]+"B").innerHTML = this.sets[i].b.pontoAtual;
    }
    this.verificaVencedorJogo();

  }

  verificaVencedorJogo(){
    let scoreA = 0;
    let scoreB = 0;
    for (let i=0;i<this.sets.length; i++){
      scoreA += this.sets[i].a.set;
      scoreB += this.sets[i].b.set;
      
      //Sugestão: Trecho abaixo pode ser reduzido se guardar uma string do nome do time com score maior
      //e, então, verificar se algum dos dois times tem score maior que 3.
      //desse modo, como os dois blocos do if() são parecidos, iria reduzir-se algumas linhas.

      document.getElementById("setA").innerHTML = scoreA;
      document.getElementById("setB").innerHTML = scoreB;
      if (scoreA >= 3){
        alert("!!!!!!!!!!!! FIM DE JOGO !!!!!!!!!!!!!!!!\n"+this.sets[i].a.nome + " foi o vencedor!");
        document.getElementById("btnA").disabled = true;
        document.getElementById("btnB").disabled = true;
        return;
      }
      if (scoreB >= 3){
        alert("!!!!!!!!!!!! FIM DE JOGO !!!!!!!!!!!!!!!!\n"+this.sets[i].b.nome + " foi o vencedor!");
        document.getElementById("btnA").disabled = true;
        document.getElementById("btnB").disabled = true;
        return;
      }
    }
  }
}

function inserirDados(){

  this.horario = document.getElementById("horario").value;
  this.timeA = document.getElementById("txtnomeA").value;
  this.timeB = document.getElementById("txtnomeB").value;

  document.getElementById("dados").hidden = true;

  //Sugestão: alterar elementos no html de name para classes 'nomeX' e 
  //trocar getElementsByName() para getElementsByClassName().

  document.getElementsByName("nomeA").forEach(el => el.innerHTML = this.timeA);
  document.getElementsByName("nomeB").forEach(el => el.innerHTML = this.timeB);
  document.getElementById("horarioDisplay").innerHTML = "Horário da partida: " + this.horario;

  document.getElementById("pontuacao").hidden = false;

};

/**
  Variáveis do jogo
*/
var horario = "";
var timeA = "A";
var timeB = "B";

var jogo = new Jogo(timeA,timeB);
