//products <=> remotes: {(this equivalent)products: 'products@http://localhost:8081/remoteEntry.js'}
import {mount as mountProduct} from 'products/ProductsIndex';
import {mount as mountCart} from  'cart/CartShow';

console.log('Containerss!');

mountProduct(document.querySelector("#my-products"))
mountCart(document.querySelector('#my-cart'))