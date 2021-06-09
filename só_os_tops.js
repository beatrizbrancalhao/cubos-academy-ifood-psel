function solucao(produtos) {
  const precos = produtos.map((produto) => {
    return produto['preco']
  })
  const top = precos.filter((preco) => {
    return preco >= 10000
  })
  const totalTop = top.reduce((acc, cur) => {
    return acc + cur
  })
  const total = precos.reduce((acc, cur) => {
    return acc + cur
  })
  const percentual = totalTop / total
  console.log({ totalTop: totalTop, percentual: percentual })
}
