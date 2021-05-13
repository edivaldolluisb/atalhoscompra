function carinho_on() {
    window.document.getElementById('carinho_compras').style.display="block"
    
}
function carinho_off() {
    window.document.getElementById('carinho_compras').style.display="none"
    
}
let btn_Diminuir = document.querySelector('.diminuir')
let btn_Aumentar = document.querySelector('.aumentar')
let input_QT = document.querySelector('.input-QT')

btn_Aumentar.addEventListener('click', () =>{
    input_QT.value = parseInt(input_QT.value) + 1

})
btn_Diminuir.addEventListener('click', () =>{
    input_QT.value = parseInt(input_QT.value) - 1
    if (input_QT.value < 0){
        input_QT.value = 0
    }

})