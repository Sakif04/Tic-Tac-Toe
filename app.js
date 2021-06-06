class Box{
    constructor(boxnumber){
        this.boxnumber=boxnumber;
    }
    create() {
        for(let i=0;i<this.boxnumber;i++)
        {   const box=document.createElement('div');
            box.id=i;
            box.className='box';
            const game=document.querySelector('.board');
            game.appendChild(box);
        }
        
    }
}

let indicesO=[];
let indicesX=[];
let winCombo=[[0,4,8],[2,4,6],[0,1,2],[2,5,8],[0,3,6],[1,4,7],[3,4,5],[6,7,8]];
class Game{
    constructor(turn){
        this.turn=turn;
    }
    start(){
        this.removeBoxes();
        let ninebox=new Box(9);
        ninebox.create();
        this.clickEffects();
    }
    removeBoxes(){const restartbtn=document.querySelector('.restart-button');
        restartbtn.classList.remove('active');
        let boxes=Array.from(document.querySelectorAll('.box'));
        boxes.forEach(box=>box.remove())
    }
    clickEffects(){
        const effects=(indices,changedTurn,changedPlayer,classType,box)=>{
            console.log(this);
            indices.push(parseInt(box.id));
            box.classList.add(classType);
            this.turn=changedTurn;
            player=changedPlayer;
            if(this.checkWin()) console.log('plyr won');
            this.isDraw()? this.displayDraw():null;
            turn.textContent= `Player Turn: ${player}`;
            console.log(indices);
        }
        const clicked=(e)=>{
            let box=e.target;
            if(!box.classList.contains('circle')&&!box.classList.contains('x')){
                if(this.turn=='O') {
                    effects(indicesO,'X','Player 2','circle',box);
                }
                else{
                    effects(indicesX,'O','Player 1','x',box);
                } 
            } 
        }
        const boxes=Array.from(document.querySelectorAll('.box'));
        boxes.forEach((box)=>box.addEventListener('click',clicked));
    }
    isDraw(){
        const xclass='x';
        const oclass='circle';
        let boxes=Array.from(document.querySelectorAll('.box'));
        if (boxes.every((box)=>box.classList.contains(xclass) ||box.classList.contains(oclass))){
            return true;
        }
        else return false;
    }
    displayDraw(){
        this.endGame();
    }
    checkWin(){ 
        if (this.turn==='O'){
           console.log(winCombo.some(combo=> combo.every(el=>indicesO.includes(el))))
        }
        else{
           console.log(winCombo.some(combo=> combo.every(el=> indicesX.includes(el))))
        }    
    }
    endGame(){
        const restartbtn=document.querySelector('.restart-button');
        restartbtn.classList.add('active');
    }
}
const turn=document.querySelector('#turn');
let player='Player 1'
let newgame=new Game('O')
newgame.start();
