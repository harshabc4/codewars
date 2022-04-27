Return an array containing the numbers from 1 to N, where N is the parametered value.

Replace certain values however if any of the following conditions are met:

    If the value is a multiple of 3: use the value "Fizz" instead
    If the value is a multiple of 5: use the value "Buzz" instead
    If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead

N will never be less than 1.

Method calling example:

fizzbuzz(3) -->  [1, 2, "Fizz"]

// Mine
// Return an array
function fizzbuzz(n) {
    let answerArr = []
    for(let i = 1; i <= n; i++){
      if(i%3===0 && i%5===0){
        answerArr.push('FizzBuzz')
      }else if(i%5===0){
        answerArr.push('Buzz')
      }else if(i%3===0){
        answerArr.push('Fizz')
      }else{
        answerArr.push(i)
      }
    }
    return answerArr
  }

// Top rated
function fizzbuzz(n)
{
  var i = 1, arr = [];
  while(i <= n) {
    var fizz = (i % 3 == 0);
    var buzz = (i % 5 == 0);
    if(fizz || buzz) {
      arr.push((fizz?"Fizz":"") + (buzz?"Buzz":""));
    }
    else {
      arr.push(i);
    }
    i++;
  }
  return arr;
}

var fizzify = fizzbuzz;