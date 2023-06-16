var totalAmount = document.querySelectorAll(".totalAmount");
var amuontByItem = document.querySelectorAll("input[name=totaltxtPrice]");
var totalItem = document.querySelector(".totalQuantity");
var itemCountByEahProd = document.querySelectorAll("input[name=item]");

document.querySelectorAll(".bi-cart-plus-fill").forEach(item => {
  item.addEventListener("click",function(){
    addItemToCart(item);
  })
})

document.querySelectorAll(".bi-cart-dash").forEach(item => {
  item.addEventListener("click",function(){
    removeItemFromCart(item);
  })
})

function addItemToCart(item){
  var closetTr = item.closest("td").parentNode;
  var closestPrice = closetTr.cells[2].querySelector("input[name=txtPrice]").value;
  var closestTotalPrice = closetTr.cells[2].querySelector("input[name=totaltxtPrice]");
  var itemCount = item.closest("td").querySelector("input[name=item]");

  itemCount.value = parseFloat(itemCount.value) + 1;
  closestTotalPrice.value = parseFloat(closestPrice) * parseFloat(itemCount.value)

  var tempTotalAmount = 0;
  amuontByItem.forEach(item =>{
    tempTotalAmount = tempTotalAmount + parseFloat(item.value)
  })
  totalAmount.forEach(item => {
    item.innerHTML = tempTotalAmount;

  })

  var tempItemCount = 0;
  itemCountByEahProd.forEach(item =>{
    tempItemCount = tempItemCount + parseFloat(item.value);
  })
  
  totalItem.innerHTML = tempItemCount;
}



function removeItemFromCart(item){
  var closetTr = item.closest("td").parentNode;
  var closestPrice = closetTr.cells[2].querySelector("input[name=txtPrice]").value;
  var closestTotalPrice = closetTr.cells[2].querySelector("input[name=totaltxtPrice]");
  var itemCount = item.closest("td").querySelector("input[name=item]");

  itemCount.value = parseFloat(itemCount.value)-1;
  closestTotalPrice.value = parseFloat(closestPrice) * parseFloat(itemCount.value)

  var tempTotalAmount = 0;
  amuontByItem.forEach(item =>{
    tempTotalAmount = tempTotalAmount + parseFloat(item.value)
  })
  totalAmount.forEach(item => {
    item.innerHTML = tempTotalAmount;

  })

  var tempItemCount = 0;
  itemCountByEahProd.forEach(item =>{
    tempItemCount = tempItemCount + parseFloat(item.value);
  })
  
  totalItem.innerHTML = tempItemCount;
}
