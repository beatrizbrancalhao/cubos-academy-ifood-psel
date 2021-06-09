function solucao(tempo, distancia) {
  let valor

  if (tempo < 5) {
    return console.log(600)
  }
  if (tempo >= 5 && tempo <= 60) {
    valor = 100 * tempo + 50 * distancia
  }
  if (tempo > 60) {
    if (distancia < 100) {
      valor = 200 * distancia
    } else {
      valor = 150 * distancia
    }
  }
  console.log(valor)
}
