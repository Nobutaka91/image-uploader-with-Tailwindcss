let background = document.querySelector('#background');
console.log(background);
let bgInput = document.querySelector('#bgfile');
console.log(bgInput);
console.log(bgInput.files);

bgInput.addEventListener('change', () => {
  background.src = '../public/images/' + bgInput.files[0];
  console.log(bgInput.files[0]);
});
