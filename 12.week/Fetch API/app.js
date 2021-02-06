document.getElementById("button1").addEventListener("click",getTextFile);

function getTextFile(){

    fetch("./textFile.txt").then(function(response){
        return response.text()
    }).then(function(data){
        document.getElementById("output").innerHTML=data;
    })
}


document.getElementById("button2").addEventListener("click",getJson);

function getJson(){
    fetch("./fishes.json").then(function(fish){
        return fish.json();
    }).then(function(fish){
        let output="<ul>"
        fish.forEach(function(article){
            output+=`<li>Balik Ismi: ${article.fishType}</li>`
        })
        output+="</ul>"
        output+=`<hr>`
        document.getElementById("output").innerHTML+=output;
    })
}


document.getElementById("button3").addEventListener("click",getRest);

function getRest(){

    fetch("https://api.github.com/users").then(function(response){
        return response.json();
    }).then(function(users){
        let output="<ul>"
        users.forEach(user => {
            output+=`<li>Kullanici Isimleri: ${user.login}</li>`
        });
        output+="</ul>"
        document.getElementById("output").innerHTML+=output;
    })
    
}