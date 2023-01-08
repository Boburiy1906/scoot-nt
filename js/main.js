const headerToggleBtn = document.querySelector(".toggler__button");
const headerInnerWrapper = document.querySelector(".header__inner-wrapper");
const headerInnerWrapperBtn = document.querySelector(".toggler__button-close");

headerToggleBtn.addEventListener('click', function(){
  headerInnerWrapper.classList.add(".show__nav");
});

headerInnerWrapperBtn.addEventListener('click', function(){
  headerInnerWrapper.classList.remove(".show__nav");
});