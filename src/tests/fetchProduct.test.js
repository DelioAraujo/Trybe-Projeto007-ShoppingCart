import './mocks/fetchSimulator';
import { fetchProduct } from '../helpers/fetchFunctions';
import product from './mocks/product';

// implemente seus testes aqui
describe('Teste a função fetchProduct', () => {
  it('Teste se fetchProduct é uma função', () => {
    expect(typeof fetchProduct).toBe('function')
  });

  it('Execute a função fetchProduct com o argumento do produto "MLB1405519561" e teste se fetch foi chamada;', async () => {
    await fetchProduct('MLB1405519561');

    expect(fetch).toHaveBeenCalled();
  });

  it('Teste se, ao chamar a função fetchProduct com o argumento do produto "MLB1405519561", a função fetch utiliza o endpoint "https://api.mercadolibre.com/items/MLB1405519561"', async () => {
    await fetchProduct('MLB1405519561');

    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1405519561');
  });

  it('o retorno da função fetchProductsList com o argumento "computador" é uma estrutura de dados igual ao objeto computadorSearch', async () => {
    const retorno = await fetchProduct ('MLB1405519561')

    expect(retorno).toEqual(product);
  });

  it('ao chamar a função fetchProductsList sem argumento, retorna um erro com a mensagem: Termo de busca não informado', async () => {
    const retorno = await fetchProduct ('');

    expect(retorno).rejects.toThrow(new Error ('ID não informado'));
  });
});
