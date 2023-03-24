import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';

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
