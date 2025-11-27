class Snake{
    element:HTMLElement;
    head:HTMLElement;
    body:HTMLCollection;// collection
    constructor(){
        this.element = document.getElementById('snake')!;
        this.head = document.querySelector('#snake > div') as HTMLElement;
        this.body = this.element.getElementsByTagName('div');
    }
    get x(){
        return this.head.offsetLeft;
    }
    get y(){
        return this.head.offsetTop;
    }
    set x(value:number){
        if (this.x===value){
            return;
        }

        if (value<0 ||value>304){
            throw new Error('撞墙了')
        }
        this.head.style.left = value +'px';
        this.checkHeadBody();
    }

    set y(value:number){
        if(this.y === value){
            return;
        }

        if (value<0 ||value>304){
            throw new Error('撞墙了')
        }

        this.head.style.top = value +'px';
        this.checkHeadBody();
    
    }
    addBody(){
        this.element.insertAdjacentHTML("beforeend","<div></div>");
    }
    moveBody(){
        for(let i =this.body.length-1;i>0;i--){
            let X = (this.body[i-1] as HTMLElement).offsetLeft;
            let Y = (this.body[i-1] as HTMLElement).offsetTop;
            (this.body[i] as HTMLElement).style.left =X +'px';
            (this.body[i] as HTMLElement).style.top = Y +'px';
        }
        

    }
    checkHeadBody(){
        for (let i = 4 ;i<this.body.length;i++){
            let hd = this.body[i] as HTMLElement;
            if(hd.offsetLeft == this.x &&hd.offsetTop === this.y ){
                throw new Error("撞身体");
            }
        }
    }
    
}
export default Snake;