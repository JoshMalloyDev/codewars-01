// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

function isIsogram(str){
    return new Set(str.toLowerCase()).size === str.length;
  }
  
  //The Set object lets you store unique values of any type, 
  //whether primitive values or object references.
  // values in the set have to be unique
  // make the string to lower case so that we know that the elements are not the same
  // then we use the .size properrty and set it equal to str.length