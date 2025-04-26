export class Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: ProductCategory;
  pictureUrl: string;

  constructor(id: string, name: string, description: string, price: number, category: ProductCategory, pictureUrl: string) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.category = category;
    this.pictureUrl = pictureUrl;
  }

}
export enum ProductCategory {
  Moda,
  Eletronicos,
  Alimentos,
  Bebidas,
  CasaDecoracao,
  SaudeBeleza,
  EsporteLazer,
  Livros,
  Papelaria,
  Brinquedos,
  Jogos,
  Petshop,
  Automotivos
}