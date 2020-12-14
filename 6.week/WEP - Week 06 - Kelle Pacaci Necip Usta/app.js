let hayvanTuru;
let ciftliktekiHayvanlar = ["domuz", "koyun", "tavuk", "domuz", "koyun", "inek", "tavuk", "domuz", "domuz", "koyun", "tavuk", "domuz", "koyun", "inek", ];
let ToplamAyakSayisi = 0;
let dortAyakliSayisi = 0;
let ikiAyakliSayisi = 0;
/* 
Önce 4 ayakli ve 2 ayakli hayvan sayisini buluyoruz. Burada domuzlari saymadik.
*/
for (let index = 0; index < ciftliktekiHayvanlar.length; index++) {
    hayvanTuru = ciftliktekiHayvanlar[index];
    if (hayvanTuru == "koyun" || hayvanTuru == "inek" || hayvanTuru == "koyun") {
        dortAyakliSayisi++
    } else if (hayvanTuru == "tavuk") {
        ikiAyakliSayisi++
    }
}
/* 
Simdi ciftlikteki hayvan sayilarini biliyoruz, ayak sayilarini hesaplayip bastiralim...
*/
console.log("Dört Ayakli Hayvan Sayisi: " + dortAyakliSayisi);
console.log("Iki Ayakli Hayvan Sayisi:: " + ikiAyakliSayisi)

ToplamAyakSayisi = dortAyakliSayisi * 4 + ikiAyakliSayisi * 2;
console.log("Ciftlikteki Helal Hayvanlarin Ayak Sayisi: " + ToplamAyakSayisi);