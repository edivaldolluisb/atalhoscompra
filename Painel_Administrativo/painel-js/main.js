
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
    menu_contactos.style.display = 'none'
    
})
menu_user.addEventListener('click', ()=>{
    menu.style.display = 'none'
    utilizadores.style.display = 'block'

    produtos.style.display = 'none'
    categorias.style.display = 'none'
    pedidos.style.display = 'none'
    menu_contactos.style.display = 'none'
    inicio.style.display = 'none'
})
menu_produtos.addEventListener('click', ()=>{
    menu.style.display = 'none'
    produtos.style.display = 'block'

    utilizadores.style.display = 'none'
    categorias.style.display = 'none'
    pedidos.style.display = 'none'
    menu_contactos.style.display = 'none'
    inicio.style.display = 'none'
})
menu_categorias.addEventListener('click', ()=>{
    menu.style.display = 'none'
    categorias.style.display = 'block'

    produtos.style.display = 'none'
    utilizadores.style.display = 'none'
    pedidos.style.display = 'none'
    menu_contactos.style.display = 'none'
    inicio.style.display = 'none'
})
menu_pedidos.addEventListener('click', ()=>{
    menu.style.display = 'none'
    pedidos.style.display = 'block'

    produtos.style.display = 'none'
    utilizadores.style.display = 'none'
    categorias.style.display = 'none'
    menu_contactos.style.display = 'none'
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


/*página de produtos*/
var produto_registar = window.document.querySelector('.botao_produto');

var adicionar_produto = window.document.querySelector('#adicionar_produto')
var fechar_add_produto = window.document.querySelector('.fechar_add_produto')

produto_registar.addEventListener('click', ()=>{
    adicionar_produto.display = 'block'
})
fechar_add_produto.addEventListener('click', ()=>{
    adicionar_produto.display = 'none'
})