// 1. Melakukan Looping Menggunakan While
var loop1 = 2;
var loop2 = 20;

console.log('LOOPING PERTAMA');
while (loop1 <= 20) {
  console.log(loop1 + ' - I love coding');
  loop1 += 2;
}
console.log('LOOPING KEDUA');
while (loop2 >= 2) {
  console.log(loop2 + ' - I will become fullstack developer');
  loop2 -= 2;
}


// 2. Melakukan Looping Menggunakan For
console.log('LOOPING PERTAMA');
for (i = 1; i <= 20; i++) {
  console.log(i + ' - I love coding');
}
console.log('LOOPING KEDUA');
for (i = 20; i >= 1; i--) {
  console.log(i + ' - I love coding');
}

// 3. Angka Ganjil dan Genap

// 3.1 Perulangan 1-100 dengan 
// pengecekan ganjil genap dan pertambahan counter sebanyak 1
console.log('GANJIL GENAP');
for (i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(' GENAP');
  } else {
    console.log(' GANJIL');
  }
}

// 3.2 Perulangan 1-100 dengan 
// dan pertambahan counter sebanyak 2
// dengan kelipatan 3
console.log('Untuk pertambahan counter 2');
for (i = 1; i <= 100; i+=2) {
  if (i % 3 === 0) {
    console.log(i + ' KELIPATAN 3');
  } else {
    console.log('');
  }
}

// 3.3 Perulangan 1-100 dengan 
// dan pertambahan counter sebanyak 5
// dengan kelipatan 6
console.log('Untuk pertambahan counter 5');
for (i = 1; i <= 100; i+=5) {
  if (i % 6 === 0) {
    console.log(i + ' KELIPATAN 6');
  } else {
    console.log('');
  }
}

// 3.4 Perulangan 1-100 dengan 
// dan pertambahan counter sebanyak 9
// dengan kelipatan 10
console.log('Untuk pertambahan counter 9');
for (i = 1; i <= 100; i+=9) {
  if (i % 10 === 0) {
    console.log(i + ' KELIPATAN 10');
  } else {
    console.log('');
  }
}





