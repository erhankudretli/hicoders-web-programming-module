/*
 - Bootstrap yardimiyla dizayn olusturacagim. Kabaca 4x oyuncu listesinin bulunacagi bölüm 8x ise oyunun oynanacagi bölüm.
 - Öncelikle bir oyuncu listesi olusturacagim ve kullanicilar buraya oyuncu ekleyebilecekler. 
 -  




*/
document.getElementById("addGamer").addEventListener("click", addGamer)
let GamerList = [];
function addGamer() {
    let formInfos = {};
    formInfos = {
      firstName: document.getElementsByTagName("input")[0].value,
      lastName: document.getElementsByTagName("input")[1].value,
    }
    GamerList.push(formInfos);
    event.preventDefault();
    refreshList()
    return console.log(GamerList);
  }

  function showGamers(pList) {
    return  pList.map((student, index) => `
    <tbody>
    <tr>
      <th scope="row">${index+1}</th>
      <td>${student.firstName}</td>
      <td>${student.lastName}</td>
      <td></td>
      <td><button id="${index}" type="button" class="btn btn-success">Play</button></td>
    </tr>
  </tbody>`);
  }

  function showGamerHeader() {
    return `<table class="table">
    <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th> 
      <th scope="col">Score</th> 
    </tr>
  </thead>
 ${showGamers(GamerList)}
  </table>`
  }

document.querySelector(".gamer-list").innerHTML=showGamerHeader()

function refreshList() {
    document.querySelector(".gamer-list").innerHTML = showGamerHeader(GamerList);
  }