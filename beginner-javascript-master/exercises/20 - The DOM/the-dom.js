/* const p = document.querySelector('p');
const imgs = document.querySelectorAll('.item img');
const item2 = document.querySelector('.item2');
const item2img = item2.querySelector('img');
const heading = document.querySelector('h2');
console.log(heading.textContent);
console.log(heading.innerText);
// heading.textContent = 'Max is cool';
// console.log(heading.textContent);
// console.log(heading.innerText);

console.log(heading.innerHTML);
console.log(heading.outerHTML);

const pizzaList = document.querySelector('.pizza');
console.log(pizzaList.textContent);

// pizzaList.textContent = `${pizzaList.textContent} 🍕🍕`;

pizzaList.insertAdjacentText('beforeend', '🍕🍕🍕🍕🍕');
*/

const pic = document.querySelector('.nice');
pic.classList.add('open');
pic.classList.remove('cool');

console.log(pic.classList);

function toggleRound() {
  pic.classList.toggle('round');
}
pic.addEventListener('click', toggleRound);

pic.alt = 'Cute Pup';
console.log(pic.alt);
console.log(pic.naturalWidth);
pic.width = 200;

// pic.setAttribute('alt', 'REALLY CUTE PUP');

// console.log(pic.getAttribute('alt'));

const custom = document.querySelector('.custom');
console.log(custom.dataset);

custom.addEventListener('click', function() {
  alert(`Welcome ${custom.dataset.name} ${custom.dataset.last}`);
});
