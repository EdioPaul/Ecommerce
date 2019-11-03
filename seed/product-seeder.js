var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopping', { useNewUrlParser: true });

var products = [
    new Product({
        imagePath: 'http://montarkitralifla.com.br/painel/imagens/foto11/14203.jpg',
        title: 'Brincos',
        description: 'Acessório Feminino',
        price: 10
    }),
    new Product({
        imagePath: 'http://montarkitralifla.com.br/painel/imagens/foto11/75279.jpg',
        title: 'Anel',
        description: 'Acessório Feminino',
        price: 20
    }),
    new Product({
        imagePath: 'http://montarkitralifla.com.br/painel/imagens/foto11/76172.jpg',
        title: 'Anel',
        description: 'Acessório Feminino',
        price: 30
    }),
    new Product({
        imagePath: 'http://montarkitralifla.com.br/painel/imagens/foto11/100001.jpg',
        title: 'Anel',
        description: 'Acessório Feminino',
        price: 40
    }),
    new Product({
        imagePath: 'http://montarkitralifla.com.br/painel/imagens/foto11/107751.jpg',
        title: 'Corrente',
        description: 'Acessório Feminino',
        price: 50
    }),
    new Product({
        imagePath: 'http://montarkitralifla.com.br/painel/imagens/foto11/100010.jpg',
        title: 'Par de Anel',
        description: 'Acessório Feminino',
        price: 60
    }),
    new Product({
        imagePath: 'http://montarkitralifla.com.br/painel/imagens/foto11/14203.jpg',
        title: 'Brincos',
        description: 'Acessório Feminino',
        price: 10
    }),
    new Product({
        imagePath: 'http://montarkitralifla.com.br/painel/imagens/foto11/75279.jpg',
        title: 'Anel',
        description: 'Acessório Feminino',
        price: 20
    }),
    new Product({
        imagePath: 'http://montarkitralifla.com.br/painel/imagens/foto11/76172.jpg',
        title: 'Anel',
        description: 'Acessório Feminino',
        price: 30
    }),
];

var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function (err, result) {
        done++;
        if (done === products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}