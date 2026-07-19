import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'fr' : 'en');
  };

  return (
    <div className="flex flex-col min-h-screen relative">
      <div style={{ overflowX: 'hidden', width: '100%', flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Header - Hidden on Home Page */}
        {location.pathname !== '/' && (
          <header className="header-bg relative md:absolute" style={{ borderBottom: '1px solid var(--color-border)', width: '100%', top: 0, left: 0, zIndex: 50 }}>
            <nav className="container flex justify-between items-center relative" style={{ height: '80px' }}>
              {/* Logo */}
              <Link to="/" className="flex items-center gap-3">
                <img src="/icon.png" alt="Carefour Business Logo" style={{ height: '48px' }} />
                <span style={{ fontSize: '22px', fontWeight: '800', letterSpacing: '-0.5px', color: 'var(--color-text-dark)' }}>Carefour Business</span>
              </Link>
  
              {/* Desktop Menu */}
              <div className="hidden md:flex items-center gap-8">
                <Link to="/" className="nav-link" style={{ fontWeight: location.pathname === '/' ? 700 : 500 }}>{t('Home')}</Link>
                <Link to="/about" className="nav-link" style={{ fontWeight: location.pathname === '/about' ? 700 : 500 }}>{t('About Us')}</Link>
                <Link to="/services" className="nav-link" style={{ fontWeight: location.pathname === '/services' ? 700 : 500 }}>{t('Our Services')}</Link>
                <Link to="/solutions" className="nav-link" style={{ fontWeight: location.pathname === '/solutions' ? 700 : 500 }}>{t('Solutions')}</Link>
                <Link to="/blog" className="nav-link" style={{ fontWeight: location.pathname === '/blog' ? 700 : 500 }}>{t('Blog')}</Link>
                <Link to="/tracking" className="nav-link" style={{ fontWeight: location.pathname === '/tracking' ? 700 : 500 }}>{t('Tracking')}</Link>
                <Link to="/contact" className="nav-link" style={{ fontWeight: location.pathname === '/contact' ? 700 : 500 }}>{t('Contact Us')}</Link>
              </div>
  
              {/* Right Actions */}
              <div className="hidden md:flex items-center gap-4">
                <button onClick={toggleLanguage} className="flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-primary transition-colors">
                  <img src={i18n.language === 'en' ? '/fr-flag.png' : '/en-flag.png'} alt="Language Flag" style={{ width: '22px', height: '16px', objectFit: 'cover', borderRadius: '2px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }} />
                  {i18n.language === 'en' ? 'FR' : 'EN'}
                </button>
                <Link to="/quotes" className="btn btn-white btn-animated" style={{ boxShadow: '0 4px 14px rgba(0,0,0,0.05)', padding: '12px 28px' }}>
                  {t('Get A Quote')}
                </Link>
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
                  <Link to="/" className="nav-link" style={{ fontSize: '18px' }} onClick={() => setIsMobileMenuOpen(false)}>{t('Home')}</Link>
                  <Link to="/about" className="nav-link" style={{ fontSize: '18px' }} onClick={() => setIsMobileMenuOpen(false)}>{t('About Us')}</Link>
                  <Link to="/services" className="nav-link" style={{ fontSize: '18px' }} onClick={() => setIsMobileMenuOpen(false)}>{t('Our Services')}</Link>
                  <Link to="/solutions" className="nav-link" style={{ fontSize: '18px' }} onClick={() => setIsMobileMenuOpen(false)}>{t('Solutions')}</Link>
                  <Link to="/blog" className="nav-link" style={{ fontSize: '18px' }} onClick={() => setIsMobileMenuOpen(false)}>{t('Blog')}</Link>
                  <Link to="/tracking" className="nav-link" style={{ fontSize: '18px' }} onClick={() => setIsMobileMenuOpen(false)}>{t('Tracking')}</Link>
                  <Link to="/contact" className="nav-link" style={{ fontSize: '18px' }} onClick={() => setIsMobileMenuOpen(false)}>{t('Contact Us')}</Link>
                  
                  <button onClick={() => { toggleLanguage(); setIsMobileMenuOpen(false); }} className="flex items-center gap-2 text-lg font-semibold text-gray-700 hover:text-primary transition-colors mt-2">
                    <img src={i18n.language === 'en' ? '/fr-flag.png' : '/en-flag.png'} alt="Language Flag" style={{ width: '26px', height: '20px', objectFit: 'cover', borderRadius: '2px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }} />
                    {i18n.language === 'en' ? 'Switch to French (FR)' : 'Switch to English (EN)'}
                  </button>

                  <Link to="/quotes" className="btn btn-primary" style={{ marginTop: '8px', width: '100%', textAlign: 'center', display: 'block' }} onClick={() => setIsMobileMenuOpen(false)}>
                    {t('Get A Quote')}
                  </Link>
                </div>
              </div>
            </nav>
          </header>
        )}

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
                  <img src="/icon.png" alt="Carefour Business Logo" style={{ height: '56px' }} />
                  <span style={{ fontSize: '24px', fontWeight: '800', letterSpacing: '-0.5px', color: 'white' }}>Carefour Business</span>
                </Link>
                <p style={{ color: '#999', fontSize: '14px', lineHeight: '1.6' }}>
                  {t('footer_desc')}
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '20px' }}>{t('Quick Links')}</h4>
                <Link to="/" className="footer-link">{t('Home')}</Link>
                <Link to="/about" className="footer-link">{t('About Us')}</Link>
                <Link to="/services" className="footer-link">{t('Our Services')}</Link>
                <Link to="/contact" className="footer-link">{t('Contact Us')}</Link>
                <Link to="/admin" className="footer-link">{t('Client Portal')}</Link>
              </div>

              {/* Resources */}
              <div>
                <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '20px' }}>{t('Resources')}</h4>
                <Link to="/blog" className="footer-link">{t('Blogs & News')}</Link>
                <Link to="/solutions" className="footer-link">{t('Industry Solutions')}</Link>
                <Link to="/contact" className="footer-link">{t('Help Center')}</Link>
              </div>

              {/* Contact */}
              <div>
                <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '20px' }}>{t('Contact Us')}</h4>
                <p className="footer-link">info@carefourbusiness.com</p>
                <a href="https://wa.me/256782207113" target="_blank" rel="noopener noreferrer" className="footer-link" style={{ display: 'inline-block' }}>+256 782 207 113 (WhatsApp)</a><br/>
                <a href="https://wa.me/243995663282" target="_blank" rel="noopener noreferrer" className="footer-link" style={{ display: 'inline-block' }}>+243 995 663 282 (WhatsApp)</a>
                <p className="footer-link" style={{ marginTop: '16px', color: '#666' }}>
                  {t('Carefour Business Headquarters')}<br />{t('Border Customs Zone')}
                </p>
              </div>
              
            </div>

            {/* Bottom Bar (Policies) */}
            <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t" style={{ borderColor: '#333' }}>
              <p style={{ color: '#666', fontSize: '14px', marginBottom: '16px' }}>
                &copy; {new Date().getFullYear()} Carefour Business. {t('All rights reserved.')}
              </p>
              <div className="flex gap-6">
                <Link to="/privacy-policy" className="footer-link" style={{ marginBottom: 0 }}>{t('Privacy Policy')}</Link>
                <Link to="/terms" className="footer-link" style={{ marginBottom: 0 }}>{t('Terms of Service')}</Link>
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
              Carefour Business Chatbot
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
