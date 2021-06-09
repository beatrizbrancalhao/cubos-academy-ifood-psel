function solucao(obj) {
  if (obj['temIngresso'] === true && (obj['idade'] >= obj['censura'] || obj.estaComPais)) {
    if (obj['temCarteirinha'] || obj['idade'] < 18) {
      return console.log('MEIA')
    } else {
      return console.log('INTEIRA')
    }
  }
  console.log('ACESSO NEGADO')
}
