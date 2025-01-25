document.addEventListener("DOMContentLoaded", function() {
    console.log("Portfolio loaded!");
});

// Hàm hiển thị nội dung tương ứng khi nhấn menu
function showSection(sectionId) {
    // Ẩn tất cả các phần
    document.querySelectorAll('.container').forEach(section => {
        section.style.display = 'none';
    });

    // Hiển thị phần được chọn
    document.getElementById(sectionId).style.display = 'block';
}
