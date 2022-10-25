function getGrade (s1, s2, s3) {
    // Code here
    let avarage = Math.floor((s1 + s2 + s3) / 3)
    console.log(avarage)
    if ( avarage >= 90 && avarage <= 100) return 'A'
    if ( avarage >= 80 && avarage < 90) return 'B'
    if ( avarage >= 70 && avarage < 80) return 'C'
    if ( avarage >= 60 && avarage < 70) return 'D'
    if ( avarage >= 0 && avarage < 60) return 'F'
   
  }