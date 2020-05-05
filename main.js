const textElements = document.getElementsByClassName('text-color');
const home = document.getElementById('home');
const aboutMe = document.getElementById('about-me');
const projects = document.getElementById('projects');
const nav = document.querySelector('nav');
const bird = document.querySelector('.bird');

const resolveLater = async n => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, n);
    });
}

const isInViewport = elem => {
    const bounding = elem.getBoundingClientRect();
    const height = (window.innerHeight || document.documentElement.clientHeight);
    const epsilon = 300;
    return bounding.top >= -epsilon && bounding.bottom <= height + epsilon;
}

const setColors = (backgroundColor, color) => {
    for(let i = 0; i < textElements.length; i++) {
        textElements[i].style.color = color;
    }
    document.body.style.backgroundColor = backgroundColor;
    nav.style.backgroundColor = backgroundColor;
    nav.style.borderBottom = `dashed 4px ${color}`;
}

window.addEventListener('scroll', () => {
    if(isInViewport(home)) {
        setColors('white', 'black');
    }
    else if(isInViewport(aboutMe)) {
        setColors('black', 'white');
    } else {
        setColors('white', 'black');
    }
});

setInterval(() => {
    if(bird.getAttribute("src") == "images/1.png") {
      bird.setAttribute("src", "images/2.png"); 
    }
    else {
      bird.setAttribute("src", "images/1.png");  
    }
  }, 250);