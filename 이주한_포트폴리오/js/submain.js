//aos
AOS.init({
  offset: 250,
  duration: 400,
});

// 메뉴바 스크롤시 배경 추가
const nav = document.querySelector('.menubar-box');
const navH = nav.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
  if (window.scrollY > navH) {
    nav.classList.add('active');
  } else {
    nav.classList.remove('active');
  }
});


const panels = document.querySelectorAll(".panel");

function toggleOpen() {
  if ([...this.classList].indexOf("active") >= 0) {
    this.classList.remove("active");
    return;
  }
  panels.forEach(panel => panel.classList.remove("active"));
  this.classList.toggle("active");
}

function toggleActive(e) {
  if (e.propertyName.includes("flex")) {
    this.classList.toggle("open");
  }
}
panels.forEach(panel => {
  panel.addEventListener("click", toggleOpen);
  panel.addEventListener("transitionend", toggleActive);
});