// Your code goes here
const doc = document;

//Mouseover italic
const header = doc.querySelector('.intro img');

header.addEventListener('mouseover', (event) => {
    event. stopPropagation();
    event.target.style.fontWeight = 'italic';
});

//keydown listener

doc.addEventListener('keydown', (event) => {
    const keydown = event.key;
    alert
});


