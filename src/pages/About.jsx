import React from 'react';
import { CheckCircle2, Shield, Globe, Clock } from 'lucide-react';

export default function About() {
  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '80vh' }}>
      {/* Header Section */}
      <section style={{ backgroundColor: 'var(--color-bg-dark)', color: 'white', padding: '120px 0 80px', textAlign: 'center' }}>
        <div className="container">
          <h1 className="page-title" style={{ marginBottom: '24px' }}>About CRFBC</h1>
          <p style={{ fontSize: '18px', maxWidth: '700px', margin: '0 auto', opacity: 0.9, lineHeight: '1.6' }}>
            Your trusted partner in seamless border declaration, efficient customs clearing, and reliable freight forwarding by land and sea.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section style={{ padding: '80px 0' }}>
        <div className="container flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2">
            <img src="https://picsum.photos/id/1015/800/600" alt="About Us" style={{ borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', width: '100%' }} />
          </div>
          <div className="md:w-1/2">
            <div style={{ color: 'var(--color-primary)', fontWeight: '600', fontSize: '14px', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '16px' }}>Our Mission</div>
            <h2 className="section-title">
              Bridging the Gap in Global Trade & Logistics
            </h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '16px', lineHeight: '1.7', marginBottom: '24px' }}>
              At Carrefour Business (CRFBC), we specialize in mitigating the complexities of cross-border trade. Our core expertise lies in accurate border declaration, rapid customs clearance, and secure freight forwarding through both land and sea routes. We aim to empower businesses by ensuring their goods move across borders efficiently, legally, and without unnecessary delays.
            </p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '16px', lineHeight: '1.7', marginBottom: '32px' }}>
              Whether you are moving bulk cargo by sea or managing time-sensitive land freight, our experienced team provides end-to-end solutions tailored to your specific logistics needs.
            </p>

            <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: '500' }}>
                <CheckCircle2 className="text-primary" size={24} />
                Comprehensive Border Declaration Services
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: '500' }}>
                <CheckCircle2 className="text-primary" size={24} />
                Fast and Compliant Customs Clearing
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: '500' }}>
                <CheckCircle2 className="text-primary" size={24} />
                Reliable Freight Forwarding (Land & Sea)
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section style={{ padding: '80px 0', backgroundColor: '#f9f9f9' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 className="section-title" style={{ marginBottom: 0 }}>Our Core Values</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '16px', textAlign: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
              <div style={{ display: 'inline-flex', padding: '16px', backgroundColor: 'rgba(223, 58, 53, 0.1)', color: 'var(--color-primary)', borderRadius: '50%', marginBottom: '24px' }}>
                <Globe size={32} />
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '16px' }}>Global Reach, Local Expertise</h3>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>We leverage our international network and deep knowledge of local customs to navigate regulations effortlessly.</p>
            </div>

            <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '16px', textAlign: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
              <div style={{ display: 'inline-flex', padding: '16px', backgroundColor: 'rgba(223, 58, 53, 0.1)', color: 'var(--color-primary)', borderRadius: '50%', marginBottom: '24px' }}>
                <Shield size={32} />
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '16px' }}>Compliance & Security</h3>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>We prioritize the safety of your cargo and strict adherence to international trade laws and declarations.</p>
            </div>

            <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '16px', textAlign: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
              <div style={{ display: 'inline-flex', padding: '16px', backgroundColor: 'rgba(223, 58, 53, 0.1)', color: 'var(--color-primary)', borderRadius: '50%', marginBottom: '24px' }}>
                <Clock size={32} />
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '16px' }}>Efficiency & Timeliness</h3>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>Time is money. Our optimized routing and quick clearing processes ensure your goods arrive on time.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
