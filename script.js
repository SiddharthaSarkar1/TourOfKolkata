const mypanels = document.querySelectorAll('.panel');


mypanels.forEach(pan => {
    pan.addEventListener('click', () => {
        removeActiveClasses()
        pan.classList.add('active')
    })
})



function removeActiveClasses(){
    mypanels.forEach(panel => {
        panel.classList.remove('active')
    })
}