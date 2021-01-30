let OgrenciListesi = [];
ListeGuncelle();
let eklemeButonu = document.querySelector("#submitButton");
eklemeButonu.addEventListener("click", OgrenciEkle);

document.querySelector(".students-list").addEventListener("click", OgrenciSil)