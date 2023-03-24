export const fetchProduct = async (parametro2) => {
  if (!parametro2) {
    throw new Error('ID não informado');
  }
  const response = await fetch(`https://api.mercadolibre.com/items/${parametro2}`);
  const data = await response.json();
  return data;
};

export const fetchProductsList = async (parametro) => {
  if (!parametro) {
    throw new Error('Termo de busca não informado');
  }
  const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${parametro}`);
  const data = await response.json();

  return data.results;
};
