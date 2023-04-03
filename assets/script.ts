import Wolf from './Classes.ts/Wolf';
import Dragon from './Classes.ts/Dragon';

const homePageContainer: HTMLHRElement | null = document.querySelector('.homePageContainer');
const gameSectionContainer: HTMLElement | null = document.querySelector('.gameSectionContainer');

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

// A function for decreacing the values of the bars, every x seconds
const barValues: NodeListOf<Element>  = document.querySelectorAll(".barValue") 
const barColorInjection: HTMLCollectionOf<Element> = document.getElementsByClassName("barRedColor") 
let barValuesInnerText: number = 100

function barsCountDown (){
  let firstInterval: number ;

  firstInterval = setInterval(()=>{

    if(barValuesInnerText <= 100 && barValuesInnerText >= 50){
      barValuesInnerText -= 10 
    }else if(barValuesInnerText <= 50 && barValuesInnerText >= 15){
      barValuesInnerText -= 6 
    }else if(barValuesInnerText <= 15 && barValuesInnerText >= 2){
      barValuesInnerText -= 2 ; 
    }else if(barValuesInnerText <= 0){
      clearInterval(firstInterval)
    }

    for(let i= 0; i < barValues.length; i++){
      barValues[i].innerHTML = barValuesInnerText.toString()
    }      

    for(let i = 0; i < barColorInjection.length ; i++){
      const element: HTMLElement | null = barColorInjection[i] as HTMLElement
      element.style.width = `${barValuesInnerText}%`
    }
  },1000)  
}

// The buttons for increase the values of bars
const barCounterIcon: HTMLCollectionOf<Element> = document.getElementsByClassName("gameSectionButtons")

for(let i = 0; i < barCounterIcon.length ; i++ ){

  const barButtons = barCounterIcon[i] as HTMLElement
  
  barButtons.addEventListener("click", (e : Event)=> {

    const clickedButton = e.target as HTMLElement  
   
    if(clickedButton.classList.contains("bloodButton")){
      const bloodBar: HTMLElement | null = document.getElementById("bloodBar")

      // let oldBarValue: string | undefined = bloodBar?.innerText 
      // let newBarValue: number = Number(oldBarValue)

      // newBarValue += 10 ;
      // if(bloodBar){
      //   bloodBar.innerText = String(newBarValue)
      // }

      
      
      console.log("blood") 
    }else if(clickedButton.classList.contains("meatButton")){
      console.log("meat")
    }else if(clickedButton.classList.contains("foodButton")){
      console.log("food")
    }
  })

}
// function increaseBarCounterByButton(){

//   if(barValuesInnerText <= 90 && barValuesInnerText >= 0){
//     barValuesInnerText += 10;

//     for(let i = 0 ; i < barValues.length ; i++){
//       barValues[i].innerHTML = barValuesInnerText.toString()
//     }
//   }
// }
    const meatBarLevel:HTMLElement | null = document.getElementById("meatBarLevel")
    const foodBarLevel:HTMLElement | null = document.getElementById("foodBarLevel")



// const barConuterElements = document.querySelectorAll(".barConuterElement")

