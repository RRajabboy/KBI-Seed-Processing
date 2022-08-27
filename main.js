/////////////////////////////////// scroll navbar ////////////////////////////////////

let navbar = document.getElementById('navbar')
setInterval(() => {
    if(window.scrollY >= 250) {
        navbar.classList.add('nav-none')
    }
    else {
        navbar.classList.remove('nav-none')
    }
})

///////////////////////////////// links open-close ///////////////////////////////////

let navLink = document.getElementById('nav-links')
let openLink = document.getElementById('open-links')
let closeLink = document.getElementById('close-links')

openLink.onclick = () => {
    navLink.classList.add('active')
}
closeLink.onclick = () => {
    navLink.classList.remove('active')
}

/////////////////////////////// link click /////////////////////////////////////

let link = document.querySelectorAll('.fullScreen .navbar .container .right .links .link')
let sort = document.getElementById('sort')
for (let i = 0; i < link.length; i++) {
    link[i].onclick = () => {
        link[i].classList.add('link-hover')
        navLink.classList.remove('active')
        for (let a = 0; a < link.length; a++) {
            if (i == a) {
                continue;
            }
            link[a].classList.remove('link-hover')
        }
    }
    if (link[i]) {
        
    }
}

///////////////////////////////// Link click scroll //////////
let section = document.querySelectorAll('.section')

window.onscroll = () => {
    navLink.classList.remove('active')
    section.forEach(sec => {
        let top = window.scrollY
        let height = sec.offsetHeight // scroll
        let offset = sec.offsetTop - 150;
        let id = sec.getAttribute('id')

        if(top >= offset && top < offset + height) {
            link.forEach(links => {
                links.classList.remove('link-hover')
                let s = document.querySelector('.fullScreen .navbar .container .right .links .link[href*='+id+']').classList.add('link-hover')
            })
        }
    })
}

////////////////////////////// reveal style ///////////////////////////////////
window.addEventListener('scroll', function reveal() {
    let reveals = document.querySelectorAll('.reveal')
    for(let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight
        let revealTop = reveals[i].getBoundingClientRect().top
        let revealPoint = 50;
        if(revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active')
        }
        else {
            reveals[i].classList.remove('active')
        }
    }
})

/////////////////////// Navbar responsive ////////////////////////
let yangi = document.createElement('div')
yangi.classList.add('flex')
    function myFunction(x) {
    if (x.matches) {
        document.getElementById('container').appendChild(yangi)
        yangi.appendChild(document.getElementById('box1'))
        yangi.appendChild(document.getElementById('box2'))
    }
    else {
        document.getElementById('container').appendChild(document.getElementById('box1'))
        document.getElementById('container').appendChild(document.getElementById('box2'))
    }
}

var x = window.matchMedia("(max-width: 1300px)")
myFunction(x)
x.addListener(myFunction) 

//////////////////////// Sale page img ////////////////////////////////////////
let imgMan = document.getElementById('imgMan')
let textMan = document.getElementById('textMan')
let bigMan = document.getElementById('bigMan')
function imgRespon(y) {
    if (y.matches) {
        textMan.appendChild(imgMan)
    }
    else {
        bigMan.appendChild(imgMan)
    }
}

var y = window.matchMedia("(max-width: 1080px)")
imgRespon(y)
y.addListener(myFunction) 

///////////////////////////// open video animation ////////////////////////////
let mainAnimate = document.getElementById('main')
setTimeout(() => {
    mainAnimate.classList.add('animate')
    setTimeout(() => {
    }, 5500)
}, 10000)