/**
 * ? Khối 1:Input 
 * vd 12, 44 83
 * chieu rong
 * chu vi
 * dien tich
 * 
 * ?Khối 2: Các bước xử lý
 *  * so (chứa số có 2 chữ số )
 *  sohangchuc, sodonvi
 * B1: Khai báo và gán trị cho biến
 * B2: Lập công thức tính
 * so = 12
 * sohangchuc = Math.floor(soDu/10); => 1
 *soDonVi = soDu%10 => 2
 * tính tong = sodonvi + sohangchuc;
 * B3: In kết quả ở console
 * 
 * ?Khối 3: Output 
 * tính  tong
 * 
 */
// b1
var so = 12;
var sohangchuc = 0;
var sodonvi = 0;
var tong = 0;
// b2
sohangchuc = Math.floor(so / 10);
sodonvi = so % 10;
// b3
tong = sodonvi + sohangchuc;
console.log("Tong: ", tong)