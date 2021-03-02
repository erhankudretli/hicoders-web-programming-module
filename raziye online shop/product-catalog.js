function formatDate(pDate){
    return pDate.toLocaleDateString('de-CH');
}

function createProductCatalog(pList){
    return `
       <table>
           ${createProductCatalogHeader()}
           ${createProductLines(pList)}
       </table>
    `;
}

function createProductCatalogHeader(){
    return `
       <tr>
           <th>Name</th>
           <th>Calory</th>
           <th>Exp. Date</th>
           <th>Price</th>
           <th></th>
           <th></th>
       </tr>
    `;
}

function createProductLines(pList){
    return pList.map( (p, index) => `
       <tr>
           <td>${p.productName}</td>
           <td>${p.totalCalories}</td>
           <td>${formatDate(p.expireDate)}</td>
           <td>${p.price}</td>
           <td><img src="${p.productImage}"></td>
           <td><button data-renk="kirmizi" id="${index}">add</button></td>
       </tr>
   `).join("");
}

// main
function addButtonClickedEvent(pEvent){
    let clickedElement = pEvent.target;
    if(clickedElement.tagName.toLowerCase() === "button"){
        let index = parseInt(clickedElement.id);
        let selectedProduct = productList[index];
        
        addToBasket(selectedProduct);
    }
}