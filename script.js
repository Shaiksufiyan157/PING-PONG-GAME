const p1={
    score:0,
    button:document.querySelector('#btn1'),
    display:document.querySelector('#score1')
}
const p2={
    score:0,
    button:document.querySelector('#btn2'),
    display:document.querySelector('#score2')
}
const reset=document.querySelector('#reset')
const selectmaxlimit=document.querySelector('#maxlimit')
let winningscore;
let gameover=false;
function updatescore(player,opponent){
    if(!gameover){
        player.score+=1;
        if(winningscore===player.score){
            gameover=true;
            player.display.classList.add('has-text-success')
            opponent.display.classList.add('has-text-danger')
            player.button.disabled=true;
            opponent.button.disabled=true;
        }
        player.display.textContent=player.score
    }
}





p1.button.addEventListener('click',function(){
 updatescore(p1,p2)
  })
p2.button.addEventListener('click',function(){
    updatescore(p1,p2)
  })
selectmaxlimit.addEventListener('change',function(){
    winningscore=parseInt(this.value)
    resetIt()
    })
  reset.addEventListener('click',resetIt)
  function resetIt() {
        gameover=false;
        p1.score=0;
        p2.score=0;
        p1.display.textContent=p1.score;
        p2.display.textContent=p2.score;
        p1.button.disabled=false
        p2.button.disabled=false
        p1.display.classList.remove('has-text-success','has-text-danger')
        p2.display.classList.remove('has-text-success','has-text-danger')
    }
  