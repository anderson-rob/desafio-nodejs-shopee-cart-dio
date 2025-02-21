//quais ações meu carrinho pode fazer
//vamos colocar as assinaturas do método

//CASO DE USO
// ✅adicionar itemno carrinho
async function addItem(userCart, item) {
  userCart.push(item);
}

// calcular o total do carrinho
async function calculateTotal(userCart) {
  console.log("\nShopee Cart TOTAL IS:");

  const result = userCart.reduce((total, item)=> total + item.subtotal(), 0);
  console.log(`🎁Total:  ${result}`);
}

// deletar todos os item do carrinho
async function deleteItem(userCart, name) {
  const index = userCart.findIndex((item) => item.name === name);

  if(index !== -1){
    userCart.splice(index, 1);
  }
}
/*
// remover um item - diminuir um item
async function removeItem(userCart, index) {
  // transforma o indice visual do usuario, para o indice do backend
  const deleteIndex = index - 1; 

  // é maior que zero e se é menor do que o tamanho do carrinho
  if(index >= 0 && index < userCart.length){
    userCart.splice(deleteIndex, 1);
  }
}
*/

async function  removeItem(userCart, item) {

  // 1. encontrar o indice do item, 2 itens, posição 0 e 1
  const indexFound = userCart.findIndex((p) => p.name === item.name);  

  // 2. caso não encontre o item
  if (indexFound == -1) {
    console.log("item não encontrado");
    return;
  }

  // 3. item > 1 subtrai um item
  if (userCart[indexFound].quantity > 1){
    userCart[indexFound].quantity -= 1
    return;
  }

  // 4. caso item = 1 deletar i item
  if (userCart[indexFound].quantity == 1){
    userCart.splice(indexFound, 1);
    return;
  }
}

async function displaycart(userCart) {
  console.log("\nShopee cart list: ");
  userCart.forEach((item, index) => {
    console.log(
      `${index + 1}. ${item.name} - R$ ${item.price} | ${
        item.quantity
      }x | Subtotal = ${item.subtotal()}`);
  });
}

async function updateItemQuantity(userCart, name, quantity) {
  const indexFound = userCart.findIndex((item) => item.name === name);

  if (indexFound === -1) {
    console.log("Item não encontrado");
    return;
  }

  userCart[indexFound].quantity = quantity;
}

// adicionar item à lista de desejos
async function addItemToWishlist(wishlist, item) {
  wishlist.push(item);
}

export { addItem, calculateTotal, deleteItem, removeItem, displaycart, updateItemQuantity, addItemToWishlist };


