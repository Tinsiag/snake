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
        this.head.style.left = value +'';
    }

    set y(value:number){
        this.head.style.top = value +'';
    }
    addBody(){
        this.element.insertAdjacentHTML("beforeend","<div></div>");
    }
    
}