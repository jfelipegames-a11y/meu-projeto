import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('crz-cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('crz-cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, variant = null) => {
    setCart(prevCart => {
      const existingItemIndex = prevCart.findIndex(
        item => item.id === product.id && 
        (variant ? item.variant?.color === variant.color : true)
      );

      if (existingItemIndex > -1) {
        const newCart = [...prevCart];
        newCart[existingItemIndex].quantity += 1;
        return newCart;
      }

      return [...prevCart, { ...product, variant, quantity: 1 }];
    });
  };

  const removeFromCart = (productId, variantColor = null) => {
    setCart(prevCart => 
      prevCart.filter(item => 
        !(item.id === productId && 
          (variantColor ? item.variant?.color === variantColor : true))
      )
    );
  };

  const updateQuantity = (productId, variantColor = null, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId, variantColor);
      return;
    }

    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId && 
        (variantColor ? item.variant?.color === variantColor : !item.variant)
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getCartCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  const sendToWhatsApp = () => {
    if (cart.length === 0) return;

    const message = cart.map(item => {
      const variantText = item.variant ? ` - Cor: ${item.variant.color}` : '';
      return `• ${item.name}${variantText}\nQuantidade: ${item.quantity}\nPreço: R$ ${(item.price * item.quantity).toFixed(2)}`;
    }).join('\n\n');

    const total = getCartTotal();
    const fullMessage = `*Pedido CRZ*\n\n${message}\n\n*Total: R$ ${total.toFixed(2)}*`;
    
    const whatsappNumber = '5541999257331'; // Replace with actual WhatsApp number
    const encodedMessage = encodeURIComponent(fullMessage);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getCartTotal,
      getCartCount,
      sendToWhatsApp
    }}>
      {children}
    </CartContext.Provider>
  );
};