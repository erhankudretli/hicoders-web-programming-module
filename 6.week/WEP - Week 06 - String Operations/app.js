/* 
1) String ifadenin bas harflerini uppercase yapma charAt methodu ile....
*/
let ornek1 = "asik veysel";
let dizi = [];
dizi = ornek1.split(" ");
let cikti = [];

for (let i = 0; i < dizi.length; i++) {
    cikti.push(dizi[i].charAt(0).toUpperCase() + dizi[i].slice(1));
}
console.log(cikti.join(" "));


/* 
2) 0-100 arasi sayilari 10x10 seklinde yazdirma...
*/
let space = "";
for (let i = 1; i < 101; i++) {
    if (i % 10 == 1) {
        space = space + "\n";
        space = space + i + ",";
    } else {
        space = space + i + ",";
    }
}
console.log(space);

/* 
3)Asal sayilari yazdir...
*/
let asalDizi = [];
for (let i = 2; i < 101; i++) {
    let status = true;
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            status = false;
        }
    }
    if (status) {
        asalDizi.push(i);
    }
}
console.log(asalDizi);



/* 
4)Rastgele Sifre Olusturma....
*/
let kucukHarf = "abcdefghijklmnopqrstuvwxyz",
    buyukHarf = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    ozelKarakter = "!@#_"
sayilar = "0123456789"
tumKarakterler = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#_0123456789";
let parolaDizisi = [];
for (let k = 0; k < 50; k++) {
    parolaUzunlugu = Math.floor(Math.random() * 8) + 8; // 8 ve 16 arasında sayı üretir.;
    password = "",
        password += kucukHarf.charAt(Math.floor(Math.random() * kucukHarf.length));
    password += buyukHarf.charAt(Math.floor(Math.random() * buyukHarf.length));
    password += ozelKarakter.charAt(Math.floor(Math.random() * ozelKarakter.length));
    password += sayilar.charAt(Math.floor(Math.random() * sayilar.length));
    for (let i = 1; i <= parolaUzunlugu - 4; i++) {
        password += tumKarakterler.charAt(Math.floor(Math.random() * tumKarakterler.length));
    }
    parolaDizisi.push(password);
} // dis while kapanis
console.log(parolaDizisi);
/* ödev oldu fakat söyle bir sikinti var, sifrelerin ilk 4 karakteri hep ayni sirayla olustu. Bu bir 
zayiflik fakat, olusan sifre stringi ni tüm karakterleri tasimasi bakimindan kontrol edecek yöntem 
bulamadim (match() yöntemi yemedi, sebebini anlamadim) ve düsünmek icin fazla zaman kalmadi. 
Ama carsamba aksami bu ödevi birlikte yapalim ins.*/


/* 
5)yildizlarda kayar...
*/
let i, j;
let yildizList = [""];

for (i = 0; i < 4; i++) {
    for (j = 0; j < i; j++) {
        yildizList.push("*");
        console.log(yildizList.join(""));
    }
}