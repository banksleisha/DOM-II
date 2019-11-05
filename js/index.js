// Your code goes here
const mouse = document.querySelector('.logo-heading');
const topContainer = document.querySelector('.intro .h2');
const imgSet = document.querySelector('.content-destination img');
const dblButtons = document.querySelectorAll('.btn');

//Mouseover 
mouse.addEventListener("mouseover", () =>{
    mouse.style.transform = "scale(1.5)";
    mouse.style.transition = "all 1s";
})
 
   

//keydown listener

document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    alert(`The use of ${keyName} is not allowed.`);
});


//wheel 

topContainer.addEventListener("wheel", ()=>{
    topContainer.style.backgroundColor = "purple";
});


//drag & drop



//load

window.addEventListener('load', () => {
    alert ("Welcome to the fun bus");
 });

//focus

//resize

window.addEventListener("resize", () => {
    // let header = document.querySelector('.main-navigation');
    // header.style.background = 'red';
    alert('You have changed the window size')
});


//scroll
let finalScrollPosition = 0;
let ticking = false;

function blahBlah(scroll_position){
console.log(finalScrollPosition);
}

window.addEventListener('scroll', function(e){
    finalScrollPosition = window.scrollY;

    if (!ticking){
        window.requestAnimationFrame(function(){
            blahBlah(finalScrollPosition);
            ticking = false;
        });

        ticking = true;
    }
});

//select

//dblclick

dblButtons.forEach(button => {
    button.addEventListener('dblclick', () => {
        alert ('Great choice!')
    });
});



