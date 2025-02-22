const menuElement = document.getElementById('menu')
const toggleElement = document.getElementById('toggle')

const listProjects = document.querySelectorAll('.list-project')
const listHability = document.querySelectorAll('.hability-list__item')

toggleElement.addEventListener('click', () => {
    menuElement.classList.toggle('menu--show')

    if (menuElement.classList.contains('menu--show')) {
        toggleElement.src = "assets/images/icon-close.svg"
    }
    else {
        toggleElement.src = "assets/images/icon-hamburger.svg"
    }
})

window.addEventListener('resize', () => {

    if (window.matchMedia('(min-width:1024px)').matches && !menuElement.classList.contains('menu--show')) {
        menuElement.classList.add('menu--show')
    }

    if (window.matchMedia('(max-width:1024px)').matches && menuElement.classList.contains('menu--show')) {
        menuElement.classList.remove('menu--show')
    }


})

const options = {
    root: null, //Contenedor donde vigilar
    rootMargin: "0px", //margen para incluir en la vista
    threshold: 0.3, //porcentaje del elemento que se tiene que ver
};

const callback = (entries) => {
    entries.forEach(element => {
        if (element.isIntersecting) {
            if (element.target.classList.contains('list-project')) {
                element.target.classList.add('fade-in')
            } else if (element.target.classList.contains('hability-list__item')) {
                element.target.style.backgroundColor = "red"
            }

        }
    })
}

const observer = new IntersectionObserver(callback, options)

listProjects.forEach(listProject => observer.observe(listProject))
listHability.forEach(diego => observer.observe(diego))

