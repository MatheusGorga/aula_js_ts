enum Direction {
  Left = 'esquerda', 
  Right =  'Direita'
}



function handleMovement(direction : Direction){
  if(direction === Direction.Left){
    console.log("Esquerda")
  }else {
    console.log("Direita")
  }
}