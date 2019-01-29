const header = document.querySelector('.main-navigation');
const heading = document.querySelector('h1');
const imgs = document.querySelectorAll('img');
const someText = document.querySelectorAll('p');
const navItems = document.querySelectorAll('nav a');

//  window.addEventListener('load', () => {
// 	alert('You are the 1 millionth visitor! Claim your free vacation!');
// });




 heading.addEventListener('mouseover', () => {
});

 heading.addEventListener('click', () => {
    heading.textContent = 'Scary Bus';
    heading.style.color = 'red';
});

 header.addEventListener('dblclick', () => {
	header.style.backgroundColor = 'palevioletred';
});

 imgs[0].addEventListener('mouseover', e => {
     imgs[0].addEventListener('click', e => {
         alert('Oh no, this page is not what is seems! Click on this page\'s text to see what really is going on!');
     })
    imgs[0].setAttribute('src', "img/scary-bus.png");
    imgs[0].addEventListener('mouseout', e => {
        imgs[0].setAttribute('src', 'img/fun-bus.jpg')
    });
});

imgs[1].addEventListener('mouseover', e => {
   imgs[1].setAttribute('src', 'img/scareventure.png');
   imgs[1].addEventListener('mouseout', e => {
       imgs[1].setAttribute('src', 'img/adventure.jpg')
   });
});

imgs[2].addEventListener('mouseover', e => {
    imgs[2].setAttribute('src', 'img/scary.png');
    imgs[2].addEventListener('mouseout', e => {
        imgs[2].setAttribute('src', 'img/fun.jpg')
    });
 });

 imgs[3].addEventListener('mouseover', e => {
    imgs[3].setAttribute('src', 'img/stay-away.png');
    imgs[3].addEventListener('mouseout', e => {
        imgs[3].setAttribute('src', 'img/destination.jpg')
    });
 });


someText[0].addEventListener('click', e => {
    someText[0].style.color = 'red'
});

someText[1].addEventListener('click', e => {
    someText[1].style.color = 'red'
    someText[1].textContent = 'why did you click'
});

someText[2].addEventListener('click', e => {
    someText[2].style.color = 'red'
});

someText[3].addEventListener('click', e => {
    someText[3].style.color = 'red'
});

someText[4].addEventListener('click', e => {
    someText[4].style.color = 'red'
});

someText[5].addEventListener('click', e => {
    someText[5].style.color = 'red'
});

someText[6].addEventListener('click', e => {
    someText[6].style.color = 'red'
});

someText[7].addEventListener('click', e => {
    someText[7].style.color = 'red'
});

someText[8].addEventListener('click', e => {
    someText[8].style.color = 'red'
});
