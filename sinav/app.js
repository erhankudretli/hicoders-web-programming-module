let allEnteredValues=[
    {
        name: "Ali",
        surname: "Zadikov",
        adres1:"route de morat",
        adres12:"bahnhoffestrasse route de morat",
    }

];
function createListArea(){
    return `
    <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
           ${createTableBody()}
          </table>
    `
}

function createTableBody(){
return allEnteredValues.map((data,index)=> ` <tbody>
<tr>
  <th scope="row"></th>
  <td>${data.name}</td>
  <td>${data.surname}</td>
  <td><button id="${index}" class="btn btn-success delete">See Details</button></td>
</tr>
</tbody> `
)}


function refreshListArea(){
document.querySelector(".list-area").innerHTML=createListArea();
}
refreshListArea();

function AddElementiinList(){
    let inputDatas={};
    inputDatas={
        name: document.getElementsByTagName("input")[0].value,
        surname: document.getElementsByTagName("input")[1].value,
    }
    allEnteredValues.push(inputDatas);
    refreshListArea()
    event.preventDefault();
    
}

document.getElementById("addBtn").addEventListener("click",AddElementiinList)

let selectedPerson=[];

function addButtonClickedEvent(pEvent){
  let clickedElement = pEvent.target;
  if(clickedElement.tagName.toLowerCase() === "button"){
      let index = parseInt(clickedElement.id);
      let clickedPerson = allEnteredValues[index];
      selectedPerson.push(clickedPerson);
       refreshDetailsArea();
      console.log(selectedPerson)
  }
}

document.querySelector(".list-area").addEventListener("click",addButtonClickedEvent);

function refreshDetailsArea(){
  document.querySelector(".details-area").innerHTML=showDetails();
}



function showDetails(){
  return selectedPerson.map((data)=> ` 
  <div>${data.adres1}</div>
  <div>${data.adres12}</div>

  `
  )}




 