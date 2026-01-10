import React from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from '../components/ui/button';

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const message = 'Olá! Gostaria de mais informações sobre os produtos CRZ.';
    const whatsappNumber = '5511999999999'; // Replace with actual WhatsApp number
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#20BA5A] shadow-lg transition-all duration-300 hover:scale-110 z-50 p-0"
      size="icon"
    >
      <MessageCircle className="h-7 w-7 text-white" />
    </Button>
  );
};

export default WhatsAppButton;