import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Menu, X, MessageCircle } from 'lucide-react';

export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen relative">
      <div style={{ overflowX: 'hidden', width: '100%', flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Header */}
        <header className="z-50 relative md:absolute top-0 left-0 right-0 header-bg" style={{ borderBottom: '1px solid var(--color-border)' }}>
          <nav className="container flex justify-between items-center relative" style={{ height: '80px' }}>
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img src="/icon.png" alt="Carrefour Business Logo" style={{ height: '48px' }} />
              <span style={{ fontSize: '22px', fontWeight: '800', letterSpacing: '-0.5px', color: 'var(--color-text-dark)' }}>Carrefour Business</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <Link to="/" className="nav-link" style={{ fontWeight: 600 }}>Home</Link>
              <Link to="/about" className="nav-link">About Us</Link>
              <Link to="/#services" className="nav-link">Our Services</Link>
              <Link to="/#solutions" className="nav-link">Solutions</Link>
              <Link to="/#tracking" className="nav-link">Tracking</Link>
              <Link to="/contact" className="nav-link">Contact Us</Link>
            </div>

            {/* Right Actions */}
            <div className="hidden md:flex items-center">
              <button className="btn btn-white btn-animated" style={{ boxShadow: '0 4px 14px rgba(0,0,0,0.05)', padding: '12px 28px' }}>
                Get A Quote
              </button>
            </div>

            {/* Mobile Menu Button (Hamburger) */}
            <button 
              className={`md:hidden hamburger-btn ${isMobileMenuOpen ? 'open' : ''}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={20} className="text-primary" /> : <Menu size={20} />}
            </button>

            {/* Mobile Dropdown */}
            <div 
              className="md:hidden"
              style={{
                position: 'absolute',
                top: 'calc(100% + 8px)',
                left: '16px',
                right: '16px',
                backgroundColor: 'white',
                borderRadius: '16px',
                boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                transition: 'all 0.3s ease',
                overflow: 'hidden',
                zIndex: 50,
                opacity: isMobileMenuOpen ? 1 : 0,
                transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(-16px)',
                pointerEvents: isMobileMenuOpen ? 'auto' : 'none'
              }}
            >
              <div className="flex flex-col gap-6" style={{ padding: '24px' }}>
                <Link to="/" className="nav-link" style={{ fontSize: '18px' }} onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
                <Link to="/about" className="nav-link" style={{ fontSize: '18px' }} onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
                <Link to="/#services" className="nav-link" style={{ fontSize: '18px' }} onClick={() => setIsMobileMenuOpen(false)}>Our Services</Link>
                <Link to="/#solutions" className="nav-link" style={{ fontSize: '18px' }} onClick={() => setIsMobileMenuOpen(false)}>Solutions</Link>
                <Link to="/#tracking" className="nav-link" style={{ fontSize: '18px' }} onClick={() => setIsMobileMenuOpen(false)}>Tracking</Link>
                <Link to="/contact" className="nav-link" style={{ fontSize: '18px' }} onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
                <button className="btn btn-primary w-full" style={{ marginTop: '8px' }} onClick={() => setIsMobileMenuOpen(false)}>
                  Get A Quote
                </button>
              </div>
            </div>
          </nav>
        </header>

        {/* Main Content */}
        <main className="flex-1">
          <Outlet />
        </main>

        {/* Footer */}
        <footer style={{ backgroundColor: 'var(--color-bg-dark)', color: 'white', paddingTop: '80px', paddingBottom: '30px' }}>
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
              
              {/* Branding Column */}
              <div className="md:col-span-1">
                <Link to="/" className="flex items-center gap-3 mb-4">
                  <img src="/icon.png" alt="Carrefour Business Logo" style={{ height: '56px' }} />
                  <span style={{ fontSize: '24px', fontWeight: '800', letterSpacing: '-0.5px', color: 'white' }}>Carrefour Business</span>
                </Link>
                <p style={{ color: '#999', fontSize: '14px', lineHeight: '1.6' }}>
                  Border declaration, clearing, and freight forwarding by land and sea designed for speed, transparency, and peace of mind.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '20px' }}>Quick Links</h4>
                <Link to="/" className="footer-link">Home</Link>
                <Link to="/about" className="footer-link">About Us</Link>
                <Link to="/#services" className="footer-link">Our Services</Link>
                <Link to="/contact" className="footer-link">Contact Us</Link>
              </div>

              {/* Resources */}
              <div>
                <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '20px' }}>Resources</h4>
                <Link to="/#blogs" className="footer-link">Blogs & News</Link>
                <Link to="/#solutions" className="footer-link">Industry Solutions</Link>
                <Link to="/contact" className="footer-link">Help Center</Link>
              </div>

              {/* Contact */}
              <div>
                <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '20px' }}>Contact Us</h4>
                <p className="footer-link">info@crfbc.com</p>
                <a href="https://wa.me/256782207113" target="_blank" rel="noopener noreferrer" className="footer-link" style={{ display: 'inline-block' }}>+256 782207113 (WhatsApp)</a><br/>
                <a href="https://wa.me/243995663282" target="_blank" rel="noopener noreferrer" className="footer-link" style={{ display: 'inline-block' }}>+243 995663282 (WhatsApp)</a>
                <p className="footer-link" style={{ marginTop: '16px', color: '#666' }}>
                  CRFBC Headquarters<br />Border Customs Zone
                </p>
              </div>
              
            </div>

            {/* Bottom Bar (Policies) */}
            <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t" style={{ borderColor: '#333' }}>
              <p style={{ color: '#666', fontSize: '14px', marginBottom: '16px' }}>
                &copy; {new Date().getFullYear()} CRFBC. All rights reserved.
              </p>
              <div className="flex gap-6">
                <Link to="/privacy-policy" className="footer-link" style={{ marginBottom: 0 }}>Privacy Policy</Link>
                <Link to="/terms" className="footer-link" style={{ marginBottom: 0 }}>Terms of Service</Link>
              </div>
            </div>
          </div>
        </footer>
      </div>

      {/* Floating Chat Button (Mobile) */}
      <div className="md:hidden" style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 99999 }}>
        {isChatOpen && (
          <div style={{
            position: 'absolute',
            bottom: '70px',
            right: '0',
            minWidth: '220px',
            display: 'flex',
            flexDirection: 'column',
            gap: '6px'
          }}>
            <a 
              href="https://wa.me/256782207113" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                padding: '12px 16px',
                fontWeight: '500',
                color: '#25D366',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                fontSize: '14px',
                lineHeight: '1.3',
                backgroundColor: 'white',
                borderRadius: '8px',
                boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp (+256)
            </a>
            <a 
              href="https://wa.me/243995663282" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                padding: '12px 16px',
                fontWeight: '500',
                color: '#25D366',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                fontSize: '14px',
                lineHeight: '1.3',
                backgroundColor: 'white',
                borderRadius: '8px',
                boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp (+243)
            </a>
            <button 
              style={{
                padding: '12px 16px',
                fontWeight: '500',
                color: 'var(--color-primary)',
                textAlign: 'left',
                border: 'none',
                background: 'white',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                fontSize: '14px',
                lineHeight: '1.3',
                borderRadius: '8px',
                boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12z"/></svg>
              CRFBC Chatbot
            </button>
          </div>
        )}
        <button 
          onClick={() => setIsChatOpen(!isChatOpen)}
          style={{
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            backgroundColor: 'var(--color-primary)',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 14px rgba(223, 58, 53, 0.4)',
            border: 'none',
            cursor: 'pointer',
            transition: 'transform 0.2s'
          }}
        >
          {isChatOpen ? <X size={24} /> : <MessageCircle size={24} />}
        </button>
      </div>
    </div>
  );
}
