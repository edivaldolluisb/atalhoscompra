let btn_Diminuir = document.querySelector('.diminuir')
let btn_Aumentar = document.querySelector('.aumentar')
let input_QT = document.querySelector('.input-QT')

var comprar_btn = document.querySelector('#comprar_btn')
var add_sucesso = document.querySelector('#add_sucesso')
var continuar_compra = document.querySelector('#continuar_compra')


function carinho_on() {
    window.document.getElementById('carinho_compras').style.display="block"
    
}
function carinho_off() {
    window.document.getElementById('carinho_compras').style.display="none"
    
}


btn_Aumentar.addEventListener('click', () =>{
    input_QT.value = parseInt(input_QT.value) + 1


})
btn_Diminuir.addEventListener('click', () =>{
    input_QT.value = parseInt(input_QT.value) - 1
  
    if (input_QT.value < 0){
        input_QT.value = 0
    }

})


comprar_btn.addEventListener('click', () =>{
    add_sucesso.style.display='block'
    continuar_compra.style.display='block'
})
continuar_compra.addEventListener('click', () =>{
    add_sucesso.style.display='none'
    continuar_compra.style.display='none'
    
})