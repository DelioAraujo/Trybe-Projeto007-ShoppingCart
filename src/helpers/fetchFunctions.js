export const fetchProduct = () => {
  // seu código aqui
};

export const fetchProductsList = async (parametro) => {
  if (!parametro) {
    throw new Error('Termo de busca não informado');
  }
  const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${parametro}`);
  const data = await response.json();

  return data.results;
};
