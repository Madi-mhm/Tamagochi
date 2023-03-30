import { Characters } from "./GameCharacters";

class Wolf extends Characters {
    name : string = 'wolf'

    changeImage(){
        const imageSection = document.querySelector(".petImage")
        imageSection?.classList.remove("dragonImage")
        imageSection?.classList.add("wolfImage")
    }
    wolfFoodButton(){
        const uniqueButton = document.getElementById("foodButton")
        uniqueButton?.classList.remove("dragonFoodButtonImage")
        uniqueButton?.classList.add("wolfFoodButtonImage")
    }
    wolfBarIcon(){
        const barIcon = document.querySelector(".thirdIcon")
        barIcon?.classList.remove("peopleIcon")
        barIcon?.classList.add("rabbitIcon")
    }
}

export default Wolf

