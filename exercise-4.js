var tanggal =3;
var bulan = 3;
var tahun = 2018;

if (1 <= tanggal && tanggal <= 31) {
  if (1 <= bulan && bulan <= 12) {
    if (1900 <= tahun && tahun <= 2200) {
      switch (bulan) {
        case 1:
          bulan = 'Januari';
          break;
        case 2:
          bulan = 'Februari';
          break;
        case 3:
          bulan = 'Maret';
          break;
        case 4:
          bulan = 'April';
          break;
        case 5:
          bulan = 'Mei';
          break;
        case 6:
          bulan = 'Juni';
          break;
        case 7:
          bulan = 'Juli';
          break;
        case 8:
          bulan = 'Agustus';
          break;
        case 9:
          bulan = 'September';
          break;
        case 10:
          bulan = 'Oktober';
          break;
        case 11:
          bulan = 'November';
          break;
        case 12:
          bulan = 'Desember';
          break;
        default:
          bulan = 'Salah Bulan'
          break;
      }
      
      console.log(tanggal + ' ' +bulan + ' ' +tahun);
    } else {
      console.log('Wrong range of year. Year must be between 1900 to 2200');
    }
  } else {
    console.log('Wrong range of month. Month must be between 1 to 12');
  }
} else {
  console.log('Wrong range of day. Day must be between 1 to 31');
}
