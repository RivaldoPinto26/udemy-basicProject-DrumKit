//MANEIRA 1 - 
//add eventListener so it can listen when it click
document.querySelector("button").addEventListener("click", handleClick);

// esta NORRMAL FUNCTION é para accionar se o botão for clicado, 
function handleClick() {
  alert("I got clicked!")
}

//MANEIRA 2 -
//outra maneira usando ANONYMOS FUNCTION 
document.querySelector("button").addEventListener("click", function () {
  alert("i got clicked!");
  //instruções sira htu coloca iha ne assim que butao for clicado nia trigger ka accione instruções sira ne.
})


//usando loop para bele seleciona htu kdan button sira, nesse caso ita seleciona usa class tmba se ita tau button, nia aplica ba button tomak iha index.html.
var numberOfDrumButtons = document.querySelectorAll(".drum").length; //save numero total button iha variavel ida ne
for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    alert(`i got clicked!`)
  })
} //line:22 ita atu manipula element ne sempre tau numero indice do array tamba element sira representa array. 
//mais ita usa loop entaun tau [I]. para loop passa ba 0 nia trigger function ba iha button nebe posicao indice 0,
//depois loop continua passa b fali 1 trigger nftin ate to button sira ne hotu.



//-------------------------------------------EXPLICAÇÃO-----------------------------------------------------------------------------
/* addEventListener ne iha parametro rua ida mak event(click, etc) ida seluk listener ne bele coloca ita nia funcao */
/* event sira ne tem ke coloca hanesan string ka iha "laran" */
/* exemplo leten ne ita add eventlistener ba butao, event ita hili click se nia click nia listener tem ke halo buat ruma mak, ne mak ita nia funcao */
/* ita call ita nia funcion sem () tamba ita hkarak click mak foin ita trigger ka começa function ne */
/* para brincar com addevenlistener abre site qualquer faz inspect e brinca em console */

/* em console coloca debugger; shift + enter depois colocação ou qualquer para ver como codigo corre para chegar ao output */



