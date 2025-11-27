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
        if (!((this.snake.body.length >1)&&((event.key ==="ArrowUp"&&this.direction ==="ArrowDown") ||(event.key ==="ArrowDown"&&this.direction ==="ArrowUp")||(event.key ==="ArrowLeft"&&this.direction ==="ArrowRight")||(event.key ==="ArrowRight"&&this.direction ==="ArrowLeft")))){
            this.direction = event.key;
        }
        
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
        this.checkEat(X,Y);
        this.snake.moveBody();
        try {
            this.snake.x = X;
            this.snake.y = Y;
            this.snake.checkHeadBody(X,Y);
        } catch (e:any) {
            alert(e.message);
            this.isLive=false;
        }
        //定时器
        this.isLive&&setTimeout(this.run.bind(this),300-(this.scorePanel.level-1)*3)

    }
    // checkeat
    checkEat(x:number,y:number){
        if(x === this.food.x&&y === this.food.y){
            this.food.change();
            this.scorePanel.addScore();
            this.snake.addBody();           
        }
    }

    

    
}
export default GameControl;