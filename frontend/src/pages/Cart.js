import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag, MessageCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getCartTotal, clearCart, sendToWhatsApp } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <ShoppingBag className="h-24 w-24 mx-auto mb-6 text-gray-300" />
          <h2 className="text-3xl font-bold mb-4">Seu carrinho está vazio</h2>
          <p className="text-gray-600 mb-8">Adicione produtos incríveis ao seu carrinho!</p>
          <Button asChild size="lg" className="bg-[#6B7280] hover:bg-[#4B5563] text-white">
            <Link to="/produtos">Ver Produtos</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Carrinho de Compras</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => {
              const itemKey = `${item.id}-${item.variant?.color || 'default'}`;
              return (
                <Card key={itemKey} className="border-0 bg-white shadow-md">
                  <CardContent className="p-4 md:p-6">
                    <div className="flex gap-4">
                      {/* Product Image */}
                      <Link to={`/produto/${item.id}`} className="flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-lg"
                        />
                      </Link>

                      {/* Product Info */}
                      <div className="flex-1 min-w-0">
                        <Link to={`/produto/${item.id}`}>
                          <h3 className="font-semibold text-lg mb-1 hover:text-[#0066FF] transition-colors line-clamp-2">
                            {item.name}
                          </h3>
                        </Link>
                        {item.variant && (
                          <p className="text-sm text-gray-600 mb-2">
                            Cor: {item.variant.color}
                          </p>
                        )}
                        <p className="text-xl font-bold mb-4">R$ {item.price.toFixed(2)}</p>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2 border border-gray-300 rounded-lg">
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => updateQuantity(item.id, item.variant?.color, item.quantity - 1)}
                              className="h-8 w-8"
                            >
                              <Minus className="h-4 w-4" />
                            </Button>
                            <span className="w-8 text-center font-medium">{item.quantity}</span>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => updateQuantity(item.id, item.variant?.color, item.quantity + 1)}
                              className="h-8 w-8"
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>

                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => removeFromCart(item.id, item.variant?.color)}
                            className="text-red-600 hover:text-red-700 hover:bg-red-50"
                          >
                            <Trash2 className="h-5 w-5" />
                          </Button>
                        </div>
                      </div>

                      {/* Subtotal (Desktop) */}
                      <div className="hidden md:block text-right">
                        <p className="text-sm text-gray-600 mb-1">Subtotal</p>
                        <p className="text-xl font-bold">
                          R$ {(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>

                    {/* Subtotal (Mobile) */}
                    <div className="md:hidden mt-4 pt-4 border-t border-gray-200 flex justify-between items-center">
                      <span className="text-gray-600">Subtotal:</span>
                      <span className="text-xl font-bold">
                        R$ {(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            {/* Clear Cart */}
            <Button
              variant="ghost"
              onClick={clearCart}
              className="text-red-600 hover:text-red-700 hover:bg-red-50"
            >
              <Trash2 className="mr-2 h-4 w-4" />
              Limpar Carrinho
            </Button>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="border-0 bg-gray-50 sticky top-24">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6">Resumo do Pedido</h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>R$ {getCartTotal().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Frete</span>
                    <span>A calcular</span>
                  </div>
                  <div className="border-t border-gray-300 pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold">Total</span>
                      <span className="text-2xl font-bold">R$ {getCartTotal().toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button
                    onClick={sendToWhatsApp}
                    className="w-full bg-[#6B7280] hover:bg-[#4B5563] text-white py-6 text-lg transition-colors duration-300"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Finalizar via WhatsApp
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-2 border-[#2E2E2E] hover:bg-[#2E2E2E] hover:text-white transition-colors duration-300"
                  >
                    <Link to="/produtos">Continuar Comprando</Link>
                  </Button>
                </div>

                <div className="mt-6 p-4 bg-white rounded-lg">
                  <p className="text-sm text-gray-600">
                    <strong>Nota:</strong> Ao clicar em "Finalizar via WhatsApp", você será redirecionado 
                    para conversar com nossa equipe para concluir o pedido.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;