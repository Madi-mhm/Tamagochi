import Wolf from './Classes.ts/Wolf';
import Dragon from './Classes.ts/Dragon';
import { createSemanticDiagnosticsBuilderProgram } from 'typescript';

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
    bloodBarCountDown()
    meatBarCountDown()
    foodBarCountDown()

  }

});

// Functions for decreacing the values of the bars, every x seconds
let bloodBarValue: number = 100; 

function bloodBarCountDown(){
  let firstInterval: number ;
  const bloodBar: HTMLElement | null = document.getElementById("bloodBar")

  firstInterval = setInterval(()=>{
  
    if(bloodBarValue <= 100 && bloodBarValue >= 50){
      bloodBarValue = bloodBarValue - 10 
    }else if(bloodBarValue <= 50 && bloodBarValue >= 15){
      bloodBarValue = bloodBarValue - 6 
    }else if(bloodBarValue <= 15 && bloodBarValue >= 2){
      bloodBarValue = bloodBarValue - 2 ; 
    }else if(bloodBarValue <= 0){
      clearInterval(firstInterval)
    }

    if(bloodBar){
      bloodBar.innerHTML = bloodBarValue.toString()
    }     

    const bloodBarLevel : HTMLElement | null = document.getElementById("bloodBarLevel")
    if(bloodBarLevel){
      bloodBarLevel.style.width = `${bloodBarValue}%`
    }


  },1000)

  const bloodButton = document.querySelector(".bloodButton")

  bloodButton?.addEventListener("click", (()=>{
    if(bloodBarValue <= 90){
      bloodBarValue = bloodBarValue + 10 

      if(bloodBar){
        bloodBar.innerHTML = bloodBarValue.toString()
      } 
    }
}))

}


let meatBarValue: number = 100;

function meatBarCountDown(){

  let secondInterval: number; 
  const meatBar: HTMLElement | null = document.getElementById("meatBar")

  secondInterval = setInterval(()=>{   

  if(meatBarValue <= 100 && meatBarValue >= 50){
    meatBarValue = meatBarValue - 10 
  }else if(meatBarValue <= 50 && meatBarValue >= 15){
    meatBarValue = meatBarValue - 6 
  }else if(meatBarValue <= 15 && meatBarValue >= 2){
    meatBarValue = meatBarValue - 2 ; 
  }else if(meatBarValue <= 0){
    clearInterval(secondInterval)
  }

  if(meatBar){
    meatBar.innerHTML = meatBarValue.toString()
  }     

  const meatBarLevel : HTMLElement | null = document.getElementById("meatBarLevel")
  if(meatBarLevel){
    meatBarLevel.style.width = `${meatBarValue}%`
  }


  },1000)
  const meatButton = document.querySelector(".meatButton")

  meatButton?.addEventListener("click", (()=>{
    if(meatBarValue <= 90){
      meatBarValue = meatBarValue + 10 

      if(meatBar){
      meatBar.innerHTML = meatBarValue.toString()
      } 
    }
}))

}


let foodBarValue: number = 100;

function foodBarCountDown(){

  let thirdInterval: number; 
  const foodBar: HTMLElement | null = document.getElementById("foodBar")

  thirdInterval = setInterval(()=>{   

  if(foodBarValue <= 100 && foodBarValue >= 50){
    foodBarValue = foodBarValue - 10 
  }else if(foodBarValue <= 50 && foodBarValue >= 15){
    foodBarValue = foodBarValue - 6 
  }else if(foodBarValue <= 15 && foodBarValue >= 2){
    foodBarValue = foodBarValue - 2 ; 
  }else if(foodBarValue <= 0){
    clearInterval(thirdInterval)
  }
  
  if(foodBar){
    foodBar.innerHTML = foodBarValue.toString()
  }

  const foodBarLevel : HTMLElement | null = document.getElementById("foodBarLevel")
  if(foodBarLevel){
    foodBarLevel.style.width = `${foodBarValue}%`
  }

  },1000)

  const foodButton = document.querySelector(".foodButton")

  foodButton?.addEventListener("click", (()=>{
    if(foodBarValue <= 90){
      foodBarValue = foodBarValue + 10 

      if(foodBar){
        foodBar.innerHTML = foodBarValue.toString()
      } 
    }
}))

}





