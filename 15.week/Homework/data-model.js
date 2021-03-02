//musteri isimlerinin oldugu sayfanin yazdirilmasi

function writeDiv() {
    clientNames = `<div>
          <h1 id='title'>MY CLIENTS</h1>
        <ol id='list'>`;
    client()
      .map((clients) =>
        clients.map(
          (client, index) =>
            (clientNames += `<li class="list-group-item-dark m-2" id="${client.name}" >${client.name}</li>`)
        )
      )
      .join("");
    clientNames += `</ol>
                 </div>
                 `;
    return clientNames;
  }
  
  function clientInput() {
    return `<div class="input-group mb-3">
                <input type="text" id="user-info" class="form-control" placeholder="write a name" aria-label="write a name" aria-describedby="basic-addon2">
                <div class="input-group-append">
                  <button class="btn btn-outline-secondary" type="button" id="addButon">ADD</button>
                </div>
              </div>`;
  }
  
  //oldurulecek olan kisilerin isimlerinin oldugu sayfanin yazdirilmasi
  
  function writeDeathList() {
    let activePerson = [];
    activePerson = JSON.parse(localStorage.getItem(clientId));
    let deathList = `<div>
    <h1>${activePerson[0].name}s Death List"</h1>
    <ol id='deathList'>`;
    activePerson[0].killerList
      .filter(
        (client, index) =>
          (deathList += `<li class="list-group-item-dark m-3" id="${client.killerName}" >${client.killerName}</li>`)
      )
      .join("");
    deathList += `</ol>
           </div>
           `;
    return deathList;
  }
  
  function addDeathInput() {
    let newDeathList = `<div class="input-group mb-3">
                <input type="text" id="info" class="form-control" placeholder="write a name" aria-label="write a name" aria-describedby="basic-addon2">
                <div class="input-group-append">
                  <button class="btn btn-outline-secondary" type="button" id="addInput">Add Next</button>
                </div>
              </div>`;
    return newDeathList;
  }
  
  //oldurulecek olan kisilerin ADRESLERININ oldugu sayfanin yazdirilmasi
  
  function writeAdressList() {
    let activePerson = [];
    activePerson = JSON.parse(localStorage.getItem(clientId));
    let adresList = `<div>
    <h1>${victimId}s Adress List"</h1>
    <ol id='adressList'>`;
    let victimInfo = activePerson[0].killerList.filter((client) => {
      if (client.killerName == victimId) return client;
    });
    victimInfo[0].adress
      .map(
        (adres, index) =>
          (adresList += `<li class="list-group-item-dark m-3" id="${adres}" >${adres}</li>`)
      )
      .join("");
    adresList += `</ol>
           </div>
           `;
    return adresList;
  }
  
  function addVictimAdresInput() {
    let adressList = `<div class="input-group mb-3">
                <input type="text" id="info-adress" class="form-control adress" placeholder="write an adress" aria-label="write a name" aria-describedby="basic-addon2">
                <div class="input-group-append">
                  <button class="btn btn-outline-secondary" type="button" id="addAdress">Add Adress</button>
                </div>
              </div>`;
    return adressList;
  }