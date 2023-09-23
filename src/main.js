// import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { fetchProduct, fetchProductsList } from './helpers/fetchFunctions';
import { createCartProductElement, createProductElement } from './helpers/shopFunctions';
import { getSavedCartIDs } from './helpers/cartFunctions';

try {
  // definine a constante carrinho como sendo o elemento com classe ".products"
  const carrinho = document.querySelector('.products');

  // cria o elemento p, com classe .loading e innerhtml carregando
  const carregando = document.createElement('p');
  carregando.classList.add('loading');
  carregando.innerHTML = '...carregando';
  carrinho.appendChild(carregando);

  // coloca em uma constante a lista feita na função fetchProductlist
  const resultadoPesquisa = await fetchProductsList('computador');
  // para cada computador da lista, é aplicada a função createCartProductElement que vai criar o elemento/section
  resultadoPesquisa.forEach((computador) => {
    const elemento = createProductElement(computador);
    // depois o elemento/section é adicionado ao carrinho (elemento com classe .produts)
    carrinho.appendChild(elemento);
  });

  // remove o aviso de carregando
  carregando.remove();
} catch (erro) {
  // remove o aviso de carregandon
  const msgDeLoading = document.querySelector('.loading');
  msgDeLoading.remove();
  // cria um melemento p com a mensagem de erro que vier do fetch vindo da função fetchproductlist
  const mensagemDeErro = document.createElement('p');
  mensagemDeErro.classList.add('error');
  mensagemDeErro.innerHTML = 'Algum erro ocorreu, recarregue a página e tente novamente';
  // adiciona o elemento ao elemento com classe products
  const carrinho = document.querySelector('.products');
  carrinho.appendChild(mensagemDeErro);
}

const recuperaCarrinho = async () => {
  // recupera a lista do localStorage
  const carrRecuperado = getSavedCartIDs();
  // faz um map e cria um novo array de produtos usando a função fetchProduct e os ids recuperados
  const idsList = await Promise.all(carrRecuperado.map((item) => fetchProduct(item)));
  // recupera o elemento do carrinho
  const carrinhoRecuperado = document.querySelector('.cart__products');
  // para cada id recuperado é aplicada a função que cria um novo elemento pro carrinho e é feito um appendchild para adicionar o elemento efetivamente
  idsList.forEach((produto) => {
    carrinhoRecuperado.appendChild(createCartProductElement(produto));
  });
};
// executa a função
recuperaCarrinho();
