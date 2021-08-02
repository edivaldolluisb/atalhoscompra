var cash = window.document.querySelector('#pagar_cash')
var transferecia = window.document.querySelector('#pagar_transferencia')
var detalhes_cash = window.document.querySelector('.detalhes_cash')
var detalhes_transferencia = window.document.querySelector('.detalhes_transferencia')

transferecia.addEventListener('click', ()=> {
    detalhes_cash.style.display = 'none'
    detalhes_transferencia.style.display = 'block'
    
})

cash.addEventListener('click', ()=> {
    detalhes_cash.style.display = 'block'
    detalhes_transferencia.style.display = 'none'
})
