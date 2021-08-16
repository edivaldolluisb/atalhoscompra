var abrirmenu = window.document.querySelector('.abrir_menu')
var fecharmenu = window.document.querySelector('.fechar_menu')
var menu = window.document.querySelector('.menu')

abrirmenu.addEventListener('click', ()=>{
    menu.style.display = 'block'
})

fecharmenu.addEventListener('click', ()=>{
    menu.style.display = 'none'
})



