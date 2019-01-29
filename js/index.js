const body = document.querySelector('body')
const header = document.querySelector('.main-navigation');
const h1 = document.querySelector('h1');
const h2 = document.querySelectorAll('h2');
const h4 = document.querySelectorAll('h4')
const imgs = document.querySelectorAll('img');
const someText = document.querySelectorAll('p');
const navItems = document.querySelectorAll('nav a');

 window.addEventListener('load', () => {
	alert('You are the 1 millionth visitor! Claim your free vacation!');
});

header.addEventListener('dblclick', e => {
    header.style.background = "grey";
})

navItems.forEach((e) =>
	e.addEventListener('click', e => {
		e.preventDefault();
		console.log('Default prevented');
	})
);


window.addEventListener('scroll', e => {
    console.log('this is the scariest website ever')
});

body.addEventListener('keydown', e => {
    body.style.background = 'lightgrey';
});

body.addEventListener('select', e => {
    body.style.background = 'grey';
});

h1.addEventListener('click', () => {
    h1.textContent = 'Scary Bus';
    h1.style.color = 'red';
});

h2[0].addEventListener('click', () => {
    h2[0].textContent = 'This Is The Scary Bus';
    h2[0].style.color = 'red';
});

h2[1].addEventListener('click', () => {
    h2[1].textContent = 'You Can\'t Leave';
    h2[1].style.color = 'red';
});

h2[2].addEventListener('click', () => {
    h2[2].textContent = 'Your Death Awaits';
    h2[2].style.color = 'red';
});

h2[3].addEventListener('click', () => {
    h2[3].textContent = 'Pick Your Destruction';
    h2[3].style.color = 'red';
});

h4[0].addEventListener('click', () => {
    h4[0].textContent = 'Fun In The Fire';
    h4[0].style.color = 'red';
});

h4[1].addEventListener('click', () => {
    h4[1].textContent = 'Excorcists Excursion';
    h4[1].style.color = 'red';
});

h4[2].addEventListener('click', () => {
    h4[2].textContent = 'You Can\'t Get Away';
    h4[2].style.color = 'red';
});

imgs[0].addEventListener('mouseover', e => {
    imgs[0].setAttribute('src', "img/scary-bus.png");
    imgs[0].addEventListener('mouseout', e => {
        imgs[0].setAttribute('src', 'img/fun-bus.jpg')
    });
});

imgs[0].addEventListener('click', e => {
    alert('Oh no, this page is not what is seems! Click on this page\'s text to see what really is going on!');
    e.stopPropagation();
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
    someText[0].style.color = 'red';
    someText[0].textContent = '". . . And so they came at last deep into the glen; and there stood a sheer wall of rock, and in the wall the Dark Bus gaped before them like the mouth of night. Signs and figures were carved above its wide arch too dim to read, and fear flowed from it like a grey vapour. . . This is an evil bus...and my death lies beyond it. . .'
});

someText[1].addEventListener('click', e => {
    someText[1].style.color = 'red';
    someText[1].textContent = 'Abandon hope all ye who enter here... this makes Dante\'s comedy look cute and funny. You\'ll regret the day you got behind the wheel of this vehicle';
});

someText[2].addEventListener('click', e => {
    someText[2].style.color = 'red';
    someText[2].textContent = 'Wendy, darling, light of my life, I’m not gonna hurt you. I’m just gonna bash your brains in...';
});

someText[3].addEventListener('click', e => {
    someText[3].style.color = 'red';
    someText[3].textContent = 'Listen to them, the children of the night. What music they make!'
});

someText[4].addEventListener('click', e => {
    someText[4].style.color = 'red';
    someText[4].textContent = 'Sometimes the things in our heads are far worse than anything they could put in books or on film.'
});

someText[5].addEventListener('click', e => {
    someText[5].style.color = 'red';
    someText[5].textContent = 'The greatest trick the devil pulled was convincing the world there was only one of him.'
});

someText[6].addEventListener('click', e => {
    someText[6].style.color = 'red';
    someText[6].textContent = 'There are many choices for your demise. One of them being the unquenchable flames of Hades. Styx will drive your bus right to the shore of this lake of brimstone.'
});

someText[7].addEventListener('click', e => {
    someText[7].style.color = 'red';
    someText[7].textContent = 'You may want to rid yourself of all the demons that you\'ll surely encounter. We charge per demon, but our professionals are sure to get the job done.'
});

someText[8].addEventListener('click', e => {
    someText[8].style.color = 'red';
    someText[8].textContent = 'We hope you enjoy your stay because there is no way to return. Make yourself at home, because this is the eternal pit of destruction. At least you will have neighbors. In fact, your Mother-in-Law will soon be moving in next door.'
});
