const textElements = document.getElementsByClassName('text-color');
const home = document.getElementById('home');
const aboutMe = document.getElementById('about-me');
const projects = document.getElementById('projects');
const nav = document.querySelector('nav');
const bird = document.querySelector('.bird');
const photo = document.querySelector('.responsive');

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
    const epsilon = 350;
    return bounding.top >= -epsilon && bounding.bottom <= height + epsilon;
}

const setColors = (backgroundColor, color) => {
    for(let i = 0; i < textElements.length; i++)
        textElements[i].style.color = color;
    document.body.style.backgroundColor = backgroundColor;
    nav.style.backgroundColor = backgroundColor;
    nav.style.borderBottom = `dashed 4px ${color}`;
}

window.addEventListener('scroll', () => {
    if(isInViewport(home)) {
        setColors('white', 'black');
        photo.style.opacity = 0;
    }
    else if(isInViewport(aboutMe)) {
        setColors('black', 'white');
        photo.style.opacity = 1;
    }
    else if(isInViewport(projects)) {
        setColors('black', 'white');
        photo.style.opacity = 0;
    }
    else {
        setColors('white', 'black');
        photo.style.opacity = 0;
    }
});

setInterval(() => {
    if(bird.getAttribute("src") == "images/1.png")
        bird.setAttribute("src", "images/2.png"); 
    else
        bird.setAttribute("src", "images/1.png");  
}, 250);