function calcular() {
    let primeiroNome = document.getElementById('nameOne')
    let segundoNome = document.getElementById('nameTwo')
    let curso = document.getElementById('currentStudanty')
    let dados = document.getElementById('dadosStudanty')
    let name1 = primeiroNome.value
    let name2 = segundoNome.value
    let current = curso.value
    let nome = name1 + name2
    dados.innerText = `Aluno: ${name1} ${name2} \nCurso: ${current}`

    let valor1 = document.getElementById('number1')
    let valor2 = document.getElementById('number2')
    let valor3 = document.getElementById('number3')
    let valor4 = document.getElementById('number4')
    let dados1 = document.getElementById('notasStudanty')
    let n1 = Number(valor1.value)
    let n2 = Number(valor2.value)
    let n3 = Number(valor3.value)
    let n4 = Number(valor4.value)
    let resulte = (n1 + n2 + n3 + n4)/4
    dados1.innerText = `Nota do 1° período: ${n1}
                    \nNota do 2° período: ${n2}
                    \nNota do 3° período: ${n3}
                    \nNota dp 4° período: ${n4}
                    \nSua média final foi: ${resulte}`

    let dados2 = document.getElementById('situacao')

    if (resulte > 6) {
        dados2.innerText = 'Aprovado'
        dados2.style.backgroundColor = 'dodgerblue'
        dados2.style.border = '3px solid white'
    } else if (resulte < 6) {
        dados2.innerText = 'Reprovado'
        dados2.style.backgroundColor = 'red'
        dados2.style.border = '3px solid white'
    } else if (resulte == 6) {
        dados2.innerText = 'Aprovado'
        dados2.style.backgroundColor = 'orange'
        dados2.style.border = '3px solid white'
    }
}