import * as cartService from './services/cart.js';
import createItem  from "./services/item.js";

const myCart = [];
const myWishList  = [];

console.log("Welcome to the your Shopee Cart!");

// criando 2 itens no carrinho
const item1 = await createItem("hotwheels ferrari", 20.99, 1);
const item2 = await createItem("hotwheels lamborghini", 39.99, 3);

// adicionando dois itens ao carrinho
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

// atualizando a quantidade de item no carrinho
await cartService.updateItemQuantity(myCart, "hotwheels ferrari", 2);
await cartService.updateItemQuantity(myCart, "hotwheels lamborghini", 4);

// adicionando item à lista de desejos
await cartService.addItemToWishlist(myWishList, item2);
console.log("Conteúdo atual da lista de desejos:", myWishList);

// removendo item do carrinho
await cartService.removeItem(myCart, item1);
await cartService.removeItem(myCart, item2);

// exibindo os itens do carrinho
await cartService.displaycart(myCart);

// calculando o total do carrinho
await cartService.calculateTotal(myCart);

console.log("\nLista de Desejos:");
myWishList.forEach((item, index) => {
  console.log(`${index + 1}. ${item.name} - R$ ${item.price}`);
});