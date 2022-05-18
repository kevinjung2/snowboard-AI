class Controls {
    constructor(){
        this.forward = false; 
        this.left = false;
        this.right = false;
        this.reverse = false;

        this.#addKeyboardListeners();
    }

    #addKeyboardListeners(){
        document.onkeydown = (e) => {
            switch(e.key){
                case "ArrowLeft":
                    this.left = true
                    break;
                case "ArrowRight":
                    this.right = true
                    break;
                case "ArrowUp":
                    this.forward = true
                    break;
                case "ArrowDown":
                    this.reverse = true
                    this.forward = false
                    break;
                case "a":
                    this.left = true
                    break;
                case "d":
                    this.right = true
                    break;
                case "w":
                    this.forward = true
                    break;
                case "s":
                    this.reverse = true
                    this.forward = false
                    break;
            }
            // console.table(this)
        }

        document.onkeyup = (e) => {
            switch(e.key){
                case "ArrowLeft" || "a":
                    this.left = false
                    break;
                case "ArrowRight" || "d":
                    this.right = false
                    break;
                case "ArrowUp" || "w":
                    this.forward = false
                    break;
                case "ArrowDown" || "s":
                    this.reverse = false
                    break;
                case "a":
                    this.left = false
                    break;
                case "d":
                    this.right = false
                    break;
                case "w":
                    this.forward = false
                    break;
                case "s":
                    this.reverse = false
                    break;
            }
            // console.table(this)
        }
    }
}