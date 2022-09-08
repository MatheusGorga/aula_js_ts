//https://www.treinaweb.com.br/blog/javascript-metodos-de-arrays-que-voce-precisa-conhecer

let numeros = [1, 2, 3, 4, 5, 6, 7];

function soma(numeros) {
  try {
    let total = 0
    numeros.forEach((n) => {
      total += n
    });
    return total

  } catch (error) {
    alert(error)
  }

}

console.log(soma(numeros))