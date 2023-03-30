import { Characters } from "./GameCharacters";

class Dragon extends Characters{
    name : string = "dragon"
    

    changeImage(){
        const imageSection = document.querySelector(".petImage")
        imageSection?.classList.remove("wolfImage")
        imageSection?.classList.add("dragonImage")
    }


}

export default Dragon