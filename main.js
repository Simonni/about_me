

// WHo Am I
//  let name = prompt('Who am I?')
// console.log('My name is ', name)
 
// if(name.toLowerCase() === 'simon'&& name.toUpperCase() === 'SIMON') {
//   alert(name + ' Great! You got it, Welcome')
//  } else if (name==='Simon') {
//    alert('You are closer!')
//  } else{
//   alert('This is not me dud')
  
//    alert('No Worries, let go to my age?')
//  }
  
//  // Aboy My Age
//  let age = prompt('Guess my Age?')
//   if (age ===30){
//     alert('WOW, You Got it!')
//   } else {
//     alert('Hmm... Your Guess is not good!')
//   }
    
//  // About My Hobby 
//   let hobby = prompt('What abot my Hobby?')
//   if (hobby ==='Basketball' || hobby==='Soccer'){
//     alert('Got it!')
//   } else{
// alert('That\'s a good Guess')
//   }
// //Do you Like Me
//   let lastQ = prompt('Do you like Me')
//   if(lastQ.toLowerCase() ==='yes'||lastQ.toUpperCase() ==='YES' ){
//     alert('I LOVE U TOO!')
//   } else{  
// alert ('That\'s not cool')
//   }
 
//   //Comment
//   let com = prompt('Do you have any Comment?')
//   if(com==='yes'){
//     prompt('Write Here')
//     alert('Thank You!')
//   } else {
//     alert('Thank You!')
//   }


// let chanArr = ['nbc', 'aljezeera', 'cnn', 'bbc', 'foxnews']
// for (let i=0; i< chanArr.length; i++){
//   let news = prompt('Guess the popular news channel number?')
//   if (news == 3){
//     alert ('Great Job! That\'s ' + chanArr[3])
//     break
//   } else  if (news > 10 ) {
//     alert ('Wopp!! Too High')
//   } else {
//     alert ('You are too close, try it again, you have ' + (chanArr.length-2 -(i)) + ' more tries')
//   }
  
//   console.log('Channel News ', i)
//   console.log(chanArr[i])
// }

let statesIVisited = ['CA', 'MD', 'VA','NY','MA','OH','DC']
for (let i =0; i<statesIVisited.length; i++){
  let states = prompt('Guess Which States have I Visited? Please, Use 2-letter Upper-Case state Code')
  if(states =='CA'||states=='MD'|| states=='NY'|| states=='MA' || states=='OH' || states=='DC'){
    alert('You right, you got ' + (i+1) + ' out of 7')
  } else {
    alert ('Nop, try again!')
  }
  console.log('States I have visited ', i+1)
  console.log(statesIVisited[i])
}
alert ('Thank You!')

