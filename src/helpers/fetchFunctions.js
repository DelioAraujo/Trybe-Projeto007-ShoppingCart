import {
  adicionaElementCarregando,
  adicionaMensagemDeErro,
  retiraElementoCarregando,
} from '../main';

export const fetchProduct = async (id) => {
  if (id === undefined) {
    throw new Error('ID não informado');
  } else {
    const response = await fetch(`https://api.mercadolibre.com/items/${id}`);
    const data = await response.json();
    return data;
  }
};

export const fetchProductsList = async (parametro) => {
  if (parametro === undefined) {
    throw new Error('Termo de busca não informado');
  } else {
    adicionaElementCarregando();
    try {
      const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${parametro}`);
      const data = await response.json();
      retiraElementoCarregando();
      return data.results;
    } catch {
      adicionaMensagemDeErro();
    }
  }
};
