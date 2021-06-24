var pop_up = window.document.querySelector('.popup_perfil')

var perfil = document.getElementById('perfil_usuário')
perfil.addEventListener('click', ()  =>{
    pop_up.classList.toggle("popup_dispaly")
    

})

/*remover as classes do perfil*/

/*ao clicar no menu*/
var menu_popup_remove = window.document.querySelector('.burger')
menu_popup_remove.addEventListener('click', ()  =>{
    pop_up.classList.remove("popup_dispaly")})

/* ao clicar no baner */
var baner_popup_remove = window.document.querySelector('.banner')
baner_popup_remove.addEventListener('click', ()  =>{
    pop_up.classList.remove("popup_dispaly")})
