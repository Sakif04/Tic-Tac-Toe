
class Box{
    constructor(boxnumber){
        this.boxnumber=boxnumber;
    }
    create() {
        for(let i=0;i<this.boxnumber;i++){
    const box=document.createElement('div');
    box.id=i;
    // const cell=document.createElement('div');
    // cell.textContent="O";
    box.className='box';
    const game=document.querySelector('.board');
    game.appendChild(box);}
    }
}
let indices=[];

class Game{
    constructor(turn){
        this.turn=turn;
    }
    start(){
        let ninebox=new Box(9);
        ninebox.create();
        const boxes=document.querySelectorAll('.box');
        let clicked=(e)=>{
            let box=e.target;
            if(!box.classList.contains('circle')&&!box.classList.contains('x')){
                if(this.turn==='O') {
                    console.log(this);
                    indices.push(box.id);
                    box.classList.add('circle');
                    this.turn='X';
                    player="Player 2";
                    turn.textContent= `Player Turn: ${player}`
                    
                }
                else{
                    console.log(this);
                    indices.push(box.id);
                    box.classList.add('x');
                    this.turn="O";
                    player="Player 1";
                    turn.textContent= `Player Turn: ${player}`
                   
                } 
        } 
    }
        boxes.forEach((box)=>
        box.addEventListener('click',clicked))
        
       

    }
    restart(){
        const restartbtn=document.querySelector('restart-button');
        restartbtn.classList.toggle(active);
    }
}
const turn=document.querySelector('#turn');
let player='Player 1'
let newgame=new Game('O')
newgame.start();
