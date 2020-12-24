/*
 * Burada parca ismini disaridan almaya calismayacagim. Kendi olusturacagim dizi 
 * üzerinden istenen islemleri yapacagim.
 */
let ToptanParcaListesi = ["Egzoz123", "DikizAYNA10x5"];
let DepoEnvanteri = [];

function BuyukHarfeCevir(diziIsmi) {
    diziIsmi = diziIsmi.map(diziIsmi => diziIsmi.toUpperCase());
    return diziIsmi;
}

function RakamlariSil(diziIsmi) {
    for (let index = 0; index < diziIsmi.length; index++) {
        diziIsmi[index] = diziIsmi[index].replace(/\d+/g, '');
    }
    return diziIsmi;
}

function TersYazdir(str) {
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;
}

function ImzaEkle(arrayismi) {
    for (let index = 0; index < arrayismi.length; index++) {
        arrayismi[index] = "KEREMAG_" + arrayismi[index];
    }
    return arrayismi;
}

function DiziyeTarihEkle(dizi) {
    for (let index = 0; index < dizi.length; index++) {
        dizi[index] = dizi[index] + " " + new Date() + "\n";
    }
    return dizi;
}

BuyukHarfeCevir(ToptanParcaListesi);

RakamlariSil(ToptanParcaListesi);

for (let index = 0; index < ToptanParcaListesi.length; index++) {
    ToptanParcaListesi[index] = TersYazdir(ToptanParcaListesi[index]);
}

ImzaEkle(ToptanParcaListesi);

DiziyeTarihEkle(ToptanParcaListesi);

DepoEnvanteri = ToptanParcaListesi;
console.log("Depodaki ürünlerimiz:  " + DepoEnvanteri);