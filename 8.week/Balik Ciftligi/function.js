const fishFarm = [ 
    { 
        fishType: "Salmon",
        price: 15.70,
        entryDate: new Date(2021, 0, 1),    // 01.01.2021
        durationInDays: 30,
        itemWeightInGrams: 145,
        originCountry: "Norway", 
        season: "Winter", 
        stockVolumeInKg: 6500,
        saleLocations: ["ZH", "GE", "BE", "VD"],
    },
    { 
        fishType: "Seatrout",
        price: 7.90,
        entryDate: new Date(2021, 11, 12),    // 12.12.2021
        durationInDays: 20,
        itemWeightInGrams: 460,
        originCountry: "Japan", 
        season: "Winter", 
        stockVolumeInKg: 1600,
        saleLocations: ["GL", "GR", "BE", "VS"],
    },
    { 
        fishType: "Sailfish",
        price: 5.20,
        entryDate: new Date(2021, 3, 19),    
        durationInDays: 15,
        itemWeightInGrams: 240,
        originCountry: "United Kingdom", 
        season: "Spring", 
        stockVolumeInKg: 500,
        saleLocations: ["ZH", "SH", "BL", "SO"],
    },
    { 
        fishType: "Red Drum",
        price: 3.10,
        entryDate: new Date(2021, 5, 15),   
        durationInDays: 18,
        itemWeightInGrams: 300,
        originCountry: "Poland", 
        season: "Summer", 
        stockVolumeInKg: 15500,
        saleLocations: ["FR", "GE", "NE", "TI"],
    },
    { 
        fishType: "Pompano",
        price: 10,
        entryDate: new Date(2021, 8, 17),    
        durationInDays: 20,
        itemWeightInGrams: 645,
        originCountry: "France", 
        season: "Autumn", 
        stockVolumeInKg: 1500,
        saleLocations: ["ZH", "GE", "BE", "VD"],
    },
    { 
        fishType: "Bluefish", 
        price: 13.70,
        entryDate: new Date(2021, 10, 11),  
        durationInDays: 5,
        itemWeightInGrams: 845,
        originCountry: "Italy", 
        season: "Winter", 
        stockVolumeInKg: 200,
        saleLocations: ["NW", "OW", "UR", "LU"],
    },
    { 
        fishType: "Mackerel",
        price: 8.90,
        entryDate: new Date(2021, 6, 18),    
        durationInDays: 16,
        itemWeightInGrams: 150,
        originCountry: "GREECE", 
        season: "Summer", 
        stockVolumeInKg: 8100,
        saleLocations: ["AG", "BL", "BE", "VD", "TG"],
    },
    { 
        fishType: "Perch",
        price: 11.90,
        entryDate: new Date(2021, 10, 1),  
        durationInDays: 30,
        itemWeightInGrams: 222,
        originCountry: "Egypt", 
        season: "Summer", 
        stockVolumeInKg: 9500,
        saleLocations: ["TI", "GE", "ZH", "VD", "AR"],
    },
    { 
        fishType: "Mullet",
        price: 4.80,
        entryDate: new Date(2021, 2, 14),   
        durationInDays: 30,
        itemWeightInGrams: 333,
        originCountry: "Vietnam", 
        season: "Summer", 
        stockVolumeInKg: 600,
        saleLocations: ["ZH", "GE", "BE", "VD"],
    },
    { 
        fishType: "Tuna",
        price: 19.50,
        entryDate: new Date(2021, 0, 1),    
        durationInDays: 30,
        itemWeightInGrams: 250,
        originCountry: "Spain", 
        season: "Winter", 
        stockVolumeInKg: 2300,
        saleLocations: ["ZH", "VD", "BS", "TI", "SG"],
    },  
  ]
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
/*
 isimleri yazdiran fonksiyon
 */
function showName(pArray) {
    pArray.map((type) => console.log(type.fishType));
  }
