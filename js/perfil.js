let btn_editar_perfil = document.getElementById('editar_perfil')
let telefone = document.getElementById('telefone')
let email = document.getElementById('email')
let morada = document.getElementById('morada')
let palavrapasse = document.getElementById('palavrapasse')
var concluir_edit = document.getElementById('concluir_edit')
var cancelar_edit = document.getElementById('cancelar_edit')


btn_editar_perfil.addEventListener('click', () => {
    
    telefone.removeAttribute('readonly')
    email.removeAttribute('readonly')
    morada.removeAttribute('readonly')
    palavrapasse.removeAttribute('readonly')
    concluir_edit.style.display='block'
    cancelar_edit.style.display='block'
    btn_editar_perfil.style.display='none'
})
cancelar_edit.addEventListener('click', () => {

    concluir_edit.style.display='none'
    cancelar_edit.style.display='none'
    btn_editar_perfil.style.display='block' 
    //ao clicar no botão de manter, os dados vão voltar a ser apenas de leitura   

    telefone.setAttribute('readonly', true)
    email.setAttribute('readonly', true)
    morada.setAttribute('readonly', true)
    palavrapasse.setAttribute('readonly', true)
    window.alert("os dados não foram alterados")
})

