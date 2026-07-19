import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Ship, Warehouse, Truck, ClipboardList, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import aboutImg from '../assets/aboutjpg.jpg';
import PartnersSlider from '../components/PartnersSlider';

export default function Home() {
  const [activeTab, setActiveTab] = useState('Tracking');
  const [trackingType, setTrackingType] = useState('Booking Number');
  const [openFaq, setOpenFaq] = useState(null);
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'fr' : 'en');
  };

  return (
    <div style={{ backgroundColor: '#ffffff' }}>
      {/* Hero Section */}
      <section className="hero-section" style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
          zIndex: 0, pointerEvents: 'none', overflow: 'hidden'
        }}>
          <iframe 
            src="https://player.vimeo.com/video/1206391296?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1" 
            style={{
              position: 'absolute', top: '50%', left: '50%', width: '100vw', height: '56.25vw',
              minHeight: '100%', minWidth: '177.77vh', transform: 'translate(-50%, -50%)', border: 'none'
            }}
            allow="autoplay; fullscreen" title="Hero Background Video"
          ></iframe>
        </div>
        
        <div style={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
          backgroundColor: 'rgba(255, 255, 255, 0.7)', zIndex: 1
        }}></div>

        {/* Minimal Header for Home Page */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', zIndex: 10, padding: '24px 0' }}>
          <div className="container flex justify-between items-center">
            <Link to="/" className="flex items-center gap-3">
              <img src="/icon.png" alt="Carefour Business Logo" style={{ height: '48px' }} />
              <span style={{ fontSize: '22px', fontWeight: '800', letterSpacing: '-0.5px', color: 'var(--color-text-dark)' }}>Carefour Business</span>
            </Link>
            <div className="flex items-center gap-4">
              <button onClick={toggleLanguage} className="flex items-center gap-2 text-sm font-semibold text-gray-800 hover:text-primary transition-colors bg-white px-3 py-2 rounded-lg" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <img src={i18n.language === 'en' ? '/fr-flag.png' : '/en-flag.png'} alt="Language Flag" style={{ width: '22px', height: '16px', objectFit: 'cover', borderRadius: '2px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }} />
                {i18n.language === 'en' ? 'FR' : 'EN'}
              </button>
              <Link to="/quotes" className="btn btn-primary btn-animated" style={{ padding: '12px 28px' }}>
                {t('Get A Quote')}
              </Link>
            </div>
          </div>
        </div>

        <div className="container flex flex-col md:flex-row gap-8 relative" style={{ height: '100%', zIndex: 2, paddingTop: '120px' }}>
          
          <div className="md:w-1/2 flex flex-col justify-center">
            <h1 className="hero-title">
              {t('Border Declaration & Clearing for Trucks & Ships').split('&').map((text, i, arr) => (
                <React.Fragment key={i}>
                  {text}{i === 0 && <>&amp;<br className="md:hidden" /></>}
                  {i === 1 && arr.length > 2 && '&'}
                </React.Fragment>
              ))}
            </h1>
            <p style={{ fontSize: '18px', color: 'var(--color-text-dark)', maxWidth: '480px', marginBottom: '40px', lineHeight: '1.6', opacity: 0.85, fontWeight: '500' }}>
              {t('Helping companies...')}
            </p>

            <div className="tracking-widget">
              <div className="flex gap-6 mb-4" style={{ borderBottom: '1px solid var(--color-border)' }}>
                {['Tracking', 'Schedules', 'Offices'].map(tab => (
                  <button 
                    key={tab}
                    className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {t(tab)}
                  </button>
                ))}
              </div>

              {activeTab === 'Tracking' && (
                <>
                  <div className="radio-group">
                    <label className="radio-label">
                      <input 
                        type="radio" name="trackingType"
                        checked={trackingType === 'Container'}
                        onChange={() => setTrackingType('Container')}
                      />
                      {t('Container / Bill of Lading Number')}
                    </label>
                    <label className="radio-label">
                      <input 
                        type="radio" name="trackingType"
                        checked={trackingType === 'Booking Number'}
                        onChange={() => setTrackingType('Booking Number')}
                      />
                      {t('Booking Number')}
                    </label>
                  </div>
                  <div className="search-input-wrapper">
                    <Search size={18} />
                    <input type="text" placeholder={t('Enter Tracking Number')} />
                  </div>
                  <button className="btn btn-primary btn-animated" style={{ width: '100%', padding: '16px', fontSize: '16px' }}>
                    {t('Search')}
                  </button>
                </>
              )}

              {activeTab === 'Schedules' && (
                <div style={{ padding: '20px 0' }}>
                  <p style={{ color: 'var(--color-text-muted)', marginBottom: '16px', fontSize: '15px' }}>{t('Select a date...')}</p>
                  <div className="search-input-wrapper">
                    <input type="date" defaultValue={new Date().toISOString().split('T')[0]} style={{ paddingLeft: '16px' }} />
                  </div>
                  <button className="btn btn-primary btn-animated" style={{ width: '100%', padding: '16px', fontSize: '16px' }}>
                    {t('Check Availability')}
                  </button>
                </div>
              )}

              {activeTab === 'Offices' && (
                <div style={{ padding: '20px 0' }}>
                  <p style={{ color: 'var(--color-text-muted)', marginBottom: '16px', fontSize: '15px' }}>{t('Contact our regional offices...')}</p>
                  <a href="https://wa.me/256782207113" target="_blank" rel="noopener noreferrer" className="btn btn-white" style={{ width: '100%', padding: '16px', fontSize: '16px', border: '1px solid var(--color-border)', marginBottom: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="#25D366" style={{ marginRight: '8px' }}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    {t('WhatsApp')} <img src="/uganda-flag.png" alt="Uganda Flag" style={{ width: '24px', height: '16px', marginLeft: '8px', objectFit: 'cover', borderRadius: '2px', border: '1px solid #ddd' }} />
                  </a>
                  <a href="https://wa.me/243995663282" target="_blank" rel="noopener noreferrer" className="btn btn-white" style={{ width: '100%', padding: '16px', fontSize: '16px', border: '1px solid var(--color-border)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="#25D366" style={{ marginRight: '8px' }}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    {t('WhatsApp')} <img src="/congo-flag.png" alt="DR Congo Flag" style={{ width: '24px', height: '16px', marginLeft: '8px', objectFit: 'cover', borderRadius: '2px', border: '1px solid #ddd' }} />
                  </a>
                </div>
              )}
            </div>
          </div>

          <div className="md:w-1/2 relative flex flex-col justify-between" style={{ paddingBottom: '40px' }}>
            <div style={{ alignSelf: 'flex-end', textAlign: 'right', marginTop: '20px' }}>
              <div className="avatar-group mb-2">
                <img src="https://i.pravatar.cc/100?img=11" className="avatar" alt="User 1" />
                <img src="https://i.pravatar.cc/100?img=12" className="avatar" alt="User 2" />
                <img src="https://i.pravatar.cc/100?img=13" className="avatar" alt="User 3" />
              </div>
              <p style={{ fontSize: '14px', fontWeight: '600', textDecoration: 'underline' }}>
                {t('143.4k+ Clearances Handled')}
              </p>
            </div>
            
            <div className="flex flex-wrap gap-8 mt-auto ml-auto" style={{ backgroundColor: 'rgba(0,0,0,0.15)', padding: '24px 32px', borderRadius: '16px', backdropFilter: 'blur(8px)' }}>
                <div className="stats-card">
                  <div className="stats-number">5+</div>
                  <div className="stats-label">{t('Years in Border Clearance')}</div>
                </div>
                <div className="stats-card">
                  <div className="stats-number">20+</div>
                  <div className="stats-label">{t('Border Posts Cleared')}</div>
                </div>
                <div className="stats-card">
                  <div className="stats-number">2K+</div>
                  <div className="stats-label">{t('Trucks & Ships Declared')}</div>
                </div>
            </div>
          </div>

        </div>
      </section>

      {/* About Section */}
      <section id="about" style={{ padding: '120px 0', backgroundColor: '#f9f9f9' }}>
        <div className="container flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2 w-full">
            <div className="about-image-wrapper">
              <img src={aboutImg} alt="About Carefour Business" />
              <div style={{ position: 'absolute', bottom: '24px', left: '24px', backgroundColor: 'white', padding: '16px 24px', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                <p style={{ fontSize: '24px', fontWeight: '700', color: 'var(--color-primary)' }}>10M+</p>
                <p style={{ fontSize: '14px', fontWeight: '600', color: 'var(--color-text-dark)' }}>{t('Shipments Declared')}</p>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 w-full">
            <div style={{ color: 'var(--color-primary)', fontWeight: '600', fontSize: '14px', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '16px' }}>{t('Who We Are')}</div>
            <h2 className="section-title">
              {t('Border clearance experts...')}
            </h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '16px', lineHeight: '1.7', marginBottom: '24px' }}>
              {t('Carefour Business is a border...')}
            </p>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
              {[t('Truck & Container Customs Clearing'), t('Land Border Declaration & Compliance'), t('Sea Freight Forwarding & Clearance')].map((item, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: '500' }}>
                  <CheckCircle2 className="text-primary" size={20} />
                  {item}
                </li>
              ))}
            </ul>
            <a href="/about" className="btn btn-primary btn-animated">
              {t('Read Our Story')} <ArrowRight size={18} style={{ marginLeft: '8px' }} />
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" style={{ padding: '120px 0', backgroundColor: '#ffffff' }}>
        <div className="container flex flex-col md:flex-row gap-8">
          
          <div className="md:w-1/3">
            <h2 className="section-title">
              {t('Clearance & Logistics Services').split('&').map((text, i) => (
                <React.Fragment key={i}>
                  {text}{i === 0 && <>&amp;<br /></>}
                </React.Fragment>
              ))}
            </h2>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6', maxWidth: '300px', fontSize: '15px' }}>
              {t('End-to-end border declaration...')}
            </p>
          </div>

          <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="service-card">
              <div style={{ marginBottom: '24px', color: 'var(--color-primary)' }}><Truck size={40} strokeWidth={1.5} /></div>
              <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '12px' }}>{t('Truck Border Clearance')}</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '15px', lineHeight: '1.6' }}>{t('Full declaration and clearing...')}</p>
            </div>
            <div className="service-card">
              <div style={{ marginBottom: '24px', color: 'var(--color-primary)' }}><Ship size={40} strokeWidth={1.5} /></div>
              <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '12px' }}>{t('Sea Freight & Container Clearance')}</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '15px', lineHeight: '1.6' }}>{t('End-to-end customs clearance...')}</p>
            </div>
            <div className="service-card">
              <div style={{ marginBottom: '24px', color: 'var(--color-primary)' }}><ClipboardList size={40} strokeWidth={1.5} /></div>
              <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '12px' }}>{t('Border Declaration Filing')}</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '15px', lineHeight: '1.6' }}>{t('Accurate and fast border...')}</p>
            </div>
            <div className="service-card">
              <div style={{ marginBottom: '24px', color: 'var(--color-primary)' }}><Warehouse size={40} strokeWidth={1.5} /></div>
              <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '12px' }}>{t('Cargo & Logistics Management')}</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '15px', lineHeight: '1.6' }}>{t('Coordination from loading...')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Blogs Section */}
      <section id="blogs" style={{ padding: '120px 0', backgroundColor: '#f9f9f9' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <div style={{ color: 'var(--color-primary)', fontWeight: '600', fontSize: '14px', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '12px' }}>{t('Insights & News')}</div>
            <h2 className="section-title" style={{ marginBottom: 0 }}>{t('Latest from our Blog')}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="blog-card">
              <div className="relative overflow-hidden"><img src="https://picsum.photos/id/1050/600/400" alt="Blog 1" /></div>
              <div className="blog-content">
                <div className="blog-date">{t('blog1_date')}</div>
                <h3 className="blog-title">{t('blog1_title')}</h3>
                <p className="blog-desc">{t('blog1_desc')}</p>
                <button className="btn btn-ghost" style={{ padding: '12px 0', marginTop: '16px', color: 'var(--color-primary)', fontWeight: '600' }}>
                  {t('Read More')} <ArrowRight size={16} style={{ marginLeft: '4px' }}/>
                </button>
              </div>
            </div>
            <div className="blog-card">
              <div className="relative overflow-hidden"><img src="https://picsum.photos/id/1067/600/400" alt="Blog 2" /></div>
              <div className="blog-content">
                <div className="blog-date">{t('blog2_date')}</div>
                <h3 className="blog-title">{t('blog2_title')}</h3>
                <p className="blog-desc">{t('blog2_desc')}</p>
                <button className="btn btn-ghost" style={{ padding: '12px 0', marginTop: '16px', color: 'var(--color-primary)', fontWeight: '600' }}>
                  {t('Read More')} <ArrowRight size={16} style={{ marginLeft: '4px' }}/>
                </button>
              </div>
            </div>
            <div className="blog-card">
              <div className="relative overflow-hidden"><img src="https://picsum.photos/id/1015/600/400" alt="Blog 3" /></div>
              <div className="blog-content">
                <div className="blog-date">{t('blog3_date')}</div>
                <h3 className="blog-title">{t('blog3_title')}</h3>
                <p className="blog-desc">{t('blog3_desc')}</p>
                <button className="btn btn-ghost" style={{ padding: '12px 0', marginTop: '16px', color: 'var(--color-primary)', fontWeight: '600' }}>
                  {t('Read More')} <ArrowRight size={16} style={{ marginLeft: '4px' }}/>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" style={{ padding: '120px 0', backgroundColor: '#f9f9f9' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <div style={{ color: 'var(--color-primary)', fontWeight: '600', fontSize: '14px', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '12px' }}>{t('Got Questions?')}</div>
            <h2 className="section-title" style={{ marginBottom: 0 }}>{t('Frequently Asked Questions')}</h2>
          </div>
          <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {[
              { q: t('faq1_q'), a: t('faq1_a') },
              { q: t('faq2_q'), a: t('faq2_a') },
              { q: t('faq3_q'), a: t('faq3_a') },
              { q: t('faq4_q'), a: t('faq4_a') },
              { q: t('faq5_q'), a: t('faq5_a') }
            ].map((faq, idx) => (
              <div 
                key={idx} 
                style={{ padding: '24px', backgroundColor: '#ffffff', borderRadius: '12px', border: '1px solid var(--color-border)', boxShadow: '0 4px 15px rgba(0,0,0,0.03)', cursor: 'pointer', transition: 'all 0.2s ease' }}
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h3 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--color-text-dark)', margin: 0 }}>{faq.q}</h3>
                  <div style={{ backgroundColor: 'rgba(223, 58, 53, 0.1)', color: 'var(--color-primary)', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                    {openFaq === idx ? '-' : '+'}
                  </div>
                </div>
                <div style={{ maxHeight: openFaq === idx ? '200px' : '0', overflow: 'hidden', transition: 'max-height 0.3s ease' }}>
                  <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6', fontSize: '15px', marginTop: '16px', marginBottom: 0 }}>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PartnersSlider />
    </div>
  );
}
