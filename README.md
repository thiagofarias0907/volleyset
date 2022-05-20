# volleyset



JEST - Testes
> *talvez seja a melhor alternativa*: npm install jest --global (adiciona no path)
> npm install --save-dev jest

rodar teste com
> npm test


## JOGO DE VOLEI
O árbitro de vôlei quer ter um software para controlar o placar ao longo de uma partida. Para isso, o software
deve ter uma única interface, sem necessidade de login, que peça informações sobre o jogo (Horário, Equipe
A, Equipe B).
O software deve permitir que o árbitro altere os valores de pontuação do set atual, até o mesmo ser finalizado.
Lembrando que os 4 primeiros sets terminam em 25 ou até um dos adversários tiverem 2 pontos de vantagem.
O quinto (set) termina em 15 pontos ou até um dos adversários terem 2 pontos de vantagem.
Ao terminar a digitação, caso o sistema identifique final do set, deve pedir confirmação do usuário e finalizar
o set, deixando registrado o placar de cada set já jogado, assim como o número de sets ganhos por cada equipe
e habilitar a digitação do próximo set.
Caso o sistema identifique término de jogo, deve pedir uma confirmação e então mostrar o time vencedor. O
término do jogo acontece quando uma das equipes vencer 3 sets.
Testes
O sistema deve implementar testes unitários, tendo no mínimo uma classe de testes para validar se retornou o
vencedor correto num set.
Exemplo: a classe “SetdoJogo” deverá ter um método retornaVencedor que retorna a equipe vencedora ou
<vazio> caso não exista vencedor e deverá ter uma classe de testes correspondente.