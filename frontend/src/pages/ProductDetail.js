import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, ShoppingCart, MessageCircle, CheckCircle } from 'lucide-react';
import { products } from '../data/mock';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Card, CardContent } from '../components/ui/card';
import { useCart } from '../context/CartContext';
import { useToast } from '../hooks/use-toast';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const { addToCart } = useCart();
  const { toast } = useToast();
  const [selectedVariant, setSelectedVariant] = useState(
    product?.variants ? product.variants[0] : null
  );

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Produto não encontrado</h2>
          <Button asChild>
            <Link to="/produtos">Voltar para produtos</Link>
          </Button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, selectedVariant);
    toast({
      title: "Produto adicionado!",
      description: `${product.shortName} foi adicionado ao carrinho.`,
    });
  };

  const handleWhatsAppOrder = () => {
    const variantText = selectedVariant ? ` - Cor: ${selectedVariant.color}` : '';
    const message = `Olá! Gostaria de comprar:\n\n*${product.name}*${variantText}\nPreço: R$ ${product.price.toFixed(2)}`;
    const whatsappNumber = '5511999999999';
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <Button asChild variant="ghost" className="mb-6">
          <Link to="/produtos">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Voltar para produtos
          </Link>
        </Button>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="relative">
            <div className="aspect-square rounded-lg overflow-hidden bg-gray-50 sticky top-8">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.badge && (
                <Badge className="absolute top-4 left-4 bg-[#0066FF] hover:bg-[#0066FF] text-white border-0 text-base px-4 py-2">
                  {product.badge}
                </Badge>
              )}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.name}</h1>
            <p className="text-4xl font-bold mb-6">R$ {product.price.toFixed(2)}</p>
            
            <p className="text-lg text-gray-700 mb-8">{product.description}</p>

            {/* Color Variants */}
            {product.variants && (
              <div className="mb-8">
                <h3 className="font-semibold mb-3 text-lg">Escolha a cor:</h3>
                <div className="flex gap-3">
                  {product.variants.map((variant) => (
                    <button
                      key={variant.color}
                      onClick={() => setSelectedVariant(variant)}
                      className={`group relative flex flex-col items-center gap-2 transition-all duration-300 ${
                        selectedVariant?.color === variant.color ? 'scale-110' : ''
                      }`}
                    >
                      <div 
                        className={`w-12 h-12 rounded-full border-2 transition-all duration-300 ${
                          selectedVariant?.color === variant.color 
                            ? 'border-[#0066FF] ring-2 ring-[#0066FF] ring-offset-2' 
                            : 'border-gray-300 hover:border-gray-400'
                        }`}
                        style={{ 
                          backgroundColor: variant.colorCode,
                          boxShadow: variant.color === 'Branco' ? 'inset 0 0 0 1px rgba(0,0,0,0.1)' : 'none'
                        }}
                      />
                      <span className="text-sm font-medium">{variant.color}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                onClick={handleAddToCart}
                className="flex-1 bg-[#0B0B0B] hover:bg-[#2E2E2E] text-white py-6 text-lg transition-colors duration-300"
                disabled={!product.inStock}
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Adicionar ao Carrinho
              </Button>
              <Button 
                onClick={handleWhatsAppOrder}
                className="flex-1 bg-[#0066FF] hover:bg-[#0052CC] text-white py-6 text-lg transition-colors duration-300"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Comprar via WhatsApp
              </Button>
            </div>

            {/* Features */}
            <Card className="mb-8 border-0 bg-gray-50">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">Características:</h3>
                <ul className="space-y-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#0066FF] mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Specifications */}
            <Card className="border-0 bg-gray-50">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">Especificações Técnicas:</h3>
                <div className="space-y-3">
                  {product.specs.map((spec, index) => (
                    <div key={index} className="flex justify-between py-2 border-b border-gray-200 last:border-0">
                      <span className="text-gray-600">{spec.label}:</span>
                      <span className="font-medium text-right">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Warranty & Support */}
            <div className="mt-8 p-6 bg-[#0B0B0B] text-white rounded-lg">
              <h3 className="font-semibold text-lg mb-3">Garantia e Suporte</h3>
              <p className="mb-4">Todos os produtos CRZ possuem garantia contra defeitos de fabricação. Entre em contato via WhatsApp para trocas e devoluções.</p>
              <Button 
                onClick={handleWhatsAppOrder}
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#0B0B0B] transition-colors duration-300"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Falar com suporte
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;