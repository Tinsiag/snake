class ScorePanel{
    score = 0;
    level = 1;
    scoreEle : HTMLElement;
    levelEle : HTMLElement;
    maxLevel : number;
    constructor(maxLevel:number =10){
        this.levelEle = document.getElementById('level')!;
        this.scoreEle = document.getElementById('score')!;
        this.maxLevel = maxLevel;
    }
    addScore(){
        this.score++;
        this.scoreEle.innerHTML = this.score +'';
        if(this.score %10 === 0){
            this.levelUp();
        }
    }
    levelUp(){
        if (this.level < this.maxLevel){
            this.level++;
            this.levelEle.innerHTML = this.level+ '';

        }

    }

    
}
export default ScorePanel;

