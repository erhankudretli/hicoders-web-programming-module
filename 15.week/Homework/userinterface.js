  
//local storage kaydetme

function client() {
    let storageList = [];
    for (let index = 0; index < localStorage.length; index++) {
      let client = JSON.parse(localStorage.getItem(localStorage.key(index)));
      storageList.push(client);
    }
    return storageList;
  }

  //*****inputtan eleman girisi*****

  //musteri girisi
function addNewClient() {
    let userList = [];
    let inputText = document.getElementById("user-info");
    if (inputText.value == "") {
      swal("Are you sure?");
    } else {
      userList.push({
        name: inputText.value,
        killerList: [{ killerName:"", adress:[], status: true }],
      });
      let key = inputText.value;
      localStorage.setItem(key, JSON.stringify(userList));
      document.getElementById("client-container").innerHTML = writeDiv(userList);
    }
  }

  // oldurulecek kisilerin girisi

function writeDeathInput() {
    let killerListe = [];
    let killerName = [];
    let inputText = document.getElementById("info");
  killerListe = JSON.parse(localStorage.getItem(clientId));
    if (inputText.value == "") {
      swal("Nobody death?");
    } else {
      let key = inputText.value;
      killerListe[0].killerList.push({
        killerName: key,
        adress: [],
        status: true,
      });
      localStorage.setItem(clientId, JSON.stringify(killerListe));
      document.getElementById("client-container").innerHTML = writeDeathList();
    }
  }
  
  // oldurulecek kisilerin  ADRES girisi

function addNewAdress() {
  let killerListe = [];
  let killerName = [];
  let inputText = document.getElementById("info-adress");
killerListe = JSON.parse(localStorage.getItem(clientId));
  if (inputText.value == "") {
    swal("No adress?");
  } else {
    let victimInfo = killerListe[0].killerList.filter((client) => {
      if (client.killerName == victimId) return client;
    });
    let adressNew= inputText.value;
    victimInfo[0].adress.push(adressNew);
    localStorage.setItem(clientId, JSON.stringify(killerListe));
    document.getElementById("client-container").innerHTML = writeAdressList();
  }
}