/**
 * AKIS
 * Müsteri solda dinamik olarak olusturulmuzs olan ürün katalogundan istedigi ürünleri "add" butonuna basarak
 * sepet kismina gecirecek. Her yeni eklenen ürün sepette alt alta gösterilecek.
 * 
 * TEKNIK ANALIZ
 * Sol taraftaki panelde gösterilecek ürünler bir liste olarak verilmis. Bu listeyi uygun bir HTML yapisina cevirerek
 * sol panele yerlestirecegim. Panelin parent elemani üzerine "add" butonlarini dinleyecek bir EVENTLISTENER yerlestirecegim.
 * Her butona tiklamada EVENT bilgisini kullanarak hangi ürününün sepete atilmak istendigini anlayacak ve bu ürünü sepet icin 
 * olusturmus oldugum diger listeye yerlestirecegim. Her ekleme islemi sonrasi sepet HTML containerini sepet listesini 
 * kullanarak güncelleyecegim.
 * 
 * Silme islemi yine spette containri üzerine yerlestirilir. Olay gerceklestiginde alinan referans ile ilgili ürün sepet 
 * arrayinden kaldirilir ve sepet HTMLi güncellenir.
 */

 // DOM olusturmayi bittiginde browser bu eventi atar.
 document.addEventListener("DOMContentLoaded", function() { 
    document.querySelector("#products-container").addEventListener("click", addButtonClickedEvent);
    document.querySelector("#basket-container").addEventListener("click", removeButtonClickedEvent);
    document.querySelector("#products-container").innerHTML = createProductCatalog(productList);
 });
 
