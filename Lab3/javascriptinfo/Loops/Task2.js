let i = 0;
while (++i < 5) alert( i ); // from 1 to 4

while (i++ < 5) alert( i ); // from 1 to 5

for (let i = 0; i < 5; i++) alert( i ); // from 0 to 4

for (let i = 0; i < 5; ++i) alert( i ); // from 0 to 4

for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
      alert( i );
    }
}

while (i < 3) {
  alert( `number ${i}!` );
  i++;
}

let num;
do {
  num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);