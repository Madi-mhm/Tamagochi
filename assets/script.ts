import Wolf from './Classes.ts/Wolf';
import Dragon from './Classes.ts/Dragon';

const homePageContainer = document.querySelector('.homePageContainer');
const gameSectionContainer = document.querySelector('.gameSectionContainer');
const resultContainer = document.querySelector('.resultContainer');


// Home Page start button for starting the game
const startButton = document.getElementById('homePageStartButton');
const petsNameInput = document.getElementById('petsNameInput') as HTMLInputElement;
const selectOption = document.getElementById('selectOption') as HTMLSelectElement;

startButton?.addEventListener('click', () => {

  if (petsNameInput.value === '') {
    const NameInputErrorMessage = document.getElementById('NameInputErrorMessage');
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

      const dragonClass = new Dragon("People")
      dragonClass.changeImage()
      
    } else if (selectedOption.value === 'Wolf') {
      homePageContainer?.classList.add('hide');
      gameSectionContainer?.classList.remove('hide');

      const wolfImage = new Wolf("rabbit")
      wolfImage.changeImage()
      
    } 

  }
});

