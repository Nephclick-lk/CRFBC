import React from 'react';
import { useTranslation } from 'react-i18next';
import dgiLogo from '../assets/dgi.jpg';
import kraLogo from '../assets/kra.jpg';
import traLogo from '../assets/tra.jpg';
import uraLogo from '../assets/ura.jpg';
import zraLogo from '../assets/zra.jpg';

export default function PartnersSlider() {
  const { t } = useTranslation();
  // We duplicate the logos array once so the marquee animation is seamless
  const logos = [dgiLogo, kraLogo, traLogo, uraLogo, zraLogo, '/new-partner.jpg'];
  
  return (
    <section style={{ padding: '60px 0', backgroundColor: '#ffffff', overflow: 'hidden', borderTop: '1px solid var(--color-border)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: '700', color: 'var(--color-text-dark)' }}>{t('Our Trusted Partners')}</h2>
          <p style={{ color: 'var(--color-text-muted)' }}>{t('Working together with leading authorities across the region.')}</p>
        </div>
      </div>
      
      <div className="marquee-wrapper">
        <div className="marquee">
          {logos.concat(logos).map((logo, index) => (
            <img 
              key={index} 
              src={logo} 
              alt={`Partner ${index}`} 
              style={{ 
                height: '160px', 
                width: 'auto',
                objectFit: 'contain', 
                margin: '0 80px', 
                filter: 'grayscale(100%)', 
                opacity: 0.7, 
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }} 
              onMouseEnter={(e) => { 
                e.currentTarget.style.filter = 'grayscale(0%)'; 
                e.currentTarget.style.opacity = 1; 
              }}
              onMouseLeave={(e) => { 
                e.currentTarget.style.filter = 'grayscale(100%)'; 
                e.currentTarget.style.opacity = 0.7; 
              }}
              onClick={() => {
                if (logo === dgiLogo) {
                  window.open('https://douane.gouv.cd/', '_blank');
                }
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
