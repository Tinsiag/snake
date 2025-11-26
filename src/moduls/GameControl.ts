import Food from "./Food";
import ScorePanel from "./ScorePanel";
import Snake from "./Snake";
class GameControl{
    food :Food;
    scorePanel:ScorePanel;
    snake:Snake;
    direction :string = '';
    constructor(){
        this.food = new Food();
        this.scorePanel = new ScorePanel();
        this.snake  = new Snake();
        this.init();
    }
    init(){
        document.addEventListener('keydown',this.keydownHandler.bind(this));
    }
    keydownHandler(event: KeyboardEvent){
        if (event.key === "ArrowUp"||event.key === "ArrowDown"||event.key === "ArrowLeft"||event.key === "ArrowRight"){
            this.direction = event.key;
            // console.log(this);

        }
    }
    

    
}
export default GameControl;