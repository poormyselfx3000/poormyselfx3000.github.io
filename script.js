const backgroundMusic = new Audio('nhacnen.mp3');
backgroundMusic.volume = 0.5; // Thiết lập âm lượng 50%
backgroundMusic.loop = true; // Lặp lại nhạc nền
backgroundMusic.play(); // Phát nhạc nền ngay khi tải trang

document.getElementById('playButton').addEventListener('click', function() {
    const playButton = this;
    const heartImage = document.getElementById('heartImage');
    
    // Play âm thanh khi nhấn nút "Play"
    const clickSound = new Audio('click.mp3');
    clickSound.play();

    // Thêm hiệu ứng "vỡ" cho nút
    playButton.classList.add('explode');
    
    // Sử dụng ảnh cục bộ "image.png"
    heartImage.src = 'traitimimage.png'; 
    
    // Hiển thị trái tim sau khi nút vỡ (khoảng 0.5s) với hiệu ứng lớn dần
    setTimeout(() => {
        heartImage.style.display = 'block';
        heartImage.classList.add('showHeart');
    }, 500);
});

document.getElementById('heartImage').addEventListener('click', function() {
    const heartImage = this;
    
    // Play âm thanh khi nhấn vào trái tim
    const cuteSound = new Audio('cute.mp3');
    cuteSound.play();

    // Hiệu ứng nhảy cho trái tim
    heartImage.classList.add('bounce');
    setTimeout(() => {
        heartImage.classList.remove('bounce');
    }, 500); // Thời gian hoạt hình 0.5 giây
});
