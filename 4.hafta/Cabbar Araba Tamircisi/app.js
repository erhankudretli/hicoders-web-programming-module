let hizmetZamani;
let aracModeli;
let aracMarkasi;
let aracRengi;

if (hizmetZamani >= 5) {
    console.log("Aracinizi kabul ediyoruz.")
} else {
    if (aracRengi == "siyah" || aracRengi == "kirmizi") {
        if (aracMarkasi == "BMW") {
            if (aracRengi == "kirmizi" && (aracModeli >= 2010 && aracModeli <= 2020)) {
                console.log("Aracinizi kabul ediyoruz.")
            } else if (aracModeli == 2020 && aracRengi == "siyah") {
                console.log("Aracinizi kabul ediyoruz.")
            } else {
                console.log("Aracinizi kabul ETMIYORUZ")
            }

        } else if (aracMarkasi == "Audi") {
            if ((aracModeli >= 2005 && aracModeli <= 2010) || (aracModeli >= 2014 && aracModeli <= 2020)) {
                console.log("Aracinizi kabul ediyoruz.")
            } else {
                console.log("Aracinizi kabul ETMIYORUZ")
            }

        } else if (aracMarkasi == "VW") {
            if (aracRengi == "siyah" && (aracModeli >= 2001 && aracModeli <= 2018)) {
                console.log("Aracinizi kabul ediyoruz.")
            } else {
                console.log("Aracinizi kabul ETMIYORUZ")
            }

        } else {
            console.log("Aracinizi kabul ETMIYORUZ")
        }
    } else {
        console.log("Aracinizi kabul ETMIYORUZ")
    }
}