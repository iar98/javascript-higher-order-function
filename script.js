const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

//mencari angka yang lebih besar dari 3 dengan for 
const newAngka = [];

for(let i = 0 ; i < angka.length; i ++){
    if(angka[i] >=3){
        newAngka.push(angka[i]);
    }
}
//menampilkan angka
console.log('for = ' + newAngka);

//methods filter
//menacari angka yang lebih besar dari 3 dengan methods filter
//dan menggunakan parameter function yang bersikan arguments angka yang lebih kecil dari 3
const newAngka2 = angka.filter(a => a >= 3);
console.log('filter = ' + newAngka2);

//methods map
//mengkalikan value di tiap index pada array sebanyak 2
const newAngka3 = angka.map(a => a *2);
console.log('map = ' + newAngka3);

//methods reduce
//menjumlahkan seluruh index array
//default pada return reduce memiliki value 0 dan ini bisa di rubah
const newAngka4 = angka.reduce((value1, value2) => value1 + value2, 0);
console.log('reduce = ' + newAngka4);

//methods chaining(berantai)
//menggabungkan semua methods menjadi 1 yang di isikan pada variabel
const hasil = 
//methods filter
angka.filter(a => a > 5)
//methods map
.map(a => a * 3)
//methods bisa di tuliskan lebih dari 1 kali apapun methodsnya
.map(a => a / 2)
//methods reduce
.reduce((value1, value2) => value1 + value2);
//menampilkan hasilnya
console.log('channing(berantai) = ' + hasil);