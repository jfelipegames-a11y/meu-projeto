import React from 'react';
import { Truck, MapPin, Clock, MessageCircle, RefreshCw, Shield } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';

const Shipping = () => {
  const handleWhatsAppContact = () => {
    const message = 'Olá! Gostaria de informações sobre entrega e suporte.';
    const whatsappNumber = '5511999999999';
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Entrega & Suporte</h1>
          <p className="text-xl text-gray-600">
            Informações sobre prazos, cobertura e políticas
          </p>
        </div>

        {/* Shipping Info */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8">Entrega</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-0 bg-gray-50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#6B7280] p-3 rounded-lg">
                    <Truck className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Prazo de Entrega</h3>
                    <p className="text-gray-600">
                      5 a 10 dias úteis após a confirmação do pagamento, dependendo da localidade.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gray-50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#6B7280] p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Cobertura</h3>
                    <p className="text-gray-600">
                      Realizamos entregas para todo o Brasil via Correios e transportadoras parceiras.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gray-50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#0066FF] p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Rastreamento</h3>
                    <p className="text-gray-600">
                      Você receberá o código de rastreamento via WhatsApp assim que o pedido for enviado.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gray-50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#0066FF] p-3 rounded-lg">
                    <MessageCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Atualizações</h3>
                    <p className="text-gray-600">
                      Mantemos você informado sobre cada etapa da entrega pelo WhatsApp.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Return Policy */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8">Trocas e Devoluções</h2>
          <Card className="border-0 bg-gray-50">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <RefreshCw className="h-6 w-6 text-[#0066FF] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Direito de Arrependimento</h3>
                    <p className="text-gray-600">
                      Você tem até 7 dias corridos após o recebimento para solicitar a devolução, 
                      conforme o Código de Defesa do Consumidor.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Shield className="h-6 w-6 text-[#0066FF] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Produto com Defeito</h3>
                    <p className="text-gray-600">
                      Se o produto apresentar defeito, entre em contato imediatamente. Faremos a 
                      troca sem custo adicional dentro do período de garantia.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MessageCircle className="h-6 w-6 text-[#0066FF] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Como Solicitar</h3>
                    <p className="text-gray-600 mb-4">
                      Entre em contato via WhatsApp informando o número do pedido e o motivo da 
                      troca ou devolução. Nossa equipe irá orientar sobre os próximos passos.
                    </p>
                    <Button 
                      onClick={handleWhatsAppContact}
                      className="bg-[#0066FF] hover:bg-[#0052CC] text-white transition-colors duration-300"
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Falar com Suporte
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Support */}
        <div className="bg-[#0B0B0B] text-white p-8 md:p-12 rounded-lg">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Atendimento via WhatsApp</h2>
            <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
              Nossa equipe está disponível para responder suas dúvidas sobre produtos, 
              pedidos e entregas. Atendemos de segunda a sexta, das 9h às 18h.
            </p>
            <Button 
              onClick={handleWhatsAppContact}
              size="lg"
              className="bg-[#0066FF] hover:bg-[#0052CC] text-white text-lg px-8 py-6 transition-colors duration-300"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Iniciar Conversa
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shipping;