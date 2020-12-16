/* 
1) String ifadenin bas harflerini uppercase yapma charAt methodu ile....
*/
// ornek1="asik veysel";
// BasHarflerBuyuk=ornek1.charAt(0).toUpperCase() + ornek1.slice(1,5) + ornek1.charAt(5).toUpperCase() + ornek1.slice(6);
// console.log(BasHarflerBuyuk);

/* 
2) 0-100 arasi sayilari 10x10 seklinde yazdirma...
*/



// let yatay1=[];
//  for(let index=0;index<10; index++){
//     yatay1.push(sayiDizisi[index]);   
// }
// console.log(yatay1.join());
// let yatay2=[];
// for(let p=10;p<20; p++){
//     yatay2.push(sayiDizisi[p]);   
// }
// console.log(yatay2.join());
// let yatay3=[];
// for(let p=20;p<30; p++){
//     yatay3.push(sayiDizisi[p]);   
// }
// console.log(yatay3.join());
// let yatay4=[];
// for(let p=30;p<40; p++){
//     yatay4.push(sayiDizisi[p]);   
// }
// console.log(yatay4.join());

// let yatay5=[];
// for(let p=40;p<50; p++){
//     yatay5.push(sayiDizisi[p]);   
// }
// console.log(yatay5.join());
// let yatay6=[];
// for(let p=50;p<60; p++){
//     yatay6.push(sayiDizisi[p]);   
// }
// console.log(yatay6.join());
// let yatay7=[];
// for(let p=60;p<70; p++){
//     yatay7.push(sayiDizisi[p]);   
// }
// console.log(yatay7.join());
// let yatay8=[];
// for(let p=70;p<80; p++){
//     yatay8.push(sayiDizisi[p]);   
// }
// console.log(yatay8.join());
// let yatay9=[];
// for(let p=80;p<90; p++){
//     yatay9.push(sayiDizisi[p]);   
// }
// console.log(yatay9.join());
// let yatay10=[];
// for(let p=90;p<100; p++){
//     yatay10.push(sayiDizisi[p]);   
// }
// console.log(yatay10.join());

/* 
3)asal sayilar
*/
// yukarida olusturdugum diziyi kullaniyorum...

// let asalDizisi=[];
// for (let i = 2; i < 101; i++) {
//     let durum=true;
//     for (let j = 2; j < i; j++) {
//         if(i %j==0){
//             durum=false;
//         }
//     }
// if(durum){
//     asalDizisi.push(i);
// }
// }
// console.log(asalDizisi);
   




/* 
5)yildizlarda kayar...
*/

  
 let i, j;
 let yildizList=[""];

for (i = 0; i <4; i++) {
    for (j = 0; j < i; j++) {
       yildizList.push("*");
 console.log(yildizList.join(""));
} }