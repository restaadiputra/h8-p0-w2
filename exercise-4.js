var tanggal = 1;
var bulan = 2;
var tahun = 2018;

var bulanString;

if (1 <= tanggal <= 31) {
  if (1 <= bulan <= 12) {
    if (1900 <= tahun <= 2200) {
      switch (bulan) {
        case 1:
          bulanString = 'Januari';
          break;
        case 2:
          bulanString = 'Februari';
          break;
        case 3:
          bulanString = 'Maret';
          break;
        case 4:
          bulanString = 'April';
          break;
        case 5:
          bulanString = 'Mei';
          break;
        case 6:
          bulanString = 'Juni';
          break;
        case 7:
          bulanString = 'Juli';
          break;
        case 8:
          bulanString = 'Agustus';
          break;
        case 9:
          bulanString = 'September';
          break;
        case 10:
          bulanString = 'Oktober';
          break;
        case 11:
          bulanString = 'November';
          break;
        case 12:
          bulanString = 'Desember';
          break;
        default:
          bulanString = 'Salah Bulan'
          break;
      }
      
      console.log(tanggal + ' ' +bulanString + ' ' +tahun);
      
    } else {
      console.log('Wrong range of year. Year must be between 1900 to 2200');
    }
  } else {
    console.log('Wrong range of month. Month must be between 1 to 12');
  }
} else {
  console.log('Wrong range of day. Day must be between 1 to 31');
}
