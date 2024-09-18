import { products } from './products';
import { renderProducts } from './rendering';

const addProduct = (event) => {
  event.preventDefault();
  import('./product-management.js').then(mod => {
    mod.addProduct(event);
  })
}

const deleteProduct = (productId) => {
  import('./product-management.js').then(mod => {
    mod.deleteProduct(productId);
  })
}

function initProducts() {
  renderProducts(products, deleteProduct);
}

const addProductForm = document.getElementById('new-product');

initProducts();

addProductForm.addEventListener('submit', addProduct);
