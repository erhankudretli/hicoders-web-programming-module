
/*
*Stok miktari 500 kg uzerinde olan baliklarin isimleri nelerdir?
*/

console.log("500 kg den fazla kilodaki arasindaki baliklar");
console.log(StokTakipEt(500));

/*
 Fiyat araligi 9Fr. ile 12 Fr. arasindaki baliklar hangileridir?
 */
console.log("9 ile 12 fr arasindaki baliklar");
console.log(fiyataGoreFiltrele(9,12));

/*
 Sadece Bern'de ve kis sezonu satilan baliklar hangileridir?
 */

console.log("bern de kis sezonu satilan baliklar");
console.log(sezonLokasyonFiltrele("BE","Winter"));
/*
 Son kullanma tarihlerine gore baliklari siralayiniz. 
 (Son kullanma tarihi yaklasan baliklar once gosterilmelidir)
 */

console.log("son kullanma tarihi yaklasan baliklar");
let newListToSort = sonKullanmaTarihiBul(fishFarm).sort(
  (a, b) => a.PullDate.getTime() - b.PullDate.getTime()
);
console.log(newListToSort);

/*Avrupa Birligi'nden (AB) gelen ve fiyati 10Fr dan dusuk olan baliklari alfabetik siraya gore siralayiniz.
*/ 
console.log("AB den gelen ve 10 fr ucuz olan baliklar");
showName(findFromAB(fishFarm, 10));

// Toplam balik stoku ne kadardir?
console.log("toplam balik stogu");
console.log(findTotalStock(fishFarm));

// En pahali olan balik hangisidir?
console.log("en pahali balik");
showName(findExpensiveFish(fishFarm));

// En uzun sureli durabilen baliklar hangi ulkeden gelmektedir?
console.log("en uzun sureli durabilen baliklar");
showCountry(findLongerDuration(fishFarm));

// Kis ve sonbahar sezonu icin swiss romande region'da satilan baliklarin ortalama fiyati nedir?
console.log(
  "***Kis ve sonbahar sezonu swiss romande satilan baliklarin ortalama fiyati***"
);
console.log(findAverage(findSwissPrice(fishFarm)));

// Ticino Kantonu icin stokta toplam ne kadar balik mevcuttur?
console.log("***Ticino Kantonu icin toplam balik stogu***");
console.log(findTicinoStock(fishFarm));

//11) Yazlik sezonda cikan ve AB disindan gelen ve de ZH'de satilan baliklarin ortalama gramajini bulunuz?
console.log(
  "***Yazlik sezonda ve AB disindan gelen ve swiss romande satilan baliklarin ortalama fiyati***"
);
console.log(findAverage(findSwissPrice(fishFarm)));