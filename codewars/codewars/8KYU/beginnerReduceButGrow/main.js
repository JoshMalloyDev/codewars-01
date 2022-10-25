function grow(x){
 
    let answer = 1
    for(let i = 0; i < x.length; i++){
      console.log(x[i])
      answer *= x[i]
    }
      console.log(answer)
      return answer
    }