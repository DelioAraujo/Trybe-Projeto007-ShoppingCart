import {
  adicionaElementCarregando,
  adicionaMensagemDeErro,
  retiraElementoCarregando,
} from '../main';

export const fetchProduct = () => {
  // seu código aqui
};

export const fetchProductsList = (parametro) => {
  if (parametro === undefined) {
    throw new Error('Termo de busca não informado');
  } else {
    adicionaElementCarregando();
    return fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${parametro}`)
      .then((response) => response.json())
      .then((data) => {
        retiraElementoCarregando();
        return data.results;
      })
      .catch(() => {
        adicionaMensagemDeErro();
      });
  }
};
