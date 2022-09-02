//https://www.treinaweb.com.br/blog/javascript-metodos-de-arrays-que-voce-precisa-conhecer

let numeros = [1, 2,3,4,5,6,7];

function soma(numeros){
  let total = 0 
/*   for (let index = 0; index < numeros.length; index++) {
    total = total + numeros[index] 
  }
 */
  numeros.forEach((n) => {
      total += n
  });

  return total
}

console.log(soma(numeros))