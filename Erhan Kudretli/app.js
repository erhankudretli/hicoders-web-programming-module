//
/* Program önce cleave kütüphanesi ile tarihi alacak.
* sonra karar verecek eger hicri takvim girildiyse toMiladiTakvim fonksiyonunu diger durumda
*toHicri takvim fonksiyonunu cagiracak.
* Simdi önemli olan toHicri ile toMiladi takvim fonksiyonlarini yazabilmekte, insallah
*internetten bakiyorum bulup yazacagim.
*
* Abi son 10 dk kala sadece yil olarak ceviri yapabilirsiniz dedi, ki o cok daha basit, fakat burada da ilerleme kaydetmistim
* silsem yetisir mi? silmesem nasil kac alirim bilmiyorum, 
* Yetistirebildim, sadece yili cevirmek cok kolay, fakat keske tüm tarihi cevirebilecek bir zamanim olsaydi, stackoverflowdan buldum
* aslinda calisacak kodu ama ne yazik ki cevirebilecek zamanim olmadi. 
*/


/*
DENEME 1 ALANI BASLANGIC
*/ 

new Cleave('.input-3', {
    date: true,
    datePattern: ['d', 'm', 'Y'],
    delimiter: '.',
    
});

new Cleave('.input-4', {
    date: true,
    datePattern: ['d', 'm', 'Y'],
    delimiter: '.',
    
});



document.getElementById("chngDate").addEventListener("click",decideWhich)

function decideWhich(){
    let hicri=document.getElementsByTagName("input")[0].value;
    let miladi=document.getElementsByTagName("input")[1].value;
    Date.parse(hicri);
    Date.parse(miladi);

    console.log(hicri);
    console.log(miladi);
if (hicri!=null) {

  toMiladiTakvim();
    
}
else{
toHicriTakvim();
}
}


function toMiladiTakvim(){
    

}

function toHicriTakvim(){
    function gmod(n,m){
        return ((n%m)+m)%m;
        }
        
        function kuwaiticalendar(adjust){

        var today = new Date();
        if(adjust) {
            adjustmili = 1000*60*60*24*adjust; 
            todaymili = today.getTime()+adjustmili;
            today = new Date(todaymili);
        }
        day = today.getDate();
        month = today.getMonth();
        year = today.getFullYear();
        m = month+1;
        y = year;
        if(m<3) {
            y -= 1;
            m += 12;
        }
        
        a = Math.floor(y/100.);
        b = 2-a+Math.floor(a/4.);
        if(y<1583) b = 0;
        if(y==1582) {
            if(m>10)  b = -10;
            if(m==10) {
                b = 0;
                if(day>4) b = -10;
            }
        }
        
        jd = Math.floor(365.25*(y+4716))+Math.floor(30.6001*(m+1))+day+b-1524;
        
        b = 0;
        if(jd>2299160){
            a = Math.floor((jd-1867216.25)/36524.25);
            b = 1+a-Math.floor(a/4.);
        }
        bb = jd+b+1524;
        cc = Math.floor((bb-122.1)/365.25);
        dd = Math.floor(365.25*cc);
        ee = Math.floor((bb-dd)/30.6001);
        day =(bb-dd)-Math.floor(30.6001*ee);
        month = ee-1;
        if(ee>13) {
            cc += 1;
            month = ee-13;
        }
        year = cc-4716;
        
        
        wd = gmod(jd+1,7)+1;
        
        iyear = 10631./30.;
        epochastro = 1948084;
        epochcivil = 1948085;
        
        shift1 = 8.01/60.;
        
        z = jd-epochastro;
        cyc = Math.floor(z/10631.);
        z = z-10631*cyc;
        j = Math.floor((z-shift1)/iyear);
        iy = 30*cyc+j;
        z = z-Math.floor(j*iyear+shift1);
        im = Math.floor((z+28.5001)/29.5);
        if(im==13) im = 12;
        id = z-Math.floor(29.5001*im-29);
        
        var myRes = new Array(8);
        
        myRes[0] = day; //calculated day (CE)
        myRes[1] = month-1; //calculated month (CE)
        myRes[2] = year; //calculated year (CE)
        myRes[3] = jd-1; //julian day number
        myRes[4] = wd-1; //weekday number
        myRes[5] = id; //islamic date
        myRes[6] = im-1; //islamic month
        myRes[7] = iy; //islamic year
        
        return myRes;
        }

        function writeIslamicDate(adjustment) {
        var wdNames = new Array("Ahad","Ithnin","Thulatha","Arbaa","Khams","Jumuah","Sabt");
        var iMonthNames = new Array("Muharram","Safar","Rabi'ul Awwal","Rabi'ul Akhir",
        "Jumadal Ula","Jumadal Akhira","Rajab","Sha'ban",
        "Ramadan","Shawwal","Dhul Qa'ada","Dhul Hijja");
        var iDate = kuwaiticalendar(adjustment);
        var outputIslamicDate = wdNames[iDate[4]] + ", " 
        + iDate[5] + " " + iMonthNames[iDate[6]] + " " + iDate[7] + " AH";
        return outputIslamicDate;
        } 
}

/*
DENEME 1 ALANI BITIS
*/ 







/*
DENEME 2 ALANI BASLANGIC
*/ 

/*
Analiz
+ Burada önce yazinin hangi input alanina girdigine bakacagiz, eger hicriye girmisse miladiyeCevir fonksiyonu
+ yok miladiye deger girilmisse hicriyeCevir fonksiyonu nu calistiracagiz.
*/ 


document.getElementById("chngYear").addEventListener("click",hangisineCevirelimKararVer);


function hangisineCevirelimKararVer(){
    let inputHicri=+document.getElementsByTagName("input")[2].value;
    let inputMiladi=+document.getElementsByTagName("input")[3].value;
if (inputHicri!=0) {
    miladiyeCevir(inputHicri);
}
else{
    hicriyeCevir(inputMiladi)
}

}




function miladiyeCevir(pInput){
    pInput=pInput+622
return document.getElementsByTagName("input")[3].value=pInput ;

}
function hicriyeCevir(pInput){
pInput=pInput-622
    return document.getElementsByTagName("input")[2].value=pInput  ;
    }