'use strict'

//프로젝트 필터링 처리
const categories = document.querySelector('.categories');
const projects = document.querySelectorAll('.project');
const projectContainer = document.querySelector('.projects');
categories.addEventListener('click', (event)=>{
  const filter = event.target.dataset.category;
  if(filter == null){
    return;
  }

//액티브 메뉴 재설정
const active = document.querySelector('.category_selected');
active.classList.remove('category_selected');
event.target.classList.add('category_selected');

//프로젝트 필터링
  projects.forEach(project => {
    if(filter === 'all' || filter === project.dataset.type){
      project.style.display = 'block';
    } else {
      project.style.display = 'none';
    }
  })

  projectContainer.classList.add('anim_out');

  setTimeout(() => {
    projectContainer.classList.remove('anim_out');
  }, 250);

})