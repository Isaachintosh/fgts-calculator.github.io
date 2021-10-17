const fgtsInput = document.querySelector('.capital_input')
const mesesInput = document.querySelector('.meses_input')
const btnCalcular = document.querySelector('.btn_calcular')
const sectionCalcular = document.querySelector('.section_calculadora')
const resultadoFgts = document.querySelector('.resultado_fgts')

btnCalcular.addEventListener('click', (e) => {
    e.preventDefault()
    const valor = parseFloat(fgtsInput.value)
    const tempo = parseInt(mesesInput.value)
    const taxaJuros = 0.08    
    
    const calculo = ((valor / tempo) * taxaJuros).toFixed(2)
    const resultado = calculo
    
    contentDiv = resultado
    
    const templateResultado = `
    <p class="resultado_texto">
        O valor da parcela a receber corresponde a: R$ ${resultado}
    </p>
    `
    resultadoFgts.style.display = "flex"
    resultadoFgts.innerHTML = templateResultado
    fgtsInput.value = ""
    mesesInput.value = ""
})