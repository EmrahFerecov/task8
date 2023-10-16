// 1
// const verilenlerr = [5, 10, 15, 20, 25];
// const ortalama = ortalamaTap
// function ortalamaTap(...verilenler) {
//     if (verilenler.length === 0) {
//         return 0;
//     }

//     const toplam = verilenler.reduce((arr, num) => arr + num, 0);
//     const ortalama = toplam / verilenler.length;
//     return ortalama;
// }
// console.log("ortalama:", ortalama);
// -------------------------------------------------
// 2
// const verilenler = [2, 3, 6, 7, 10, 12, 14, 17];
// const netice = toplamCutSaylar(verilenler)
// function toplamCutSaylar(data) {
//     let toplam = 0;

//     for (let i = 0; i < data.length; i++) {
//       if (data[i] % 2 === 0) {
//         toplam += data[i];
//       }
//     }

//     return toplam;
//   }
//   console.log("Cut Saylar Toplam:", netice);
// -------------------------------------------------
// 3
// const verilenler = [2, 3, 6, 7, 10, 12, 14, 17];
// const netice = toplamTekSaylar(verilenler);
// function toplamTekSaylar(data) {
//   let toplam = 0;

//   for (let i = 0; i < data.length; i++) {
//     if (data[i] % 2 !== 0) {
//       toplam += data[i];
//     }
//   }

//   return toplam;
// }
// console.log("Tek Saylar Toplam:", netice);
