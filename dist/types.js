"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCategory = exports.Product = void 0;
class Product {
    constructor(id, name, description, price, category, pictureUrl) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.category = category;
        this.pictureUrl = pictureUrl;
    }
}
exports.Product = Product;
var ProductCategory;
(function (ProductCategory) {
    ProductCategory[ProductCategory["Moda"] = 0] = "Moda";
    ProductCategory[ProductCategory["Eletronicos"] = 1] = "Eletronicos";
    ProductCategory[ProductCategory["Alimentos"] = 2] = "Alimentos";
    ProductCategory[ProductCategory["Bebidas"] = 3] = "Bebidas";
    ProductCategory[ProductCategory["CasaDecoracao"] = 4] = "CasaDecoracao";
    ProductCategory[ProductCategory["SaudeBeleza"] = 5] = "SaudeBeleza";
    ProductCategory[ProductCategory["EsporteLazer"] = 6] = "EsporteLazer";
    ProductCategory[ProductCategory["Livros"] = 7] = "Livros";
    ProductCategory[ProductCategory["Papelaria"] = 8] = "Papelaria";
    ProductCategory[ProductCategory["Brinquedos"] = 9] = "Brinquedos";
    ProductCategory[ProductCategory["Jogos"] = 10] = "Jogos";
    ProductCategory[ProductCategory["Petshop"] = 11] = "Petshop";
    ProductCategory[ProductCategory["Automotivos"] = 12] = "Automotivos";
})(ProductCategory || (exports.ProductCategory = ProductCategory = {}));
