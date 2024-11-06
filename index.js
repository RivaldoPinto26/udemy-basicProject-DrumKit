let numberOfDrumButtons = document.querySelectorAll(".drum").length;

//Detecting Button Press
for (let i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () { //1. //1. Check if button is clicked

    let buttonInnerHtml = this.innerHTML; //2. Check which button is pressed or clicked
    // Refers to the content of the button element (e.g., w, a, s, etc.), as "innerHTML" refers to its content, in this case, the text

    //call function Method
    makeSound(buttonInnerHtml); //3. Sends the buttonInnerHtml to makeSound function, which will trigger the sound when clicked.

    buttonAnimation(buttonInnerHtml); // This applies button animation on the screen when a button is clicked

  })
}

//Detecting Keyboard Press
document.addEventListener("keypress", function (event) {
  makeSound(event.key); //4. Checks which keyboard key was pressed and sends it to makeSound function to play the corresponding sound
  //(event.key) tells us which keyboard key was pressed.

  buttonAnimation(event.key); //Also triggers button animation when the key is pressed
})


// makeSound function that uses a switch statement for the keyboard
function makeSound(key) { // Passing the parameter as "key," which is a property of keypress event

  switch (key) {  // Passing the parameter as "key," which is a property of keypress event

    case "w":  //If the case is "w," it executes the code below.
      let tom1 = new Audio('./sounds/tom-1.mp3');
      tom1.play();
      break; // Exits this case and moves to the next case

    case "a":
      let tom2 = new Audio('./sounds/tom-2.mp3');
      tom2.play();
      break;

    case "s":
      let tom3 = new Audio('./sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      let tom4 = new Audio('./sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      let snare = new Audio('./sounds/snare.mp3');
      snare.play();
      break;

    case "k":
      let crash = new Audio('./sounds/crash.mp3');
      crash.play();
      break;


    case "l":
      let kick = new Audio('./sounds/kick-bass.mp3');
      kick.play();
      break;


    default: console.log(buttonInnerHtml);
  }
}


//function buttonAnimation
function buttonAnimation(currentKey) { //currentKey parameter input receives the key value or button that is clicked, then applies animation
  let activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");//adiciona classe que esta em css, para se for clicar ou presiona ele vai ao esse classe.

  //vamos aplicar setTimeOut para que preciona carrega nia bele remove fali style css
  setTimeout(function () {
    activeButton.classList.remove("pressed")
  }, 100); //valor 100 para 0,1 segundo dt. setTimeout(function, milliseconds, parameter1, parameter2, ...); buka hatene

}
//"." + currentKey ne atu foti classe sira ita tau iha html button hnesan w,a,s etc. como classe usa ponto() entaun ita tem ke concatenate


// Em JS elemento HTML sra hnesan butao div etc ne iha DOM representa hanesan objeto no nia iha propriedade no metodo:
/* nesse codigo, cada botão é tratado como um objeto do DOM, e o this dentro da função do addEventListener
faz referência ao botão que foi clicado, permitindo que você acesse suas propriedades ou métodos (como innerHTML, id, classList, etc.). */
//Quando você usa document.querySelectorAll(".drum"), você está pegando todos os elementos com a classe .drum, e cada um desses elementos é um objeto no DOM.
//então apartir do this podemos manipular cada elemento

