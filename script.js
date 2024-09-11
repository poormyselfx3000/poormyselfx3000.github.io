document.getElementById('playButton').addEventListener('click', function() {
    const heartImage = document.getElementById('heartImage');
    // Thay link hình trái tim của bạn vào đây
    heartImage.src = 'https://img5.thuthuatphanmem.vn/uploads/2021/07/17/anh-icon-trai-tim-ghep-anh_054623143.png'; 
    heartImage.style.display = 'block';
});

document.getElementById('heartImage').addEventListener('click', function() {
    this.classList.add('bounce');
    setTimeout(() => {
        this.classList.remove('bounce');
    }, 500); // Thời gian hoạt hình 0.5 giây
});
