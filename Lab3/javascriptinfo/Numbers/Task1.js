let a = +prompt("The first number?", "");
let b = +prompt("The second number?", "");

alert( a + b );

alert( Math.round(6.35 * 10) / 10 ); // 6.35 -> 63.5 -> 64(rounded) -> 6.4

function readNumber() {
    let num;
  
    do {
      num = prompt("Enter a number please?", 0);
    } while ( !isFinite(num) );
  
    if (num === null || num === '') return null;
  
    return +num;
  }
  
  alert(`Read: ${readNumber()}`);


let i = 0;
while (i != 10) { // This loop is infinite. It never ends, because i would never equal 10. 
    i += 0.2;     // Such things happen because of the precision losses when adding fractions like 0.2.
}