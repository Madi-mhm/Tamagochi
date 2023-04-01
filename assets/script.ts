import Wolf from './Classes.ts/Wolf';
import Dragon from './Classes.ts/Dragon';

const homePageContainer: HTMLHRElement | null = document.querySelector('.homePageContainer');
const gameSectionContainer: HTMLElement | null = document.querySelector('.gameSectionContainer');

const resultContainer = document.querySelector('.resultContainer');


// Home Page start button for starting the game
const startButton: HTMLElement | null = document.getElementById('homePageStartButton');
const petsNameInput: HTMLInputElement = document.getElementById('petsNameInput') as HTMLInputElement;
const selectOption: HTMLSelectElement = document.getElementById('selectOption') as HTMLSelectElement;

startButton?.addEventListener('click', () => {
    
  if (petsNameInput.value === "" ) {
    const NameInputErrorMessage: HTMLElement | null = document.getElementById('NameInputErrorMessage');
    if (NameInputErrorMessage) {
      NameInputErrorMessage.innerText = 'Please enter your name';
      setTimeout(() => {
        NameInputErrorMessage.innerText = '';
      }, 3000);
    }
  } else {
    const selectedOption = selectOption.options[selectOption.selectedIndex] as HTMLOptionElement;
    if (selectedOption.value === 'Dragon') {
      homePageContainer?.classList.add('hide');
      gameSectionContainer?.classList.remove('hide');

      const dragonClass: Dragon = new Dragon("People")
      dragonClass.changeImage()
      dragonClass.dragonFoodButton()
      dragonClass.dragonBarIcon()
      
    } else if (selectedOption.value === 'Wolf') {
      homePageContainer?.classList.add('hide');
      gameSectionContainer?.classList.remove('hide');

      const wolfImage: Wolf = new Wolf("rabbit")
      wolfImage.changeImage()
      wolfImage.wolfFoodButton()
      wolfImage.wolfBarIcon()

      
    } 
    barsCountDown()
  }

});


// diminue de 10% entre 50% et 100% de point de vie
// diminue de 6% entre 15% et 50% de point de vie
// diminue de 2% entre 0% et 15% de point de vie
// L’utilisateur peut alimenter les jauges à l’aide d’un bouton qui augmente la jauge de 10%, la jauge ne peut pas dépasser les 100%.

// A function for decreacing the value of the bars every x minutes
const barValues: NodeListOf<Element>  = document.querySelectorAll(".barValue") 

function barsCountDown (){
  let barValuesInnerText: number = 100

  // First Interval timer for decreasing down to 50% by 10% each 2sec
  let firstInterval: number ; 
  if(barValuesInnerText <= 100 && barValuesInnerText >= 50){
    firstInterval = setInterval(()=>{
      barValuesInnerText -= 10 ; 
      for(let i= 0; i < barValues.length; i++){
        barValues[i].innerHTML = barValuesInnerText.toString()      
      } 
      if (barValuesInnerText === 50) {
        clearInterval(firstInterval);
      }
    },1000)
  }

}






// const barConuterElements = document.querySelectorAll(".barConuterElement")

