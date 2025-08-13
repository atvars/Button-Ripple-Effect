const buttons = document.querySelectorAll('.ripple');

buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        const x = e.pageX
        const y = e.pageY

        // to get px just for button
        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft

        // x and y axes just for button
        const xInside = x - buttonLeft
        const yInside = y - buttonTop

        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.top = yInside + 'px'
        circle.style.left = xInside + 'px'
        
        // adding class to span
        this.appendChild(circle)

        // removing class
        setTimeout(() => circle.remove(), 500)
    })
})