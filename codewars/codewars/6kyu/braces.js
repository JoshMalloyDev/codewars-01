function validBraces(braces){
    let tracer = [] // create a array
    // loop through it
    for(let i=0;i < braces.length; i++){
      if ( braces[i] === "(" || braces[i] === "{" || braces[i] === "["){
        tracer.push(braces[i])
        //add to the array
      } else{
        if(tracer.length === 0) return false
        let lastValue = tracer[tracer.length-1]
        if( (braces[i] === ']' && lastValue === '[') || (braces[i] === '}' && lastValue === '{') || (braces[i] === ')' && lastValue === '('))
        {
          tracer.pop()
        } else {
          break;
        }
      }
    }
    return tracer.length === 0
  }

  // dont completly understand this one will go over it with mentor