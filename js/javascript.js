const wrapper = document.querySelector('.wrapper');
const  question = document.querySelector('.question');
const yesbtn = document.querySelector('.yes-btn');
const nobtn = document.querySelector('.no-btn');
const wrapperRect = wrapper.getBoundingClientRect();
const noBTnREct = nobtn.getBoundingClientRect();
yesbtn.addEventListener('click', () => {
  question.innerHTML = "I love YOu Too"
});
nobtn.addEventListener('mouseover', () => {
  const i = Math.floor(Math.random()*
  (wrapperRect.width - noBTnREct.width)) + 1;
  const j = Math.floor(Math.random() * (wrapperRect.height - noBTnREct.height)) + 1;
  nobtn.style.left = i + 'px';
  nobtn.style.top = j + 'px';

});

