const item = document.querySelector('.item');

const width = 500;
const src = `https://picsum.photos/${width}`;
const desc = 'cute pup';
const myHTML = `
<div class='wrapper'>
<h2>Cute ${desc}</h2>
<img src="${src}" alt="${desc}"/>
</div>
`;

// turnb a string into a dom element
const myFragment = document.createRange().createContextualFragment(myHTML);

document.body.appendChild(myFragment);
