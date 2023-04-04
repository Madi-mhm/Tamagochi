import { Characters } from "./GameCharacters";

class Dragon extends Characters{
    name : string = "dragon"
    

    changeImage(){
        const imageSection = document.querySelector(".petImage")
        imageSection?.classList.remove("wolfImage")
        imageSection?.classList.add("dragonImage")
    }
    dragonFoodButton(){
        const uniqueButton = document.getElementById("foodButton")
        uniqueButton?.classList.remove("wolfFoodButtonImage")
        uniqueButton?.classList.add("dragonFoodButtonImage")
    }
    dragonBarIcon(){
        const barIcon = document.querySelector("thirdIcon")
        barIcon?.classList.remove("rabbitIcon")
        barIcon?.classList.add("peopleIcon")

    }

}

export default Dragon