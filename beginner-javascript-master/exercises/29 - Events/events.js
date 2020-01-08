const butts = document.querySelector('.butts');
const coolButton = document.querySelector('.cool');

function handleClick() {
  console.log('🐛it got clicked🐛');
}

const hooray = () => console.log('🐛Hooray🐛');

butts.addEventListener('click', function() {
  console.log('Im an anon');
});
coolButton.addEventListener('click', hooray);

butts.removeEventListener('click', handleClick);

// List on multiple items.
const buyButtons = document.querySelectorAll('button.buy');

function handleBuyButtonClick(event) {
  console.log('You Clicked a button');
  const button = event.target;
  console.log(button.textContent);
  // console.log('You are buying it!!');
  // console.log(parseFloat(event.target.dataset.price));
  console.log(event.target);
  console.log(event.currentTarget);
  console.log(event.target === event.currentTarget);
  // Stop this event from bubbling up
  // event.stopPropagation();
}

buyButtons.forEach(function(buyButton) {
  buyButton.addEventListener('click', handleBuyButtonClick);
});

window.addEventListener(
  'click',
  function(event) {
    console.log('you clicked the window');
    console.log(event.target);
    console.log(event.type);
    console.log(event.bubbles);
  },
  { capture: true }
);
