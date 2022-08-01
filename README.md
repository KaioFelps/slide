# Slide

Já tentei fazer sliders anteriormente, porém haviam todos sido desastres tenebrosos. Após aprender mais sobre JS, resolvi tentar fazer meu próprio slider totalmente do 0, sem *ajudinha* de sites na internet (onde geralmente você acha a programação pronta e apenas replica o que vê sem entender como funciona).

Isso para mim serviu de grande aprendizagem, e, portanto, estou a compartilhar como cheguei no resultado final.

## Imports

Apredi há pouco como utilizar os imports, module.exports, etc. Fazendo o slide obtive mais aprendizado sobre quando usar module.exports e export default (ou export {} ). Sabendo disso, acabei exagerando em um nível onde absolutamente cada função era exportada e importada no arquivo `slide.js`, que por si só já era exportado e importado no `index.js`.

Após perceber que estava tudo virando uma bagunça maior do que estava antes, trouxe todas as funções apenas para o arquivo Slide e ele, somente, será exportado e importado no arquivo principal como um módulo. Isso permitiu que, enfim, eu pudesse resolver os problemas ainda pendentes.

Eu poderia ter feito direto tudo no `index.js`, porém como queria simular um ambiente onde haverá mais partes de um site a utilizarem scripts, importei o arquivo que faz o slide funcionar como um módulo, simulando um pedacinho de um site completo.

## For e forEach

Ao me deparar com um for (i=0; i<10; i++) eu costumava entrar em pânico, sem entender o que estava acontecendo e o motivo de funcionar. Se você, como eu, não entendia, lá vai um resuminho:
  • O i=0 gera uma variável i
  • O i<0 assinala que a ação deve acontecer enquanto a variável i (valor = 0) for menor que 10
  • O i++ enquanto i (0) for menor que 10, ele será incrementado (aumenta 1 em seu valor).
Há varias outras maneiras de se fazer isso, mas entendendo o que está acontecendo te permite usufruir dessa funcionalidade com mais facilidade.

## Conclusão

Fazer esse pequeno projeto me custou 2 - 3 dias e muito desespero com os erros que eu mesmo criava, mas me rendeu muito conhecimento prático que eu precisava adquirir. Ainda tenho muito a aprender e pretendo sempre melhorar esse código, aplicando conceitos e novidades que eu aprender. Obrigado!

<img src="./assets/img/slide funcionando.gif" alt="Slide em ação"/>
