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

// First function for decreacing the values of the blood bar, every second + button for increase the bar value 
let bloodBarValue: number = 100; 

function bloodBarCountDown(){
  let firstInterval: number ;
  const bloodBar: HTMLElement | null = document.getElementById("bloodBar")
  const bloodBarLevel : HTMLElement | null = document.getElementById("bloodBarLevel")

  firstInterval = setInterval(()=>{
  
    if(bloodBarValue <= 100 && bloodBarValue >= 50){
      bloodBarValue = bloodBarValue - 10 
    }else if(bloodBarValue <= 50 && bloodBarValue >= 15){
      bloodBarValue = bloodBarValue - 6 
    }else if(bloodBarValue <= 15 && bloodBarValue >= 2){
      bloodBarValue = bloodBarValue - 2 ; 
    }else if(bloodBarValue <= 0){
      clearInterval(firstInterval)
      gameOverpage()
    }

    if(bloodBar){
      bloodBar.innerHTML = bloodBarValue.toString()
    }     

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

      if(bloodBarLevel){
        bloodBarLevel.style.width = `${bloodBarValue}%`
      }
    }
}))

}

// Second function for decreacing the values of the meat bar, every second + button for increase the bar value 
let meatBarValue: number = 100;

function meatBarCountDown(){

  let secondInterval: number; 
  const meatBar: HTMLElement | null = document.getElementById("meatBar")
  const meatBarLevel : HTMLElement | null = document.getElementById("meatBarLevel")

  secondInterval = setInterval(()=>{   

  if(meatBarValue <= 100 && meatBarValue >= 50){
    meatBarValue = meatBarValue - 10 
  }else if(meatBarValue <= 50 && meatBarValue >= 15){
    meatBarValue = meatBarValue - 6 
  }else if(meatBarValue <= 15 && meatBarValue >= 2){
    meatBarValue = meatBarValue - 2 ; 
  }else if(meatBarValue <= 0){
    clearInterval(secondInterval)
    gameOverpage()
  }

  if(meatBar){
    meatBar.innerHTML = meatBarValue.toString()
  }     

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
      if(meatBarLevel){
        meatBarLevel.style.width = `${meatBarValue}%`
      }
    }
}))

}

// Third function for decreacing the values of the food bar, every second + button for increase the bar value 
let foodBarValue: number = 100;

function foodBarCountDown(){

  let thirdInterval: number; 
  const foodBar: HTMLElement | null = document.getElementById("foodBar")
  const foodBarLevel : HTMLElement | null = document.getElementById("foodBarLevel")

  thirdInterval = setInterval(()=>{   

  if(foodBarValue <= 100 && foodBarValue >= 50){
    foodBarValue = foodBarValue - 10 
  }else if(foodBarValue <= 50 && foodBarValue >= 15){
    foodBarValue = foodBarValue - 6 
  }else if(foodBarValue <= 15 && foodBarValue >= 2){
    foodBarValue = foodBarValue - 2 ; 
  }else if(foodBarValue <= 0){
    clearInterval(thirdInterval)
    gameOverpage()
  }
  
  if(foodBar){
    foodBar.innerHTML = foodBarValue.toString()
  }

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
      if(foodBarLevel){
        foodBarLevel.style.width = `${foodBarValue}%`
      }
    }
}))

}


// function for show the result page and hide the game section after losing
const resultContainer:HTMLElement | null = document.querySelector(".resultContainer") 

function gameOverpage(){
  gameSectionContainer?.classList.add("hide")
  resultContainer?.classList.remove("hide")
}


// replay button that refresh the page 
const replayButton:HTMLElement | null = document.getElementById("replayButton")
replayButton?.addEventListener("click", ()=>{
  location.reload()
})

