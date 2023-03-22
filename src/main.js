import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';
import './style.css';

document.querySelector('.cep-button').addEventListener('click', searchCep);
//item 03---------------------------------------------------------
//coloca o retorno da função fetchProductsList em uma constante
const listaDeProdutos = await fetchProductsList('computador');
// usando a constante listaDeProdutos, aplica-se um map usará cada elemento da listaDeProdutos como parâmetro na função createProductElement que criará um novo elemento no html da página.
const listaDeProdutosFinal = listaDeProdutos.map((produto) =>
  createProductElement({
    id: produto.id,
    title: produto.title,
    thumbnail: produto.thumbnail,
    price: produto.price,
  });
);
//item 04 -----------------------------------------------
//faz o novo elemento "carregando..."
export const adicionaElementCarregando = () => {
  const carrinho = document.querySelector('.cart');
  const elementoLoading = document.createElement('p');
  elementoLoading.classList.add('loading')
  elementoLoading.innerHTML = 'carregando...'

  carrinho.appendChild(elementoLoading)

}

//remove o elemento "carregando..."
export const retiraElementoCarregando = () => {
  const elementoLoading = document.querySelector('.cart p');
  elementoLoading.remove();

}

//funções adicionadas no arquivo fetchFunctions.js, dentro da função retchProductsList

//item 5--------------------------------------------------
//faz o novo elemento "carregando..."
export const adicionaMensagemDeErro = () => {
  const carrinho = document.querySelector('.cart');
  const elementoLoading = document.createElement('p');
  elementoLoading.classList.add('erro')
  elementoLoading.innerHTML = 'Algum erro ocorreu, recarregue a página e tente novamente'

  carrinho.appendChild(elementoLoading)

}