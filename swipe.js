// Порядок страниц для навигации
const PAGES = [
  'index.html',
  'pointDot.HTML', 
  'Pointcircle.html',
  'circle.html',
  'angle.html',
  '2line2.html'
];

// Определяем текущую страницу
let currentIndex = PAGES.indexOf(window.location.pathname.split('/').pop());

document.addEventListener('DOMContentLoaded', () => {
  // Добавляем класс для анимации
  document.body.classList.add('page-transition');
  
  // Обработчики touch событий
  let startX;
  
  document.addEventListener('touchstart', e => {
    startX = e.touches[0].clientX;
  }, {passive: true});

  document.addEventListener('touchmove', e => {
    if (!startX) return;
    const diff = startX - e.touches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) swipeTo('next');
      else swipeTo('prev');
      startX = null;
    }
  }, {passive: true});
});

function swipeTo(direction) {
  let newIndex;
  if (direction === 'next') {
    newIndex = (currentIndex + 1) % PAGES.length;
    document.body.classList.add('slide-left');
  } else {
    newIndex = (currentIndex - 1 + PAGES.length) % PAGES.length;
    document.body.classList.add('slide-right');
  }
  
  setTimeout(() => {
    window.location.href = PAGES[newIndex];
  }, 400);
}
