// basket model
const basketList = [];

// Utility functions
function priceFormat(pMoney){
    return pMoney.toFixed(2);
}

// UI creation functions
function createBasket(pList){
    return `
        <table>
            ${createBasketItems(pList)}
            ${createTotalSection(pList)}
        </table>
    `;
}

function createBasketItems(pList){
    return pList.map( (p, index) => `
        <tr>
            <td>${p.productName}</td>
            <td>${p.price}</td>
            <td><img src="${p.productImage}"></td>
            <td><button id="${index}">remove</button></td>
        </tr>
    `).join("");
}

function createTotalSection(pList){
    let total = 0;
    pList.forEach(p => total += p.price);

    return `
        <tr>
            <td colspan="2">Total Price:</td>
            <td colspan="2">${priceFormat(total)} Fr.</td>
        </tr>
    `;
}

// DOM Event Handling
function removeButtonClickedEvent(pEvent){
    let clickedElement = pEvent.target;
    if(clickedElement.tagName.toLowerCase() === "button"){
        let index = parseInt(clickedElement.id);
        removeFromBasket(index);
    }
}

// main
function addToBasket(pProduct){
    basketList.push(pProduct);
    refresh();
}

function removeFromBasket(pDeletedIndex){
    basketList.splice(pDeletedIndex, 1);
    refresh();
}

function refresh(){
    document.querySelector("#basket-container").innerHTML = createBasket(basketList);
}
