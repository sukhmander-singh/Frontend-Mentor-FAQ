const allQuestion = document.querySelectorAll('.q-container')


for(let question of allQuestion) {
    let icon = 0
    question.addEventListener('click', () => {
        question.nextElementSibling.classList.toggle('hidden')
        if(icon === 0) {
            question.children[1].src = "images/icon-minus.svg"
            icon ++
        }else {
            question.children[1].src = "images/icon-plus.svg"
            icon --
        }
    })
}