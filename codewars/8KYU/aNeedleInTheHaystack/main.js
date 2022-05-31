function findNeedle(haystack) { 
    let result ='found the needle at position '
    haystack.forEach((word,index)=> {
   
      if (word=== 'needle') result += index 
     
    })
    return result
  }