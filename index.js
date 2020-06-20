const firstBtn = document.getElementById('btnOne');
const secondBtn = document.getElementById('btnTwo');
const thirdBtn = document.getElementById('btnThree');

const viewContainer = document.getElementById('viewContainer');

firstBtn.addEventListener('click', () => {
  const firstBtnBgColor = getComputedStyle(firstBtn);
  viewContainer.style.backgroundColor = firstBtnBgColor['background-color'];
})

secondBtn.addEventListener('click', () => {
  const secondBtnBgColor = getComputedStyle(secondBtn);
  viewContainer.style.backgroundColor = secondBtnBgColor['background-color'];
})

thirdBtn.addEventListener('click', () => {
  const thirdBtnBgColor = getComputedStyle(thirdBtn);
  viewContainer.style.backgroundColor = thirdBtnBgColor['background-color'];
})