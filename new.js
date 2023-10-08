const canvas = document.querySelector('#canva1')
const context = canvas.getContext('2d');
const canvasHeigth = canvas.height = 600
const canvasWidth = canvas.width = 600
let spriteWidth = 799
let spriteHeight = 740
let gameFrame = 1
let frameRate = 7

const playerImage = new Image();
playerImage.src = 'Photos/punch.png';
context.drawImage(playerImage,0,0 )
let frameX = 0
let spriteLength = 9

function animate() {
   
    // let position = Math.floor((gameFrame/frameRate)%frameLength)
    
    
    context.clearRect(0,0,canvasWidth, canvasHeigth)
        context.drawImage(playerImage, frameX*spriteWidth,0,spriteWidth,spriteHeight, 0, 0, 600,600);
    if (gameFrame % frameRate == 0 ) {
        if (frameX < spriteLength) {
            frameX++
        }else{frameX = 0}   
    }gameFrame++
    
    requestAnimationFrame(animate)
        
}
animate()