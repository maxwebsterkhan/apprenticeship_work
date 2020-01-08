// Make a div
const newDiv = document.createElement('div');
console.log(newDiv);

// add a class of wrapper to it
newDiv.classList.add('wrapper');
console.log(newDiv);

// put it into the body
document.body.appendChild(newDiv);

// make an unordered list
// add three list items with the words "one, two three" in them
const newUl = `<ul>
<li>one</li>
<li>two</li>
<li>three</li>
</ul>`;

// put that list into the above wrapper
newDiv.innerHTML = newUl;
console.log(newDiv);

// create an image
const newImg = document.createElement('img');
console.log(newImg);

// set the source to an image
newImg.src = 'https://i.ytimg.com/vi/p079QtWvf7o/maxresdefault.jpg';
console.log(newImg);

// set the width to 250
newImg.width = 250;
console.log(newImg);

// add a class of cute
newImg.classList.add('Image-class');
console.log(newImg);

// add an alt of Cute Puppy
newImg.alt = 'cute puppy';
console.log(newImg);

// Append that image to the wrapper
newDiv.appendChild(newImg);

// with HTML string, make a div, with two paragraphs inside of it
const myHTML = `
    <div>
      <p>Paragraph 1</p>
      <p>Paragraph 2</p>
    </div>
  `;
const ulElement = newDiv.querySelector('ul');
console.log(ulElement);

// put this div before the unordered list from above
ulElement.insertAdjacentHTML('beforebegin', myHTML);

// add a class to the second paragraph called warning

const myDiv = newDiv.querySelector('div');
myDiv.children[1].classList.add('warning');
console.log(myDiv);

// remove the first paragraph
myDiv.firstElementChild.remove();
console.log(myDiv);
// create a function called generatePlayerCard that takes in three arguments: name, age, and height
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>
function generatePlayerCard(name, age, height) {
  const html = `<div class="playerCard">
  <h2>${name} - ${age}</h2>
  <p>They are ${height} and ${age} years old. In Dog years this person would be ${age *
    7}. That would be a tall dog! <button class="delete type="button>&times; Delete</button></p>

  </div>`;
  return html;
}
console.log(generatePlayerCard);

// make a new div with a class of cards
const cards = document.createElement('div');
cards.classList.add('cards');
console.log(cards);

// Have that function make 4 cards
let cardsHTML = generatePlayerCard('Max', 26, 185);
cardsHTML += generatePlayerCard('Tom', 27, 185);
cardsHTML += generatePlayerCard('Luke', 29, 185);
cardsHTML += generatePlayerCard('Harry', 29, 185);
console.log(cardsHTML);

// append those cards to the div
cards.append(cardsHTML);
console.log(cards);

// put the div into the DOM just before the wrapper element
cards.innerHTML = cardsHTML;
myDiv.insertAdjacentElement('beforebegin', cards);

// Bonus, put a delete Button on each card so when you click it, the whole card is removed
// select all the buttons!
const buttons = document.querySelectorAll('.delete');
console.log(buttons);

// make out delete function
function deleteCard(event) {
  const buttonGotClicked = event.currentTarget;
  // buttonGotClicked.parentElement.remove();
  buttonGotClicked.closest('.playerCard').remove();
}
// loop over them and attach a listener
buttons.forEach(button => button.addEventListener('click', deleteCard));
