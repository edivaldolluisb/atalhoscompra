var menu_inicio = window.document.querySelector('.menu-inicio')
var menu_user = window.document.querySelector('.menu-user')
var menu_produtos = window.document.querySelector('.menu-produtos')
var menu_categorias = window.document.querySelector('.menu-categorias')
var menu_pedidos = window.document.querySelector('.menu-pedidos')
var menu_contactos = window.document.querySelector('.menu-contatos')

var inicio = window.document.querySelector('#inicio')
var utilizadores = window.document.querySelector('#utilizadores')
var produtos = window.document.querySelector('#produtos')
var categorias = window.document.querySelector('#categorias')
var pedidos = window.document.querySelector('#pedidos')
var contactos = window.document.querySelector('#contactos')

var menu = window.document.querySelector('.menu')

menu_inicio.addEventListener('click', ()=>{
    menu.style.display = 'none'
    inicio.style.display = 'block'

    utilizadores.style.display = 'none'
    produtos.style.display = 'none'
    categorias.style.display = 'none'
    pedidos.style.display = 'none'
    contactos.style.display = 'none'
    
})
menu_user.addEventListener('click', ()=>{
    menu.style.display = 'none'
    utilizadores.style.display = 'block'

    produtos.style.display = 'none'
    categorias.style.display = 'none'
    pedidos.style.display = 'none'
    contactos.style.display = 'none'
    inicio.style.display = 'none'
})
menu_produtos.addEventListener('click', ()=>{
    menu.style.display = 'none'
    produtos.style.display = 'block'

    utilizadores.style.display = 'none'
    categorias.style.display = 'none'
    pedidos.style.display = 'none'
    contactos.style.display = 'none'
    inicio.style.display = 'none'
})
menu_categorias.addEventListener('click', ()=>{
    menu.style.display = 'none'
    categorias.style.display = 'block'

    produtos.style.display = 'none'
    utilizadores.style.display = 'none'
    pedidos.style.display = 'none'
    contactos.style.display = 'none'
    inicio.style.display = 'none'
})
menu_pedidos.addEventListener('click', ()=>{
    menu.style.display = 'none'
    pedidos.style.display = 'block'

    produtos.style.display = 'none'
    utilizadores.style.display = 'none'
    categorias.style.display = 'none'
    contactos.style.display = 'none'
    inicio.style.display = 'none'
})
menu_contactos.addEventListener('click', ()=>{
    menu.style.display = 'none'
    contactos.style.display = 'block'

    produtos.style.display = 'none'
    utilizadores.style.display = 'none'
    categorias.style.display = 'none'
    pedidos.style.display = 'none'
    inicio.style.display = 'none'
})


/* Página de utilizadores*/
var Adicionar_utilizador_registar = window.document.querySelector('#Adicionar_utilizador_registar')
var atualizar_user = window.document.querySelector('.atualizar_user')
var adicionar_utilizador = window.document.querySelector('#adicionar_utilizador')
var editar_utilizador = window.document.querySelector('#editar_utilizador')
var fechar_add_utilizador = window.document.querySelector('.fechar_add_utilizador')
var fechar_atualizar_utilizador = window.document.querySelector('.fechar_atualizar_utilizador')

Adicionar_utilizador_registar.addEventListener('click', ()=>{
    adicionar_utilizador.style.display = 'block'
})

fechar_add_utilizador.addEventListener('click', ()=>{
    adicionar_utilizador.style.display = 'none'
})

atualizar_user.addEventListener('click', ()=>{
    editar_utilizador.style.display = 'block'
})

fechar_atualizar_utilizador.addEventListener('click', ()=>{
    editar_utilizador.style.display = 'none'
})



/*página de produtos*/
var produto_registar = window.document.querySelector('#Adicionar_produto_registar')
var adicionar_produto = window.document.querySelector('#adicionar_produto')
var atualizar_produto = window.document.querySelector('#editar_produto')
var fechar_add_produto = window.document.querySelector('.fechar_add_produto')
var fechar_atualizar_produto = window.document.querySelector('.fechar_atualizar_produto')
var button_Editar_produto = window.document.querySelector('.button_Editar_produto')

produto_registar.addEventListener('click', ()=>{
    adicionar_produto.style.display = 'block'
})

fechar_add_produto.addEventListener('click', ()=>{
    adicionar_produto.style.display = 'none'
})

fechar_atualizar_produto.addEventListener('click', ()=>{
    atualizar_produto.style.display = 'none'
})
button_Editar_produto.addEventListener('click', ()=>{
    atualizar_produto.style.display = 'block'
})

/* Adicionar Categoria */

var Adicionar_nova_categoria = window.document.querySelector('#Adicionar_nova_categoria')
var editar_CAtegoria = window.document.querySelector('.editar_CAtegoria')
var nova_Categoria = window.document.querySelector('.nova_Categoria')
var atualizar_categoria_existente = window.document.querySelector('.atualizar_categoria_existente')
var button_atuaizar_categoria = window.document.querySelector('.button_atuaizar_categoria')

Adicionar_nova_categoria.addEventListener('click', ()=>{
    nova_Categoria.style.display = 'block'
})
editar_CAtegoria.addEventListener('click', ()=>{
    atualizar_categoria_existente.style.display = 'block'
})