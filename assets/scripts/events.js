const button = document.querySelector('button');

//button.onclick = function() {

//};

const buttonClickHandler = e => {
  //e.target.disabled = true;
  console.log(e);
};

const anotherButtonClickHandler = () => {
  console.log('This was clicked!');
};

//button.onclick = buttonClickHandler;

const boundFn = buttonClickHandler.bind(this);

//button.addEventListener('click', buttonClickHandler);

//setTimeout(() => {
//  button.removeEventListener('click', buttonClickHandler);
//}, 2000);

/*buttons.forEach(btn => {
  btn.addEventListener('mouseenter', buttonClickHandler);
});

window.addEventListener('scroll', e => {
  console.log(e);
});*/

const form = document.querySelector('form');

form.addEventListener('submit', e => {
  event.preventDefault();
  console.log(e);
});

const div = document.querySelector('div');

div.addEventListener('click', e => {
  console.log('CLICKED DIV');
  console.log(e);
});

button.addEventListener('mouseenter', function (e) {
  e.stopPropagation();
  console.log('CLICKED BUTTON');
  console.log(e);
  console.log(this);
});

const listItems = document.querySelectorAll('li');
const list = document.querySelector('ul');

/*listItems.forEach(listItem => listItem.addEventListener('click', e => {
  e.target.classList.toggle('highlight');
}));*/

list.addEventListener('click', function (e) {
  //console.log(e.currentTarget);
  //e.target.classList.toggle('highlight')
  e.target.closest('li').classList.toggle('highlight');
  //form.submit();
  button.click();
});

