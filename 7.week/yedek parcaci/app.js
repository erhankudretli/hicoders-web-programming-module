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

let NotToplami=0;
let DersOrtalamasi=0;
 function NotOrtalamasiBul(DersIndexi){
    for(let index=0;index<notes.length;index++){
        NotToplami=NotToplami+ notes[index][DersIndexi];
        }
        DersOrtalamasi=NotToplami/notes.length;    
        return DersOrtalamasi;    
 }
 /*
Degerleri sifirlayan fonk. 
*/
 function DegerleriSifirla(){
     NotToplami=0;
     DersOrtalamasi=0;
 }


// Tüm Derslerden ortalamanin üstünde olanlari bul...

let TumDerslerdenBasariliOlanlar=[];
let al=true;
DegerleriSifirla();
for(let e=0;e<notes.length;e++){
    for(let h=1;h<5;h++){
    if (NotOrtalamasiBul(h)>notes[e][h]){
     al=false;
    }
}
if (al) {
    TumDerslerdenBasariliOlanlar.push(notes[e][0])
}
}
console.log(TumDerslerdenBasariliOlanlar);
