const signs = document.querySelector('.signs');
const gameOverEl = document.querySelector('.gameover');

const startBtn = signs.querySelector('.start');
const xSymbolBtn = signs.querySelector('.x');
const oSymbolBtn = signs.querySelector('.o');

const computerPlayBtn = document.querySelector('.computer');
const friendPlayBtn = document.querySelector('.friend');

const menuPanel = document.querySelector('.menu-container');
const gamePanel = document.querySelector('.game-container');

let vsPlayer;
const player = new Object;

function setActive(off, on){
    off.classList.remove('active');
    on.classList.add('active');
}


computerPlayBtn.addEventListener('click', () => {
    vsPlayer = 'computer';

    setActive(friendPlayBtn, computerPlayBtn);
    menuPanel.classList.add('hide');
    gamePanel.classList.remove('hide');
 });

 friendPlayBtn.addEventListener('click', () => {
     vsPlayer = 'friend';

     setActive(computerPlayBtn, friendPlayBtn);
     menuPanel.classList.add('hide');
     gamePanel.classList.remove('hide');
 });

 xSymbolBtn.addEventListener('click', () => {
     player.me = 'X';
     player.computer = 'O';
     player.friend = 'O';

     setActive(oSymbolBtn, xSymbolBtn);
 });

 oSymbolBtn.addEventListener('click', () => {
    player.me = 'O';
    player.computer = 'X';
    player.friend = 'X';

    setActive(xSymbolBtn, oSymbolBtn);
 });

 startBtn.addEventListener('click', () => {
   
    if( !player.me ){
        xSymbolBtn.style.backgroundColor = "#f00";
        oSymbolBtn.style.backgroundColor = "#f00";

        return;
    }

    //place on function which initialize game
    signs.classList.add('hide');

 });
