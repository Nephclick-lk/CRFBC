import React from 'react';
import { CheckCircle2, Shield, Globe, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import PartnersSlider from '../components/PartnersSlider';
import aboutImg from '../assets/about-us.jpg';

export default function About() {
  const { t } = useTranslation();
  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '80vh' }}>
      {/* Header Section */}
      <section style={{ backgroundColor: 'var(--color-bg-dark)', color: 'white', padding: '120px 0 80px', textAlign: 'center' }}>
        <div className="container">
          <div style={{ color: 'var(--color-primary)', fontWeight: '600', fontSize: '14px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>{t('DISCOVER OUR STORY')}</div>
          <h1 className="page-title" style={{ marginBottom: '24px' }}>{t('About Carefour Business')}</h1>
          <p style={{ fontSize: '18px', maxWidth: '700px', margin: '0 auto', opacity: 0.9, lineHeight: '1.6' }}>
            {t('about_hero_desc')}
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section style={{ padding: '80px 0' }}>
        <div className="container flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2">
            <img src={aboutImg} alt="About Us" style={{ borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', width: '100%' }} />
          </div>
          <div className="md:w-1/2">
            <div style={{ color: 'var(--color-primary)', fontWeight: '600', fontSize: '14px', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '16px' }}>{t('Our Mission')}</div>
            <h2 className="section-title">
              {t('about_mission_title')}
            </h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '16px', lineHeight: '1.7', marginBottom: '24px' }}>
              {t('about_mission_p1')}
            </p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '16px', lineHeight: '1.7', marginBottom: '32px' }}>
              {t('about_mission_p2')}
            </p>

            <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: '500' }}>
                <CheckCircle2 className="text-primary" size={24} />
                {t('about_list_1')}
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: '500' }}>
                <CheckCircle2 className="text-primary" size={24} />
                {t('about_list_2')}
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: '500' }}>
                <CheckCircle2 className="text-primary" size={24} />
                {t('about_list_3')}
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section style={{ padding: '80px 0', backgroundColor: '#f9f9f9' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 className="section-title" style={{ marginBottom: 0 }}>{t('Our Core Values')}</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '16px', textAlign: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
              <div style={{ display: 'inline-flex', padding: '16px', backgroundColor: 'rgba(223, 58, 53, 0.1)', color: 'var(--color-primary)', borderRadius: '50%', marginBottom: '24px' }}>
                <Globe size={32} />
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '16px' }}>{t('Border Post Expertise')}</h3>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>{t('about_val1_desc')}</p>
            </div>

            <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '16px', textAlign: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
              <div style={{ display: 'inline-flex', padding: '16px', backgroundColor: 'rgba(223, 58, 53, 0.1)', color: 'var(--color-primary)', borderRadius: '50%', marginBottom: '24px' }}>
                <Shield size={32} />
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '16px' }}>{t('Compliance First')}</h3>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>{t('about_val2_desc')}</p>
            </div>

            <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '16px', textAlign: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
              <div style={{ display: 'inline-flex', padding: '16px', backgroundColor: 'rgba(223, 58, 53, 0.1)', color: 'var(--color-primary)', borderRadius: '50%', marginBottom: '24px' }}>
                <Clock size={32} />
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '16px' }}>{t('Speed at the Border')}</h3>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>{t('about_val3_desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Slider */}
      <PartnersSlider />
    </div>
  );
}
