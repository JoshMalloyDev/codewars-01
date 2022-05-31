function solution(str){
    let solution = "";
     for (let i = str.length - 1; i >= 0; i--) {
       solution += str[i];
   }
   
     return solution;
   }