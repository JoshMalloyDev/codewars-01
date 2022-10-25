function removeSmallest(numbers) {
    let smallest = numbers[0]
    let smallestIndex = 0
    for(let i = 0; i <numbers.length; i++){
      console.log(numbers[i])
       if (numbers[i] < smallest ){
         smallest = numbers[i] 
         smallestIndex = i
       }
      
    }
    numbers.splice(smallestIndex, 1)
    console.log(smallest,smallestIndex)
    return numbers
    throw "TODO: removeSmallest";
  }

  // function removeSmallest(numbers) {
//   let smallest = numbers[0]
//   let smallestIndex = 0
//   for(let i = 0; i <numbers.length; i++){
//     console.log(numbers[i])
//      if (numbers[i] < smallest ){
//        smallest = numbers[i] 
//        smallestIndex = i
//      }
    
//   }
//   numbers.splice(smallestIndex, 1)
//   console.log(smallest,smallestIndex)
//   return numbers
 
// }
function removeSmallest(numbers) {
    let indexOfMin = numbers.indexOf(Math.min(...numbers));
    return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
  }