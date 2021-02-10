let GameWord="Lütfen Kelime Secin"
function refreshGame(){
    document.getElementById("game-container").innerHTML=GameArea();
    }

function createProductLines(pList){
    return pList.map( (p, index) => `
    <table>
    
     <tr>
           <td>${p.wordName}</td>
          
           <td><button id="${index}">SEC</button></td>
       </tr>
       </table>`).join("");
}

document.getElementById("words-container").innerHTML=createProductLines(wordList);


// 
function GameAreaBase(){
    return `
    <div>${GameWord}</div>
    <div>
    <button id="btnRndm">Random</button>
    <button id="btnChck">Check</button>
    </div>
   
    `
}
document.getElementById("game-container").innerHTML=GameAreaBase()


document.getElementById("words-container").addEventListener("click",kelimeSec)


function kelimeSec(pEvent){
    let clickedWord = pEvent.target;
    if(clickedWord.tagName.toLowerCase() === "button"){
      let index= +clickedWord.id;
      let SelectedWord=wordList[index]
       GameWord=SelectedWord.wordName;
       refreshGame();
       butonuAta()
    }
}

function GameArea(){
    return `
    <div>${GameWord}</div>
    <div>
    <button id="btnRndm">Random</button>
    <button id="btnChck">Check</button>
    </div>
    `
   
}

function butonuAta(){

document.getElementById("btnRndm").addEventListener("click",kelimeyiAyir)
}
function kelimeyiAyir(){

GameWord=GameWord.split()
refreshGame()
  
}





