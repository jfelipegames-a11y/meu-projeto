import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Zap, Shield, CheckCircle, Truck } from 'lucide-react';
import { products, benefits } from '../data/mock';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { useCart } from '../context/CartContext';

const iconMap = {
  Zap,
  Shield,
  CheckCircle,
  Truck
};

const Home = () => {
  const { addToCart } = useCart();
  const featuredProducts = products.filter(p => p.badge).slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative px-4 py-20 md:py-32">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Potência que conecta<br />seu dia.
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-gray-600 max-w-2xl mx-auto">
            Acessórios tech rápidos, seguros e testados.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg"
              className="bg-[#6B7280] hover:bg-[#4B5563] text-white text-lg px-8 py-6 transition-all duration-300"
            >
              <Link to="/produtos">
                Comprar agora
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="border-2 border-[#2E2E2E] text-[#0B0B0B] hover:bg-[#2E2E2E] hover:text-white text-lg px-8 py-6 transition-all duration-300"
            >
              <Link to="/sobre">Conheça a CRZ</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-[#FAFAFA]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => {
              const Icon = iconMap[benefit.icon];
              return (
                <div key={benefit.id} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-[#6B7280] rounded-lg">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Mais Vendidos</h2>
              <p className="text-gray-600">Os produtos preferidos dos nossos clientes</p>
            </div>
            <Button asChild variant="ghost" className="hidden md:flex">
              <Link to="/produtos">
                Ver todos
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
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
                      <Badge className="absolute top-3 left-3 bg-[#6B7280] hover:bg-[#6B7280] text-white border-0">
                        {product.badge}
                      </Badge>
                    )}
                  </div>
                </Link>
                <CardContent className="p-4">
                  <Link to={`/produto/${product.id}`}>
                    <h3 className="font-semibold mb-2 line-clamp-2 group-hover:text-[#6B7280] transition-colors">
                      {product.shortName}
                    </h3>
                  </Link>
                  <p className="text-2xl font-bold mb-4">
                    R$ {product.price.toFixed(2)}
                  </p>
                  <Button 
                    onClick={() => addToCart(product)}
                    className="w-full bg-[#0B0B0B] hover:bg-[#2E2E2E] text-white transition-colors duration-300"
                  >
                    Adicionar ao carrinho
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8 md:hidden">
            <Button asChild variant="outline" className="border-2 border-[#2E2E2E]">
              <Link to="/produtos">
                Ver todos os produtos
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 px-4 bg-[#0B0B0B] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Qualidade que você pode confiar
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Todos os nossos produtos passam por testes rigorosos de qualidade e vêm com garantia.
            Entregamos em todo o Brasil com rapidez e segurança.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-[#6B7280]" />
              <span>Garantia incluída</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-gray-600"></div>
            <div className="flex items-center gap-2">
              <Truck className="h-6 w-6 text-[#6B7280]" />
              <span>Entrega para todo Brasil</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-gray-600"></div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-6 w-6 text-[#6B7280]" />
              <span>Produtos testados</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;