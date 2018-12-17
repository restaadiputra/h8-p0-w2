// 1. Menyusun Barisan Bintang
var rows1 = 5;

for (i = 0; i < rows1; i++){
  console.log('*');
}

// 2. Menyusun Barisan Bintang Dengan Nested Looping
var rows2 = 5;
var start;

for (i = 0; i < rows2; i++){
  star = '';
  for (j = 0; j < rows2; j++) {
    star += '*';
  }
  console.log(star);
}

// my other answer if not using nested loop
var rows2 = 5;
var star = '';

for (j = 0; j < rows2; j++) {
  star += '*';
}

for (i = 0; i < rows2; i++){
  console.log(star);
}


// 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
var rows3 = 5;
var star;

for (i = 0; i < rows3; i++){
  star = '';
  for (j = 0; j <= i; j++) {
    star += '*';
  }
  console.log(star);
}

// my other answer if not using nested loop
var rows3 = 5;
var star = '';

for (i = 0; i < rows3; i++){
  star += '*';
  console.log(star);
}
