// 스크립트: 모바일에서 메뉴 링크 클릭 시 메뉴 닫기
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelectorAll('.nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // 링크를 클릭하면 체크박스를 해제하여 메뉴를 닫음
            if (window.innerWidth < 600) { // 모바일 크기에서만 작동하도록 조건 설정 (CSS 미디어 쿼리 기준과 동일)
                menuToggle.checked = false;
            }
        });
    });
});