/*
  ülkeleri yazdiran fonksiyon
 */
  function showCountry(pArray) {
    pArray.map((type) => console.log(type.originCountry));
  }
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

/*
Son kullanma tarihlerine gore baliklari siralayiniz.
 (Son kullanma tarihi yaklasan baliklar once gosterilmelidir)
 */

function sonKullanmaTarihiBul(pArray) {
    let yeniListe = [];
    pArray.map((fish) => {
      fish.entryDate.setDate(fish.entryDate.getDate() + fish.durationInDays);
      yeniListe.push({ PullDate: fish.entryDate, fishType: fish.fishType });
    });
    return yeniListe;
  }

  /**
 * AB den gelen ve 10 fr ucuz olan baliklari veren fonksiyon
 */
function findFromAB(pArray, pLimit) {
    let fromAB = pArray.filter(
      (type) =>
        (type.originCountry == "Poland" ||
          type.originCountry == "France" ||
          type.originCountry == "Italy" ||
          type.originCountry == "GREECE" ||
          type.originCountry == "Spain") &
        (type.price < pLimit)
    );
    return fromAB;
  }

  /*
 * toplam balik stogunu veren fonksiyon
 */
function findTotalStock(pArray) {
    let stokckList = pArray.map((type) => type.itemWeightInGrams);
    return stokckList.reduce((a, b) => {
      return a + b;
    });
  }

  /**
 * en pahali baliklari veren fonksiyon
 */
function findExpensiveFish(pArray) {
    let highPrice = Math.max.apply(
      Math,
      pArray.map(function (fish) {
        return fish.price;
      })
    );
    let highPriceList = pArray.filter((fish) => fish.price == highPrice);
    return highPriceList;
  }

  /**
 * en uzun sureli durabilen baliklari veren fonksiyon
 */
function findLongerDuration(pArray) {
    let durationDay = Math.max.apply(
      Math,
      pArray.map(function (fish) {
        return fish.durationInDays;
      })
    );
    let durationDayList = pArray.filter(
      (fish) => fish.durationInDays == durationDay
    );
    return durationDayList;
  }

  /**
 * ulke adini veren fonksiyon
 */
function showCountry(pArray) {
    pArray.map((type) => console.log(type.originCountry));
  }

  /**
 * kis ve sonbahar sezonu icin fransiz kantonundakileri veren fonksiyon
 */
function findSwissPrice(pArray) {
    let swissPrice = pArray.filter(
      (swiss) =>
        (swiss.season == "Winter" || swiss.season == "Autumn") &
        swiss.saleLocations.includes("VD")
    );
    let swissPriceList = swissPrice.map((type) => type.price);
    return swissPriceList;
  }

  /**
 * ortalamayi veren fonksiyon
 */
function findAverage(pArray) {
    let sum = pArray.reduce((a, b) => {
      return a + b;
    });
    let average = sum / pArray.length;
    return average;
  }
  /**
 * ticinodaki toplam stogu veren fonksiyon
 */
function findTicinoStock(pArray) {
    let saleInTicino = pArray.filter((ticino) =>
      ticino.saleLocations.includes("TI")
    );
    let ticinoStokckList = saleInTicino.map((type) => type.stockVolumeInKg);
    return ticinoStokckList.reduce((a, b) => {
      return a + b;
    });
  }

  /**
 * Yazlik sezonda cikan ve AB disindan gelen ve de ZH'de satilan baliklari veren fonksiyon
 */
function findImported(pArray) {
    let summerImport = pArray.filter(
      (type) =>
        (type.season == "Summer") &
        type.saleLocations.includes("ZH") &
        (type.originCountry == "Norway" ||
          type.originCountry == "Japan" ||
          type.originCountry == "United Kingdom" ||
          type.originCountry == "Egypt" ||
          type.originCountry == "Vietnam")
    );
    let weightList = summerImport.map((type) => type.itemWeightInGrams);
    return weightList;
  }