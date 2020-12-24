const notes = [
    ["Hans", 80, 90, 10, 50],
    ["Ulrich", 94, 36, 76, 74],
    ["Olaf", 30, 60, 34, 78],
    ["Otto", 60, 60, 78, 23],
    ["Tina", 71, 45, 89, 100],
    ["Rosalina", 40, 56, 82, 40],
    ["Urs", 49, 45, 56, 67],
    ["Monika", 49, 42, 16, 62]
];
/*
Not ortalamasi bulan fonk. 
*/

let NotToplami = 0;
let DersOrtalamasi = 0;

function NotOrtalamasiBul(DersIndexi) {
    for (let index = 0; index < notes.length; index++) {
        NotToplami = NotToplami + notes[index][DersIndexi];
    }
    DersOrtalamasi = NotToplami / notes.length;
    return DersOrtalamasi;
}
/*
Degerleri sifirlayan fonk. 
*/
function DegerleriSifirla() {
    NotToplami = 0;
    DersOrtalamasi = 0;
}

/*
Sinira göre siralayan fonk. 
*/
let GecerNotAlanlar = [];

function AltLimittenSirala(AltLimit) {
    for (let i = 0; i < notes.length; i++) {
        for (let k = 0; k < notes[i].length; k++)
            if (AltLimit <= notes[i][k]) {
                GecerNotAlanlar.push(notes[i][0])
                break;
            }
    }
    return GecerNotAlanlar;
}

// Burada Derslerin ortalamalarini bulduk.
console.log("Matematik Dersinin Ortalamasi: " + NotOrtalamasiBul(1));
DegerleriSifirla();
console.log("Almanca Dersinin Ortalamasi: " + NotOrtalamasiBul(2));
DegerleriSifirla();
console.log("Ingilizce Dersinin Ortalamasi: " + NotOrtalamasiBul(3));
DegerleriSifirla();
console.log("Cografya Dersinin Ortalamasi: " + NotOrtalamasiBul(4));
DegerleriSifirla();

// 70 puan üstü

console.log("70 ten yüksek not almis olanlarin listesi; " + AltLimittenSirala(70));

// Tüm Derslerden ortalamanin üstünde olanlari bul...

let TumDerslerdenBasariliOlanlar = [];
let al = true;
DegerleriSifirla();
for (let e = 0; e < notes.length; e++) {
    for (let h = 1; h < 5; h++) {
        if (NotOrtalamasiBul(h) > notes[e][h]) {
            al = false;
        }
    }
    if (al) {
        TumDerslerdenBasariliOlanlar.push(notes[e][0])
    }
}
console.log(TumDerslerdenBasariliOlanlar);

/* - Sinifin hangi dersde en iyi nota sahip oldugunu gostermesi
Burada ortalamalari karsilastirsak yeterli gelir.
*/
DegerleriSifirla();
let EniyiOrtalama = NotOrtalamasiBul(1);
DegerleriSifirla();
let DersinIndexi = 0;
for (let sayi = 1; sayi < 5; sayi++) {
    if (NotOrtalamasiBul(sayi) > EniyiOrtalama) {
        DegerleriSifirla();
        EniyiOrtalama = NotOrtalamasiBul(sayi);
        DersIndexi = sayi;
    }
    DegerleriSifirla();
}
console.log(EniyiOrtalama + " dersin indexi ise: " + DersIndexi);
/* yukarida ders ortalamalarini da ekrana bastirmistik,orada 1.index mat 2. alm ...
diye gidiyordu o yüzden yalnizca indexi yazdirdim, dersin adina atamakla ugrasmadim. */


/* - Her dersin en iyi ögrencisini bulalim...
 */
// en caliskani bulmak icin bir fonk yazdim.
let EnCaliskan = null;
let EnYuksekNot = 0;
let isminIndexi = 0;

function EncaliskaniBul(DersinIndexi) {
    for (let han = 0; han < notes.length; han++) {
        if (notes[han][DersinIndexi] > EnYuksekNot) {
            EnYuksekNot = notes[han][DersinIndexi];
            isminIndexi = han;
        }


    }
    EnCaliskan = notes[isminIndexi][0];
    return EnCaliskan;
}

function listeyiSifirla() {
    EnCaliskan = null;
    EnYuksekNot = 0;
    isminIndexi = 0;
}

listeyiSifirla();

// 1 numarali indexte bulunan Mat derslerinde en basarili kisi
console.log("Siniftaki en basarili Matamatikci " + EncaliskaniBul(1));
listeyiSifirla()
// 2 numarali indexte bulunan Mat derslerinde en basarili kisi
console.log("Siniftaki en basarili Almancacı " + EncaliskaniBul(2));
listeyiSifirla()
// 3 numarali indexte bulunan Mat derslerinde en basarili kisi
console.log("Siniftaki en basarili Ingizceci " + EncaliskaniBul(3));
listeyiSifirla()
// 4 numarali indexte bulunan Mat derslerinde en basarili kisi
console.log("Siniftaki en basarili Cografyaci " + EncaliskaniBul(4));
listeyiSifirla()