/*
*Stok miktari 500 kg uzerinde olan baliklarin isimleri nelerdir?
*/ 
function StokTakipEt(kgLimit){ 
    let balikListesi=[]; 
    fishFarm.map (a => {
    if(a.stockVolumeInKg > kgLimit){
        balikListesi.push(a.fishType)}
});
return balikListesi;
}
console.log(StokTakipEt(500));
/*
 Fiyat araligi 9Fr. ile 12 Fr. arasindaki baliklar hangileridir?
 */
function fiyataGoreFiltrele(alt,ust){
let filtreli=[];
fishFarm.filter(b => { 
    if (b.price<ust && b.price>alt) {
        filtreli.push(b.fishType);
    }
});
return filtreli;
}
console.log(fiyataGoreFiltrele(9,12));

/*
 Sadece Bern'de ve kis sezonu satilan baliklar hangileridir?
 */


 function sezonLokasyonFiltrele(kanton,sezon){ 
let lokasyonBazli=[];
fishFarm.filter(c => { 
    if (c.saleLocations.includes(kanton) && c.season.includes(sezon)) {
        lokasyonBazli.push(c.fishType);
    }
});
return lokasyonBazli;
}
console.log(sezonLokasyonFiltrele("BE","Winter"));

/*
Son kullanma tarihlerine gore baliklari siralayiniz. (Son kullanma tarihi yaklasan baliklar once gosterilmelidir)
 */
let sonKullanimTarihi=[];
 function sonKullanimTarihlerineBak(){
   

fishFarm.map(d => { 
    d.entryDate.setDate(d.entryDate.getDate()+d.durationInDays)
    sonKullanimTarihi.push(d.entryDate+" "+d.fishType);
  
    
});
return sonKullanimTarihi;
}
sonKullanimTarihlerineBak();

/*
Avrupa Birligi'nden (AB) gelen ve fiyati 10Fr dan dusuk olan baliklari alfabetik siraya gore siralayiniz.
 */

let abUlkeleri=["Norway","Spain","GREECE","Italy","France"];
let butunUlkeler=fishFarm.map(ittem=> {
    ittem.originCountry;
})
console.log(butunUlkeler)
