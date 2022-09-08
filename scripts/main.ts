var minhaLista: number[] = [1,2,3]
var minhaListaL: string[] = ['1','2','3']


function pegaPrimeiro<T>(lista :T[]){
  return lista[0];
}



console.log(pegaPrimeiro<number>(minhaLista))
console.log(pegaPrimeiro<string>(minhaListaL))

