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
        this.player='Player 1';
        this.indicesO=[];
        this.indicesX=[];
        this.winCombo=[[0,4,8],[2,4,6],[0,1,2],[2,5,8],[0,3,6],[1,4,7],[3,4,5],[6,7,8]];
    }
    
    start(){
        this.removeBoxes();
        let ninebox=new Box(9);
        ninebox.create();
        this.clickEffects();
    }
    removeBoxes(){
        const winMsg=document.getElementById('win-msg');
        winMsg?winMsg.remove():null;
        const restartbtn=document.querySelector('.restart-button');
        restartbtn.classList.remove('active');
        let boxes=Array.from(document.querySelectorAll('.box'));
        boxes.forEach(box=>box.remove())
    }
    clickEffects(){
        const effects=(indices,changedTurn,changedPlayer,classType,box)=>{
            indices.push(parseInt(box.id));
            box.classList.add(classType);
            setTimeout(()=>(this.checkWin(indices))?this.win(this.player):null,50);
            this.turn=changedTurn;
            this.player=changedPlayer;
            this.isDraw()? this.displayDraw():null;
            console.log(this);
            turn.textContent= `Player Turn: ${player}`;
            
            
        }
        const clicked=(e)=>{
            
            let box=e.target;
            if(!box.classList.contains('circle')&&!box.classList.contains('x')){
                if(this.turn=='O') {
                    effects(this.indicesO,'X','Player 2','circle',box);
                }
                else{
                    effects(this.indicesX,'O','Player 1','x',box);
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
        const drawMsg=document.createElement('h1');
        drawMsg.id='msg';
        drawMsg.textContent=`DRAW`;
        const b_game=document.getElementById('game');
        b_game.append(drawMsg);
        this.endGame();
    }
    checkWin(indices){ 
           return this.winCombo.some(combo=> combo.every(el=>indices.includes(el)))
            
            
    }
    win(player){
        const winningMsg=document.createElement('h1');
        winningMsg.id='msg';
        winningMsg.textContent=`${player} WON`;
        const b_game=document.getElementById('game');
        b_game.append(winningMsg);
        this.endGame();
    }
      

    endGame(){
        const restartbtn=document.querySelector('.restart-button');
        restartbtn.classList.add('active');
        let boxes=Array.from(document.querySelectorAll('.box'));
        boxes.forEach(box=>box.classList.add('inactive'))
    }
    
}
const turn=document.querySelector('#turn');
let player='Player 1'
let newgame=new Game('O')
newgame.start();
