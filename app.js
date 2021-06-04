
class Box{
    constructor(boxnumber){
        this.boxnumber=boxnumber;
    }
    create() {
        for(let i=0;i<this.boxnumber;i++){
    const box=document.createElement('div');
    // const cell=document.createElement('div');
    // cell.textContent="O";
    box.className='box';
    const game=document.querySelector('.board');
    game.appendChild(box);}
    }
}

class Game{
    constructor(turn){
        this.turn=turn;
    }
    start(){
        let ninebox=new Box(9);
        ninebox.create();
        const boxes=document.querySelectorAll('.box');
        boxes.forEach((box)=>
        box.addEventListener('click',clicked))
        function clicked(e){
            let box=e.target;
            if(box.hasChildNodes()==false){
                box.classList.add('x');
            }
            console.log('i am clicked',box);
        }

    }
restart(){
const restartbtn=document.querySelector('restart-button');
}
}
let newgame=new Game('O')
window.onload=newgame.start();
