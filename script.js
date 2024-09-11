const backgroundMusic = new Audio('nhacnen.mp3');
backgroundMusic.volume = 0.5; 
backgroundMusic.loop = true; 
backgroundMusic.play(); 

document.getElementById('playButton').addEventListener('click', function() {
    const playButton = this;
    const heartImage = document.getElementById('heartImage');
    
    // Play âm thanh khi nhấn nút "Play"
    const clickSound = new Audio('click.mp3');
    clickSound.play();

  
    playButton.classList.add('explode');
    

    heartImage.src = 'traitimimage.png'; 
    

    setTimeout(() => {
        heartImage.style.display = 'block';
        heartImage.classList.add('showHeart');
    }, 500);
});

document.getElementById('heartImage').addEventListener('click', function() {
    const heartImage = this;
    

    const cuteSound = new Audio('cute.mp3');
    cuteSound.play();


    heartImage.classList.add('bounce');
    setTimeout(() => {
        heartImage.classList.remove('bounce');
    }, 500); 
});
