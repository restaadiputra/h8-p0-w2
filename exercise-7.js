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

// my other answer if not using nested loop
var rows2 = 5;
var star2 = '';

for (j = 0; j < rows2; j++) {
  star2 += '*';
}

for (i = 0; i < rows2; i++){
  console.log(star2);
}


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

// my other answer if not using nested loop
var rows3 = 5;
var star3 = '';

for (i = 0; i < rows3; i++){
  star3 += '*';
  console.log(star3);
}
