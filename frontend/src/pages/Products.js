import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { products, categories } from '../data/mock';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { useCart } from '../context/CartContext';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const { addToCart } = useCart();

  const filteredProducts = selectedCategory === 'todos' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Produtos CRZ</h1>
          <p className="text-xl text-gray-600">Acessórios de tecnologia premium para o seu dia a dia</p>
        </div>

        {/* Category Filter */}
        <div className="mb-8 flex flex-wrap gap-3">
          {categories.map(category => (
            <Button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              variant={selectedCategory === category.id ? 'default' : 'outline'}
              className={`transition-all duration-300 ${
                selectedCategory === category.id 
                  ? 'bg-[#0066FF] hover:bg-[#0052CC] text-white border-0' 
                  : 'border-2 border-[#2E2E2E] hover:bg-[#2E2E2E] hover:text-white'
              }`}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <Card 
              key={product.id} 
              className="group hover:shadow-xl transition-all duration-300 border-0 bg-white overflow-hidden"
            >
              <Link to={`/produto/${product.id}`}>
                <div className="relative overflow-hidden aspect-square bg-gray-50">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {product.badge && (
                    <Badge className="absolute top-3 left-3 bg-[#0066FF] hover:bg-[#0066FF] text-white border-0">
                      {product.badge}
                    </Badge>
                  )}
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
                      <Badge variant="secondary">Esgotado</Badge>
                    </div>
                  )}
                </div>
              </Link>
              <CardContent className="p-5">
                <Link to={`/produto/${product.id}`}>
                  <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-[#0066FF] transition-colors">
                    {product.name}
                  </h3>
                </Link>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                <p className="text-2xl font-bold mb-4">
                  R$ {product.price.toFixed(2)}
                </p>
                <Button 
                  onClick={() => addToCart(product)}
                  disabled={!product.inStock}
                  className="w-full bg-[#0B0B0B] hover:bg-[#2E2E2E] text-white transition-colors duration-300 disabled:bg-gray-300"
                >
                  {product.inStock ? 'Adicionar ao carrinho' : 'Indisponível'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-gray-600">Nenhum produto encontrado nesta categoria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;