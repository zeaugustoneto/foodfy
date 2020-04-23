const modal_overlay = document.querySelector('.modal-overlay')
const cards = document.getElementsByClassName('card')



for (let x of cards) {
    x.addEventListener('click', function () {
        const image_id = x.getAttribute('id') // pega o ID do card e joga dentro da variavel
        modal_overlay.classList.add('active') //adiciona a tag active para acionar o modal
        document.querySelector(".modal-image img").src = `/Launchbase bootcamp/foodFy/bootcamp-launchbase-desafios-02-master/layouts/assets/${image_id}`

        const get_recipe_name = x.querySelector("#recipe-name").textContent // pega nome da receita e autor 
        const get_author = x.querySelector("#author-name").textContent

        const recipe_name_modal = document.querySelector(".recipe-name").innerHTML = get_recipe_name //adiciona nome da receita e autor
        const author_modal = document.querySelector('.author').innerHTML = get_author


    })
}

document.querySelector('.exit').addEventListener('click', function () {
    modal_overlay.classList.remove('active')

})
