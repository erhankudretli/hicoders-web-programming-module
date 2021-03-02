/*   
 ***user interaction 
kullanici sisteme girince ilk olarak müsterilerinin listesini görür. Bir müsterinin üzerine tikladiginda,
 o müsteriye ait bir veya birden fazla hayatina kast edilen kisi listesi karsisina cikar. 
 Bu listede müstakbel maktülün üzerine tikladiginda o kisinin adreslerini görür. 
 Ayrica eger listedeki kisi dar-ül bekaya irtihal etti ise o kisiyi listede isaretleyecek 
 bir butonda mevcuttur ve listede ismi daha silik gözukur.
***technical details
1-ui olusturulur.
  1.1- musterilerinin listesi
  1.2- olecek kisilerin listesi
  1.3- olecek kisilerin adres listesi
2- uc sayfa icin  input yazdirilir
3- inputlardaki butonlara add event listener eklenir
4-listedeki isimlere de add event listener eklenir
5-eklenen isimlerin local storage kaydedilmesi saglanir
 5.1-local storage da kisi adi olecek kisinin adi durumu ve adres bilgileri icin keyler olusturulur.
6-olen kisilerin silik gozukmesi icin fonksiyon yazilir.
*/
let clientId = "";
let victimId = "";

document.getElementById("client-container").innerHTML = writeDiv();
document.getElementById("client").innerHTML = clientInput();

document.getElementById("main-container").addEventListener("click", (event) => {
  if (event.target.id === "addButon") {
    addNewClient();
  }
});

document.getElementById("main-container").addEventListener("click", (event) => {
  if (event.target.className === "list-group-item-dark m-2") {
    clientId = event.target.id;
    document.getElementById("client-container").innerHTML = writeDeathList();
    document.getElementById("client").innerHTML = addDeathInput();
  }
});

document.getElementById("main-container").addEventListener("click", (event) => {
  if (event.target.id === "addInput") {
    writeDeathInput();
  }
});

document.getElementById("main-container").addEventListener("click", (event) => {
  if (event.target.className === "list-group-item-dark m-3") {
    victimId = event.target.id;
    document.getElementById("client-container").innerHTML = writeAdressList();
    document.getElementById("client").innerHTML = addVictimAdresInput();
  }
});

document.getElementById("main-container").addEventListener("click", (event) => {
  if (event.target.id === "addAdress") {
    addNewAdress();
  }
});