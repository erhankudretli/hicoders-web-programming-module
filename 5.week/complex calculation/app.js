let sayiKumesi = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let karekok = 0;
let karekokDizisi = [];
let kare = 0;
let karelerDizisi = [];
let toplam = 0; // dizi elemanlarinin toplami
let ortalama; // dizi ortalamasi 
let enBuyukSayi = 0;
let enKucukSayi = Infinity;

//Dizinin toplamini bulma

for (let index = 0; index < sayiKumesi.length; index++) {
    toplam += sayiKumesi[index];
}
console.log("Dizinin elemanlarinin sayilarinin toplami: " + toplam);

// toplami buldugumuza göre ortamama icin, dizinin toplam degerini dizinin elemanlarina böldügümde 
// ortalamayi bulabilirim.

ortalama = toplam / sayiKumesi.length
console.log("Dizinin ortalamasi: " + ortalama);

// en büyük sayiyi bulmak icin ismlemler

for (let index = 0; index < sayiKumesi.length; index++) {
    if (sayiKumesi[index] > enBuyukSayi) {
        enBuyukSayi = sayiKumesi[index]
    }
}
console.log("Dizideki en büyük sayi: " + enBuyukSayi + " dir");

// En kücük sayiyi bulma

for (let index = 0; index < sayiKumesi.length; index++) {
    if (sayiKumesi[index] < enKucukSayi) {
        enKucukSayi = sayiKumesi[index]
    }
}
console.log("Dizideki en kücük sayi: " + enKucukSayi + "dir");

// karelerini bulma ve yazdirma,

for (let index = 0; index < sayiKumesi.length; index++) {
    kare = sayiKumesi[index] * sayiKumesi[index];
    karelerDizisi.push(kare);

}
console.log(karelerDizisi);

// karekök bulma bunu yapabilemk icin internetten de bircok yere baktim. Ya Mat.sqrt() fonksiyonunu
// kullanmislar ya da kendileri fonksiyon yazmislar. Biz ikisini de görmedimiz icin ben Mat.sqrt fnk. kullandim

for (let index = 0; index < sayiKumesi.length; index++) {
    karekok = Math.sqrt(sayiKumesi[index]);
    karekokDizisi.push(karekok);
}
console.log(karekokDizisi);