import React from 'react';
import { Truck, Ship, ClipboardList, Warehouse, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Services() {
  const { t } = useTranslation();

  const services = [
    {
      icon: <Truck size={48} strokeWidth={1.5} />,
      title: t('Truck Border Clearance'),
      description: t('End-to-end declaration and clearing for trucks at all major East African land border posts. We handle all documentation, compliance checks, and fast-track processing to keep your fleet moving without costly delays.'),
      features: [t('Pre-clearance documentation'), t('Duty and tax assessment'), t('Physical verification support'), t('Transit bonds management')]
    },
    {
      icon: <Ship size={48} strokeWidth={1.5} />,
      title: t('Sea Freight & Port Clearance'),
      description: t('Comprehensive customs clearance for sea containers arriving at Mombasa, Dar es Salaam, and other regional ports. We ensure your imported goods are released quickly and efficiently.'),
      features: [t('Bill of Lading processing'), t('Port charges negotiation'), t('Demurrage prevention'), t('Last-mile delivery coordination')]
    },
    {
      icon: <ClipboardList size={48} strokeWidth={1.5} />,
      title: t('Border Declaration Filing'),
      description: t('Accurate, timely, and fully compliant border declaration filing for all cargo types. Our experts understand the nuances of regional customs regulations to eliminate the risk of penalties.'),
      features: [t('Tariff classification'), t('Electronic single window filing'), t('Certificate of origin processing'), t('Exemption handling')]
    },
    {
      icon: <Warehouse size={48} strokeWidth={1.5} />,
      title: t('Warehousing & Logistics'),
      description: t('Secure storage solutions and integrated logistics management. Whether you need temporary storage at the border or long-term warehousing, we provide safe and trackable solutions.'),
      features: [t('Bonded warehousing'), t('Inventory management'), t('Cross-docking'), t('Cargo consolidation')]
    }
  ];

  return (
    <div style={{ backgroundColor: '#f9f9f9', minHeight: 'calc(100vh - 80px)' }}>
      {/* Header */}
      <section style={{ backgroundColor: 'var(--color-bg-dark)', color: 'white', padding: '100px 0', textAlign: 'center' }}>
        <div className="container">
          <div style={{ color: 'var(--color-primary)', fontWeight: '600', fontSize: '14px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>{t('WHAT WE DO')}</div>
          <h1 className="page-title" style={{ marginBottom: '24px' }}>{t('Our Services')}</h1>
          <p style={{ fontSize: '18px', maxWidth: '700px', margin: '0 auto', opacity: 0.9, lineHeight: '1.6' }}>
            {t('Comprehensive border declaration, customs clearing, and freight forwarding solutions engineered for speed, transparency, and total compliance.')}
          </p>
        </div>
      </section>

      {/* Services List */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {services.map((service, index) => (
              <div key={index} style={{ backgroundColor: 'white', borderRadius: '16px', border: '1px solid var(--color-border)', overflow: 'hidden', display: 'flex', flexDirection: index % 2 === 0 ? 'row' : 'row-reverse', flexWrap: 'wrap', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
                <div style={{ flex: '1 1 300px', backgroundColor: 'rgba(223, 58, 53, 0.03)', padding: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)' }}>
                  {service.icon}
                </div>
                <div style={{ flex: '2 1 500px', padding: '60px' }}>
                  <h2 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '20px', color: 'var(--color-text-dark)' }}>{service.title}</h2>
                  <p style={{ fontSize: '16px', color: 'var(--color-text-muted)', lineHeight: '1.7', marginBottom: '32px' }}>
                    {service.description}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.features.map((feature, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', fontWeight: '500' }}>
                        <CheckCircle2 size={20} style={{ color: 'var(--color-primary)' }} />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div style={{ marginTop: '40px' }}>
                    <Link to="/quotes" className="btn btn-primary btn-animated" style={{ padding: '12px 24px' }}>
                      {t('Get a Quote for this Service')} <ArrowRight size={18} style={{ marginLeft: '8px' }} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
