//procurar o botão
//Quando clicar no botao

document.querySelector("#add-time")
.addEventListener('click', cloneField)

//executar uma ação
function cloneField(){
    //duplicar os campos
    const newfieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    //pegar os campos
    const fields = newfieldContainer.querySelectorAll('input')

    //limpar cada campo
    fields.forEach(function(field) {
        //pegar o field do momento e limpar
        field.value = ""
    })

    //colocar na pagina
    document.querySelector('#schedule-items').appendChild(newfieldContainer)
}