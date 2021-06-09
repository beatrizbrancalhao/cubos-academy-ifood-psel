function solucao(precos) {
  let soma
  if (precos.length === 0) {
    return console.log(0)
  }
  if (precos.length < 5) {
    soma = precos.reduce((acc, cur) => {
      return acc + cur
    })
  } else {
    const maioresPrecos = precos
      .sort((a, b) => {
        return a - b
      })
      .slice(1)
    soma = maioresPrecos.reduce((acc, cur) => {
      return acc + cur
    })
  }
  console.log(soma)
}
