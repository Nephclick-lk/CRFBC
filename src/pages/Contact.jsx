import React from 'react';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <div style={{ padding: '120px 0', backgroundColor: '#ffffff', minHeight: '80vh' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 className="page-title" style={{ marginBottom: '16px' }}>Contact Us</h1>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '18px', maxWidth: '600px', margin: '0 auto' }}>
            We are here to help with all your border declaration, clearing, and freight forwarding needs. Reach out to us today.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Contact Info */}
          <div className="md:w-1/3">
            <h3 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '24px' }}>Get In Touch</h3>
            
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '24px' }}>
              <div style={{ backgroundColor: '#f0f0f0', padding: '12px', borderRadius: '50%', color: 'var(--color-primary)' }}>
                <Phone size={24} />
              </div>
              <div>
                <h4 style={{ fontWeight: '600', fontSize: '16px', marginBottom: '8px' }}>Phone / WhatsApp</h4>
                <a href="https://wa.me/256782207113" target="_blank" rel="noopener noreferrer" style={{ display: 'block', color: 'var(--color-text-muted)', marginBottom: '4px' }}>+256 782207113</a>
                <a href="https://wa.me/243995663282" target="_blank" rel="noopener noreferrer" style={{ display: 'block', color: 'var(--color-text-muted)' }}>+243 995663282</a>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '24px' }}>
              <div style={{ backgroundColor: '#f0f0f0', padding: '12px', borderRadius: '50%', color: 'var(--color-primary)' }}>
                <MessageCircle size={24} />
              </div>
              <div>
                <h4 style={{ fontWeight: '600', fontSize: '16px', marginBottom: '8px' }}>Chatbot Support</h4>
                <p style={{ color: 'var(--color-text-muted)' }}>Use the floating chat button at the bottom right to talk to our Assistant Chatbot.</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '24px' }}>
              <div style={{ backgroundColor: '#f0f0f0', padding: '12px', borderRadius: '50%', color: 'var(--color-primary)' }}>
                <Mail size={24} />
              </div>
              <div>
                <h4 style={{ fontWeight: '600', fontSize: '16px', marginBottom: '8px' }}>Email Address</h4>
                <p style={{ color: 'var(--color-text-muted)' }}>info@crfbc.com</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
              <div style={{ backgroundColor: '#f0f0f0', padding: '12px', borderRadius: '50%', color: 'var(--color-primary)' }}>
                <MapPin size={24} />
              </div>
              <div>
                <h4 style={{ fontWeight: '600', fontSize: '16px', marginBottom: '8px' }}>Office Location</h4>
                <p style={{ color: 'var(--color-text-muted)' }}>CRFBC Headquarters<br />Border Customs Zone</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:w-2/3">
            <div style={{ backgroundColor: '#f9f9f9', padding: '40px', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
              <h3 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '24px' }}>Send Us a Message</h3>
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Your Name</label>
                    <input type="text" placeholder="John Doe" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--color-border)', outline: 'none' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Email Address</label>
                    <input type="email" placeholder="john@example.com" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--color-border)', outline: 'none' }} />
                  </div>
                </div>
                <div className="mb-6">
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Subject</label>
                  <input type="text" placeholder="How can we help?" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--color-border)', outline: 'none' }} />
                </div>
                <div className="mb-6">
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Message</label>
                  <textarea rows="5" placeholder="Write your message here..." style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--color-border)', outline: 'none', resize: 'vertical' }}></textarea>
                </div>
                <button type="button" className="btn btn-primary btn-animated" style={{ width: '100%' }}>Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
