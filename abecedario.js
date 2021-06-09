function solucao(letra, palavras) {
  let soma = 0
  palavras.forEach((palavra) => {
    if (palavra[0] !== letra) {
      soma += 1
    }
  })
  console.log(soma)
}
