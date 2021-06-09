function solucao(ano) {
  if (ano % 2 !== 0) {
    return console.log('MEH')
  }
  if ((ano - 2021 - 1) % 4 === 0) {
    return console.log('COPA')
  }
  if ((ano - 2021 - 3) % 4 === 0) {
    return console.log('JOGOS')
  }
}
