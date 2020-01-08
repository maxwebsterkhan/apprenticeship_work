console.log('it works');

const myParagraph = document.createElement('p');
myParagraph.textContent = 'I am a P';
myParagraph.classList.add('special');
console.log(myParagraph);

const myImage = document.createElement('img');
myImage.src = 'https://picsum.photos/500';
myImage.alt = 'Nice photo';

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');
console.log(myDiv);

myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);

document.body.appendChild(myDiv);

const heading = document.createElement('h2');
heading.textContent = 'Cool Things';
myDiv.insertAdjacentElement('beforebegin', heading);

const myUl = document.createElement('ul');
const myLi = document.createElement('li');
myLi.textContent = 'List item 3';

myUl.appendChild(myLi);

document.body.insertAdjacentElement('afterbegin', myUl);

const li5 = document.createElement('li');
li5.textContent = 'Five';
myUl.append(li5);

const li1 = li5.cloneNode(true);
li1.textContent = 'One';
myUl.insertAdjacentElement('afterbegin', li1);

const li4 = document.createElement('li');
li4.textContent = 'Four';
li5.insertAdjacentElement('beforebegin', li4);

const li2 = document.createElement('li');
li2.textContent = 'two';
myLi.insertAdjacentElement('beforebegin', li2);
