let btn_editar_perfil = document.getElementById('editar_perfil')
let nome = document.getElementById('nome')
let ultimo_nome = document.getElementById('ultimo_nome')
let telefone = document.getElementById('telefone')
let email = document.getElementById('email')
let morada = document.getElementById('morada')
let palavrapasse = document.getElementById('palavrapasse')
var concluir_edit = document.getElementById('concluir_edit')


btn_editar_perfil.addEventListener('click', () => {
    
    nome.removeAttribute('readonly')
    ultimo_nome.removeAttribute('readonly')
    telefone.removeAttribute('readonly')
    email.removeAttribute('readonly')
    morada.removeAttribute('readonly')
    palavrapasse.removeAttribute('readonly')
    concluir_edit.style.display='block'
})

