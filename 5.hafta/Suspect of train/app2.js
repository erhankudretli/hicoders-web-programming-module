let kacHakkimVar = 4;
let tahmin = 0;
let hedefvagon = Math.floor(Math.random() * 10) + 1;
let donmeSayisi=0;
let puaniniz=0;

while (kacHakkimVar != 0) {
    tahmin = parseInt(prompt("Sizce süpheli hangi vagondadir?"));
    donmeSayisi++;
    if (hedefvagon == tahmin) {
        alert("Tebrikler kazandiniz...." + donmeSayisi + ". seferde kazandiniz.");
        puaniniz=100-(donmeSayisi-1)*25;
        alert("Puaniniz: " + puaniniz);
        break;
    } // dis if 
    else if (hedefvagon > tahmin) {
        alert("Süpheliyi daha arkada arayin...");
    } else if (hedefvagon < tahmin) {
        alert("Süpheliyi daha önde arayin...");
    }
    kacHakkimVar--;
} // while kapama

if (kacHakkimVar == 0) {
    alert("Maalesef Kaybettiniz...");
}