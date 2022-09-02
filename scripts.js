

if (5 >2 ){
  console.log("maior")
} else {
  console.log("menor")
}

for (let i = 0; i < 10; i++) {  
  console.log(i)
}


let  contador = 0
while (contador < 10) {
  contador++
  console.log("while: " + contador)
}

let contador1 = 1
do {
  contador1++
  console.log("do while: " + contador1)
} while (contador1 < 3);


function soma(a,b) {
  return console.log( a + b)
}
soma(3,2)