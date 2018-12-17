// 1. Menyusun Barisan Bintang
var rows1 = 5;

for (i = 0; i < rows1; i++){
  console.log('*');
}

// 2. Menyusun Barisan Bintang Dengan Nested Looping
var rows2 = 5;
var star2;

for (i = 0; i < rows2; i++){
  star2 = '';
  for (j = 0; j < rows2; j++) {
    star2 += '*';
  }
  console.log(star2);
}

// My other answer if not using nested loop
var rows2 = 5;
var star2 = '';

for (j = 0; j < rows2; j++) {
  star2 += '*';
}

for (i = 0; i < rows2; i++){
  console.log(star2);
}

// For the 1st solution, the second loop with variable 'j' 
// for asterik (*)  will always run according to how many 
// rows the user input.
// Meanwhile the 2nd solution with no loop, 
// the second loop with variable 'j' for asterik (*) will
// only runs once in the begining.


// 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
var rows3 = 5;
var star3;

for (i = 0; i < rows3; i++){
  star3 = '';
  for (j = 0; j <= i; j++) {
    star3 += '*';
  }
  console.log(star3);
}

// My other answer if not using nested loop
var rows3 = 5;
var star3 = '';

for (i = 0; i < rows3; i++){
  star3 += '*';
  console.log(star3);
}


// For the 1st solution, the second loop with variable 'j' 
// for asterik (*)  will always run according to how many 
// rows the user input (same as the second task).
// Meanwhile the 2nd solution with no loop, 
// the star addition is always be in line with the rows addition,
// which means we can add star for every loop without having
// the second loop to check how many start we need to add. 
