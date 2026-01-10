import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { useCart } from '../context/CartContext';
import { Sheet, SheetContent, SheetTrigger } from '../components/ui/sheet';

const Header = () => {
  const { getCartCount } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const cartCount = getCartCount();

  const navLinks = [
    { to: '/', label: 'Início' },
    { to: '/produtos', label: 'Produtos' },
    { to: '/sobre', label: 'Sobre' },
    { to: '/entrega', label: 'Entrega & Suporte' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="https://customer-assets.emergentagent.com/job_connect-daily-4/artifacts/k9gsr979_LOGO%20PRETA%20-%20PNG.png" 
              alt="CRZ Logo" 
              className="h-8 md:h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-gray-700 hover:text-[#0066FF] font-medium transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Cart & Mobile Menu */}
          <div className="flex items-center gap-4">
            <Button asChild variant="ghost" className="relative">
              <Link to="/carrinho">
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-[#0066FF] hover:bg-[#0066FF] border-0 text-xs">
                    {cartCount}
                  </Badge>
                )}
              </Link>
            </Button>

            {/* Mobile Menu */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <nav className="flex flex-col space-y-6 mt-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-lg font-medium hover:text-[#0066FF] transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;