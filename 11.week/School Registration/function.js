/*
 *Müsteri bir panel üzerinden listeye ögrenci eklemek ve ekledigi ögrencileri sag tarafta görmek istiyor.
 *
 *Müsterinin ögrenci ekleyecegi paneli HTML ile olusturacagim ve icersindeki bilgileri ("value")
 * bir nesnede tutacagim (Form Bilgileri nesnesi) add butonuna
 * bastiginda Form bilgileri nesnesi Ogrenci Listesi dizisine pushlanacak sag tarafta görünecek.
 *
 *ögrenci ekleme panelinden gelecek olan bilgileri ogrenciler isimli bir nesneye kayit edecegim.
 *Sonra o nesnedeki bilgileri sol tarafta gösterecegim. Böylece js ile UI i birbirine karistirmamis olacagim 
 ** Delete butonlarina ID ekle ondan sonra o id yi tiklayan sirayi sil....
 */

function OgrenciEkle() {
  let FormBilgileri = {};
  FormBilgileri = {
    firstName: document.getElementsByTagName("input")[0].value,
    lastName: document.getElementsByTagName("input")[1].value,
    age: document.getElementsByTagName("input")[2].value
  }
  OgrenciListesi.push(FormBilgileri);
  event.preventDefault();
  ListeGuncelle();
  return console.log(OgrenciListesi);
}

function ListeGuncelle() {
  document.querySelector(".students-list").innerHTML = ogrenciListTablo(OgrenciListesi);
}

function ogrenciListTablo(pList) {
  return `
    <table>
    <tr>
        <th>Student List</th>
    </tr>
    ${ogrenciListHeader()}
    ${ogrenciListOgenciler(pList)}
    <tr>
    ${TotalOgrenciSayisiniBul(OgrenciListesi)}
    </tr>
    </table>`
}

function ogrenciListHeader() {
  return `
            <tr>
                <td>Name</td>
                <td>Surname</td>
                <td>Age</td>
            </tr>`

}

function ogrenciListOgenciler(pList) {
  return pList.map((student, index) => `
    <tr>
    <td>${student.firstName}</td>
    <td>${student.lastName}</td>
    <td>${student.age}</td>
    <td><button id="${index}" class="delete">DELETE</button></td>
</tr>`);
}



function OgrenciSil(pEvent){
  let clickedElement = pEvent.target;
  if (clickedElement.tagName.toLowerCase() === "button") {
    let index = clickedElement.id;
    OgrenciListesi.splice(index, 1)
    ListeGuncelle();
  }
}


function TotalOgrenciSayisiniBul(pList) {
  let total = pList.length;
  return `<tr>
<td>Total Students: ${total}</td>
</tr>`
}