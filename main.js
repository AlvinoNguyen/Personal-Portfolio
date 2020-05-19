const textElements = document.getElementsByClassName('text-color');
const home = document.getElementById('home');
const aboutMe = document.getElementById('about-me');
const projects = document.getElementById('projects');
const nav = document.querySelector('nav');
const bird = document.querySelector('.bird');
const photo = document.querySelector('.responsive');
const icons = document.getElementsByClassName('icon');

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

const filterColor = color => {
    switch(color) {
        case 'white': return 'invert(100%)';
        case 'black': return 'none';
        default: return '';
    }
}

const setColors = (backgroundColor, color) => {
    for(let i = 0; i < textElements.length; i++)
        textElements[i].style.color = color;
    document.body.style.backgroundColor = backgroundColor;
    nav.style.backgroundColor = backgroundColor;
    nav.style.borderBottom = `dashed 4px ${color}`;
    for(let i = 0; i < icons.length; i++) {
        const icon = icons[i];
        icon.style.filter = filterColor(color);
    }
}

for(let i = 0; i < icons.length; i++) {
    const icon = icons[i];
    icon.addEventListener('mouseover', async (e) => {
        if(!e.target.style.animation) {
            e.target.style.animation = 'rotate .5s linear';
            await resolveLater(500);
            e.target.style.animation = '';
        }
    });
}

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