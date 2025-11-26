import Food from "./Food";
import ScorePanel from "./ScorePanel";
import Snake from "./Snake";
class GameControl{
    food :Food;
    scorePanel:ScorePanel;
    snake:Snake;
    direction :string = '';
    isLive =true;

    constructor(){
        this.food = new Food();
        this.scorePanel = new ScorePanel();
        this.snake  = new Snake();
        this.init();
    }
    init(){
        document.addEventListener('keydown',this.keydownHandler.bind(this));
        this.run();
    
    }
    keydownHandler(event: KeyboardEvent){
        
        this.direction = event.key;
        // console.log(this)
    }
    run(){
        let X = this.snake.x;
        let Y = this.snake.y;
        switch(this.direction){
            case "ArrowUp":
                Y-=10;
                break;
            case "ArrowDown":
                Y+=10;
                break;
            case "ArrowLeft":
                X-=10;
                break;
            case "ArrowRight":
                X +=10;
                break;
        }
        this.snake.x = X;
        this.snake.y = Y;
        //定时器
        this.isLive&&setTimeout(this.run.bind(this),300-(this.scorePanel.level-1)*3)

    }

    

    
}
export default GameControl;