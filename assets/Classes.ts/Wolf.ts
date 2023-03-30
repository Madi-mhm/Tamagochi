import { Characters } from "./GameCharacters";

class Wolf extends Characters {
    name : string = 'wolf'

    changeImage(){
        const imageSection = document.querySelector(".petImage")
        imageSection?.classList.remove("dragonImage")
        imageSection?.classList.add("wolfImage")
    }
}

export default Wolf

