
// const drivers = [
//     {
//       name: 'Bobby',
//       hometown: 'Pittsburgh' },
//     {
//       name: 'Sammy',
//       hometown: 'New York' } ,
//     {
//       name: 'Sally',
//       hometown: 'Cleveland' },
//     {
//       name: 'Annette',
//       hometown: 'Los Angeles' },
//     {
//       name: 'Bobby',
//       hometown: 'Tampa Bay' }
//   ];













const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']






function findMatching(arrOfDriver, names) {
   return arrOfDriver.filter(list => list.toLowerCase() === names.toLowerCase())   
}


function fuzzyMatch(arry, letters) {
    return arry.filter(list => list.startsWith(letters))
}





function matchName(arrOfDriver, names) {
 return arrOfDriver.filter(obj => obj.name === names)
}
matchName(drivers, "Bobby")



