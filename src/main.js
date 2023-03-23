import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createCartProductElement } from './helpers/shopFunctions';

const resultadoPesquisa = await fetchProductsList('computador');
const carrinho = document.querySelector('.products');

resultadoPesquisa.forEach(({ id, title, thumbnail, price }) => {
  const elemento = createCartProductElement(id, title, thumbnail, price);
  carrinho.appendChild(elemento);
});
