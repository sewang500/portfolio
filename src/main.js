'use strict'

const header = document.querySelector('.header');
const headerHeight = header.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
  if(window.scrollY > headerHeight)
    header.classList.add('header_dark');
  else
    header.classList.remove('header_dark');
});

//home section 아래로 스크롤 시 투명 처리
const home = document.querySelector('.home_container');
const homeHight = home.offsetHeight;
document.addEventListener('scroll', () => {
  home.style.opacity = 1 - window.scrollY / homeHight;
});

//arrow up 버튼을 아래로 스크롤 시 투명 처리
const arrowUp = document.querySelector('.arrow_up');
document.addEventListener('scroll', () => {
  if(window.scrollY > homeHight / 2)
    arrowUp.style.opacity = 1;
  else
    arrowUp.style.opacity = 0;
});

//nav bar 토글 클릭 처리
const navbarMenu = document.querySelector('.header_menu');
const navbarToggle = document.querySelector('.header_toggle');
navbarToggle.addEventListener('click', () => {
  navbarMenu.classList.toggle('open')
})

//nav bar 메뉴 클릭 시 메뉴를 자동 닫음
navbarMenu.addEventListener('click', () => {
  navbarMenu.classList.remove('open');
});