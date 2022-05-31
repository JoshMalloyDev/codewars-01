function fakeBin(x){
    // created a variable with an empty string becasue they told us we would return a string
    
  let bin= ""
  // we used a for loop to go through every single number inside of that string.
    for (let i = 0; i < x.length; i++) {
    if (Number(x[i]) < 5){
      //the varible bin was added tousing += 0 
      bin += 0
    } // this else was the falsy statment. and we added +=1  
      else bin += 1
  }
    return bin
  }