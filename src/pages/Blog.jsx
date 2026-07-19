import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Blog() {
  const { t } = useTranslation();

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '80vh' }}>
      <section style={{ backgroundColor: 'var(--color-bg-dark)', color: 'white', padding: '120px 0 80px', textAlign: 'center' }}>
        <div className="container">
          <div style={{ color: 'var(--color-primary)', fontWeight: '600', fontSize: '14px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>
            {t('BLOGS_SUBTITLE')}
          </div>
          <h1 className="page-title" style={{ marginBottom: '24px' }}>{t('Our Latest News & Insights')}</h1>
          <p style={{ fontSize: '18px', maxWidth: '700px', margin: '0 auto', opacity: 0.9, lineHeight: '1.6' }}>
            {t('Stay updated with the latest in cross-border logistics.')}
          </p>
        </div>
      </section>

      <section style={{ padding: '80px 0', backgroundColor: '#f9f9f9' }}>
        <div className="container">
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
    </div>
  );
}
