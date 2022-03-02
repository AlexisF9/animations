// CURSOR

const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.style.top = `${e.pageY - 175}px`
    cursor.style.left = `${e.pageX - 200}px`
})

// PICTURE

const allLinks = document.querySelectorAll('nav ul li');

allLinks.forEach(link => {
    const location = link.getAttribute('data-loc');

    link.addEventListener('mouseenter', () => {
        cursor.style.backgroundImage = `url(assets/${location}.jpg)`
    })

    link.addEventListener('mouseout', () => {
        cursor.style.backgroundImage = `none`
    })
})