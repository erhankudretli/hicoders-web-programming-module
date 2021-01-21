function showProductList() {
    let isim = `<table class="table caption-top">
      <caption class="captionText" >PRODUCT LIST</caption>
      <tr>
      <th>Name</th>
      <th>Calori</th>
      <th>Exp. Date</th>
      <th>Price</th>
      <th>Img</th>
      <th>Action</th>
      </tr>`;
    productList.map((product) => {
      isim += `<tr>
        <td>${product.productName}</td>
        <td>${product.totalCalories}</td>
        <td>${product.expireDate}</td>
        <td>${product.price}</td>
        <td> <img src="${product.productImage}"/></td>
        <td> <button id="${product.productName}" class="buy">BUY</button></td>
        <tr>`;
    });
    isim += `</table>`;
    return isim;
  }
  
  function showShoppingList(pList) {
    let total = 0;
    let shopList = `<table class="table caption-top">
      <caption class="captionText" >SHOPPING LIST
      <img src="https://cdn1.iconfinder.com/data/icons/e-commerce-set-4-1/256/Groceries-256.png" id="shopping-icon" /></caption>
      <tr>
      <th>Name</th>
      <th>Price</th>
      </tr>
      `;
    pList.map((product, index) => {
      total += product.price;
      shopList += `<tr>
        <td>${product.productName}</td>
        <td>${product.price}</td>
        <td> <img src="${product.productImage}"/></td>
        <td> <button id="${index}" class="delete">Delete</button></td>
        <tr>
       `;
    });
    shopList += `<tr> <td id="toplam">Toplam fiyat: ${total.toFixed(2)}</td></tr>
     </table>`;
    return shopList;
  }
  
  function addElement(pList) {
    productList.map((product) => {
      if (product.productName === event.target.id) {
        pList.push(product);
      }
    });
  }
  
  function showTotal() {
    let lastTotal = 0;
    shoppingList.map((product) => {
      lastTotal += product.price;
      return lastTotal;
    });
  }