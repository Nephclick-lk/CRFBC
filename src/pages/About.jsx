import React from 'react';
import { CheckCircle2, Shield, Globe, Clock } from 'lucide-react';
import PartnersSlider from '../components/PartnersSlider';

export default function About() {
  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '80vh' }}>
      {/* Header Section */}
      <section style={{ backgroundColor: 'var(--color-bg-dark)', color: 'white', padding: '120px 0 80px', textAlign: 'center' }}>
        <div className="container">
          <h1 className="page-title" style={{ marginBottom: '24px' }}>About Carefour Business</h1>
          <p style={{ fontSize: '18px', maxWidth: '700px', margin: '0 auto', opacity: 0.9, lineHeight: '1.6' }}>
            Border declaration and customs clearing specialists for trucks crossing by land and containers arriving by sea. Helping businesses move cargo across borders legally, fast, and without hassle.
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
              Getting trucks and ships through borders — legally and fast
            </h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '16px', lineHeight: '1.7', marginBottom: '24px' }}>
              Carefour Business exists to solve one problem: moving cargo across borders without delays, fines, or confusion. We specialize in border declaration and customs clearing for trucks crossing land borders and sea containers arriving at ports. Every shipment we handle goes through rigorous compliance checks so your cargo clears on time, every time.
            </p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '16px', lineHeight: '1.7', marginBottom: '32px' }}>
              Whether you operate a fleet of trucks moving between Uganda, DRC, Kenya, and Rwanda, or import containerized goods through Mombasa or Dar es Salaam, our team manages the full clearance process end to end. We handle documentation, duty assessment, verification, and cargo release.
            </p>

            <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: '500' }}>
                <CheckCircle2 className="text-primary" size={24} />
                Truck Border Declaration & Clearance
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: '500' }}>
                <CheckCircle2 className="text-primary" size={24} />
                Sea Container Customs Processing
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: '500' }}>
                <CheckCircle2 className="text-primary" size={24} />
                Cross-Border Compliance & Logistics
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
              <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '16px' }}>Border Post Expertise</h3>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>We know every border post including Pondwe, Mutukula, Tunduma, Nakonde, Sakania, and Kasumbalesa. Our agents are on the ground and understand local procedures.</p>
            </div>

            <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '16px', textAlign: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
              <div style={{ display: 'inline-flex', padding: '16px', backgroundColor: 'rgba(223, 58, 53, 0.1)', color: 'var(--color-primary)', borderRadius: '50%', marginBottom: '24px' }}>
                <Shield size={32} />
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '16px' }}>Compliance First</h3>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>Every declaration is accurate and fully compliant. We eliminate the risk of rejected clearances and border penalties.</p>
            </div>

            <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '16px', textAlign: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
              <div style={{ display: 'inline-flex', padding: '16px', backgroundColor: 'rgba(223, 58, 53, 0.1)', color: 'var(--color-primary)', borderRadius: '50%', marginBottom: '24px' }}>
                <Clock size={32} />
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '16px' }}>Speed at the Border</h3>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>We pre-clear shipments and manage documentation in advance so your trucks and containers spend less time waiting.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Slider */}
      <PartnersSlider />
    </div>
  );
}
