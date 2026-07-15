import React from 'react';
import { ShoppingCart, Hammer, Pickaxe, Cpu, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Solutions() {
  const industries = [
    {
      icon: <ShoppingCart size={40} />,
      title: 'Retail & FMCG',
      description: 'Fast-moving consumer goods require fast-moving logistics. We provide expedited border clearance to ensure your perishable and high-demand retail products reach shelves without delay.',
      color: '#0056b3'
    },
    {
      icon: <Hammer size={40} />,
      title: 'Automotive & Heavy Machinery',
      description: 'Importing vehicles, heavy machinery, or industrial equipment requires specialized customs handling. We manage the complex valuation and duty structures to ensure smooth entry.',
      color: '#df3a35'
    },
    {
      icon: <Pickaxe size={40} />,
      title: 'Mining & Minerals',
      description: 'Exporting minerals across borders demands rigorous compliance and security. Our specialized teams handle the strict documentation and verification processes for the mining sector.',
      color: '#d97706'
    },
    {
      icon: <Cpu size={40} />,
      title: 'Technology & Electronics',
      description: 'High-value electronics are sensitive and prone to high tariffs. We ensure accurate HS classification and secure, fast-tracked processing to protect your valuable shipments.',
      color: '#059669'
    }
  ];

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: 'calc(100vh - 80px)' }}>
      {/* Header */}
      <section style={{ backgroundColor: '#f9f9f9', padding: '100px 0', textAlign: 'center', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ color: 'var(--color-primary)', fontWeight: '600', fontSize: '14px', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '16px' }}>Industry Expertise</div>
          <h1 className="page-title" style={{ marginBottom: '24px', color: 'var(--color-text-dark)' }}>Tailored Solutions for Your Sector</h1>
          <p style={{ fontSize: '18px', maxWidth: '700px', margin: '0 auto', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
            Every industry faces unique customs and logistical challenges. We engineer specific clearance pipelines customized for your cargo type.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section style={{ padding: '100px 0' }}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, idx) => (
              <div key={idx} style={{ padding: '40px', borderRadius: '16px', border: '1px solid var(--color-border)', transition: 'all 0.3s ease', cursor: 'pointer' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.08)';
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.borderColor = industry.color;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.borderColor = 'var(--color-border)';
                }}
              >
                <div style={{ width: '80px', height: '80px', borderRadius: '20px', backgroundColor: `${industry.color}15`, color: industry.color, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '32px' }}>
                  {industry.icon}
                </div>
                <h3 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '16px', color: 'var(--color-text-dark)' }}>{industry.title}</h3>
                <p style={{ fontSize: '16px', color: 'var(--color-text-muted)', lineHeight: '1.7', marginBottom: '32px' }}>
                  {industry.description}
                </p>
                <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: industry.color, fontWeight: '600', fontSize: '15px' }}>
                  Discuss your project <ArrowRight size={18} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: 'var(--color-bg-dark)', color: 'white', padding: '80px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '24px' }}>Need a custom clearance pipeline?</h2>
          <p style={{ fontSize: '18px', opacity: 0.9, marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px' }}>
            Speak with one of our specialized logistics consultants today to map out the most efficient border strategy for your specific freight.
          </p>
          <Link to="/contact" className="btn btn-primary btn-animated" style={{ padding: '16px 32px', fontSize: '18px' }}>
            Consult an Expert
          </Link>
        </div>
      </section>
    </div>
  );
}
