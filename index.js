'use strict';

const entities = [
    {
        city: 'Rostov-on-Don<br/> LCD admiral',
        time: '3.5 months',
        area: '81 m2',
        img: '/images/project-image-1.png',
        alt: 'project-1'
    },
    {
        city: 'Sochi<br/> Thieves',
        time: '4 months',
        area: '105 m2',
        img: '/images/project-image-2.png',
        alt: 'project-2'
    },
    {
        city: 'Rostov-on-Don<br/> Patriotic',
        time: '3 months',
        area: '93 m2',
        img: '/images/project-image-3.png',
        alt: 'project-3'
    }
];

const city = document.getElementById('city'),
	  time = document.getElementById('time'),
	  area = document.getElementById('area'),
      img = document.getElementById('img'),
      imgMob = document.querySelector('.projects-image-mobile__item'),
      listLinks = document.querySelector('.projects-slider'),
      links = document.querySelectorAll('.projects-slider__link'),
      radios = document.querySelector('.arrows'),
      radio = document.querySelectorAll('.radio'),
      prev = document.querySelector('.projects-arrow__left'),
      next = document.querySelector('.projects-arrow__right'),
      prevMob = document.querySelector('.projects-image-mobile-left'),
      nextMob = document.querySelector('.projects-image-mobile-right');

let currentIndex = 0;

const setEntity = (index) => {
	city.innerHTML = entities[index].city;
	time.innerText = entities[index].time;
	area.innerText = entities[index].area;
           img.src = entities[index].img;
        imgMob.src = entities[index].img;
           img.alt = entities[index].alt;
};

const removeStyles = () => {
    links[currentIndex].classList.remove('projects-slider__select');
    radio[currentIndex].classList.remove('radio__checked');
};

const addStyles = () => {
    links[currentIndex].classList.add('projects-slider__select');
    radio[currentIndex].classList.add('radio__checked');
};

listLinks.addEventListener('click', (event) => {
	if (event.target.nodeName === 'A') {
        console.log(currentIndex+'------');
        let value = event.target.attributes[1].value;
        removeStyles();
        currentIndex = value;
        addStyles();
        setEntity(currentIndex);
        console.log('------'+currentIndex);
	}
});

radios.addEventListener('click', (event) => {
    if (event.target.nodeName === 'INPUT') {
        console.log(currentIndex+'------');
        let value = event.target.value;
        removeStyles();
        currentIndex = value;
        addStyles();
        setEntity(currentIndex);
        console.log('------'+currentIndex);
    }
});

const prevFunc = () => {
    console.log(currentIndex+'------');
    removeStyles(currentIndex);
    currentIndex -= 1;
    if (currentIndex < 0) {
        currentIndex = 2;
    }
    addStyles();
    setEntity(currentIndex);
    console.log('------'+currentIndex);
};

const nextFunc = () => {
    console.log(currentIndex+'------');
    removeStyles(currentIndex);
    currentIndex += 1;
    if (currentIndex > 2) {
        currentIndex = 0;
    }
    addStyles();
    setEntity(currentIndex);
    console.log('------'+currentIndex);
};

prev.addEventListener('click', prevFunc);
prevMob.addEventListener('click', prevFunc);
next.addEventListener('click', nextFunc);
nextMob.addEventListener('click', nextFunc);