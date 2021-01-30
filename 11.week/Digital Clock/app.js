// Bu aplikasyonda Digital Dunya Saati yapilacaktir.

// Kullanici;

// - Acilir menude sehir adlarini gorebilecek.
// -Listede olan sehir secildiginde o sehrin saatini ve sehrin adini sol tarafta gorebilecektir.

// ** Asagidaki islemler uygulanacaktir.**

// 1) Sayfanin ilk goruntusu (acilir menu,baslik  gibi )innerHTML ile yazilir.
// 2) Acilir menunun atasina addeventlistener eklenir.
// 3) Sadece secilen opsiyonlarda calismasi saglanir.
// 4) Farkli sehirlerin saat fonksiyonlari yazilir.
// 5) Set interval ile her saniye saatlerin tekrarlanmasi saglanir.
// 6)  Fonksiyonlar addEventListener a eklenir. 
 
document.getElementById("dropdown").innerHTML = anaIcerik();
document.getElementById("title").innerHTML = sayfaBasligi();
document.querySelector("#country").addEventListener("change", (event) => {
  changeHour(event);
});
document.getElementById("clock").innerHTML = "Select a country.";
let newyork = "";
let zurich = "";
let newZeland = "";