import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-50">
        <nav className="container flex justify-between items-center relative" style={{ height: '100px' }}>
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src="/icon.png" alt="Carrefour Business Logo" style={{ height: '48px' }} />
            <span style={{ fontSize: '22px', fontWeight: '800', letterSpacing: '-0.5px', color: 'var(--color-text-dark)' }}>Carrefour Business</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="nav-link" style={{ fontWeight: 600 }}>Home</Link>
            <Link to="/#about" className="nav-link">About Us</Link>
            <Link to="/#services" className="nav-link">Our Services</Link>
            <Link to="/#solutions" className="nav-link">Solutions</Link>
            <Link to="/#tracking" className="nav-link">Tracking</Link>
            <Link to="/#blogs" className="nav-link">Blogs</Link>
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
          <div className={`md:hidden absolute top-[90px] left-4 right-4 bg-white rounded-2xl shadow-xl transition-all duration-300 overflow-hidden z-50 ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
            <div className="flex flex-col p-6 gap-6">
              <Link to="/" className="nav-link text-lg" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
              <Link to="/#about" className="nav-link text-lg" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
              <Link to="/#services" className="nav-link text-lg" onClick={() => setIsMobileMenuOpen(false)}>Our Services</Link>
              <Link to="/#blogs" className="nav-link text-lg" onClick={() => setIsMobileMenuOpen(false)}>Blogs</Link>
              <button className="btn btn-primary w-full mt-2" onClick={() => setIsMobileMenuOpen(false)}>
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
                Reliable global logistics solutions designed for speed, transparency, and peace of mind — from first mile to final delivery.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '20px' }}>Quick Links</h4>
              <Link to="/" className="footer-link">Home</Link>
              <Link to="/#about" className="footer-link">About Us</Link>
              <Link to="/#services" className="footer-link">Our Services</Link>
              <Link to="/#tracking" className="footer-link">Tracking</Link>
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
              <p className="footer-link">+1 (555) 123-4567</p>
              <p className="footer-link" style={{ marginTop: '16px', color: '#666' }}>
                123 Logistics Way,<br />Global City, GC 10001
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
  );
}
