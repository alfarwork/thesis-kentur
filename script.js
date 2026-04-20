const startScreen = document.getElementById('start-screen');
const rickImage = document.getElementById('rick-image');
const rickAudio = document.getElementById('rick-audio');

const fileAudio = 'kicau-mania.ogg';          
const fileGifBergerak = 'kicau.gif';    
const fileGambarDiam = 'image.png';    

startScreen.addEventListener('click', () => {
    startScreen.style.display = 'none'; 
    rickImage.style.display = 'block';  
    playRickRoll();
});

function playRickRoll() {
    rickImage.src = fileGifBergerak; 
    rickAudio.currentTime = 0;       
    rickAudio.play();                
}

rickAudio.addEventListener('ended', () => {
    rickImage.src = fileGambarDiam;  
});

rickImage.addEventListener('click', () => {
    if (rickAudio.paused) {
        playRickRoll();
    }
});
