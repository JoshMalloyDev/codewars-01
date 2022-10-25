function sumMix(x){
    // created an empty varible that needed to be added on too
  let sum = 0
  //used for loop to loop through all of the indexes of the array
  for (let i=0 ;i < x.length; i++){
   // adding to the empty variable and made it a number using the Number method
    sum += Number(x[i])
  }
    //returned the varibale named sum
    return sum
  }