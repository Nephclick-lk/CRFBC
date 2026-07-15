import React, { useState } from 'react';
import { Calculator, Shield, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Quotes() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [quoteResult, setQuoteResult] = useState(null);

  const handleCalculateQuote = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Mocking an API call or calculation delay
    setTimeout(() => {
      setIsSubmitting(false);
      setQuoteResult({
        estimatedCost: '$1,850 - $2,200',
        transitTime: '4 - 6 Days',
        message: 'This is a preliminary estimate based on standard regional tariffs. Our logistics team will email you a finalized quote within 2 hours.'
      });
    }, 1500);
  };

  return (
    <div style={{ backgroundColor: '#f9f9f9', minHeight: 'calc(100vh - 80px)', padding: '80px 0' }}>
      <div className="container" style={{ maxWidth: '1100px' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 className="page-title" style={{ color: 'var(--color-primary)' }}>Request a Freight Quote</h1>
          <p style={{ fontSize: '18px', color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>
            Get transparent pricing for truck border clearance, sea container customs processing, and freight forwarding across East Africa. No hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column: Form / Result */}
          <div className="md:col-span-2" style={{ gridColumn: 'span 2' }}>
            {quoteResult ? (
              <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '16px', boxShadow: '0 10px 40px rgba(0,0,0,0.08)', borderTop: '4px solid var(--color-primary)', textAlign: 'center' }}>
                <CheckCircle2 size={64} style={{ color: '#10893a', margin: '0 auto 24px' }} />
                <h2 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '16px' }}>Your Estimated Quote is Ready</h2>
                
                <div style={{ backgroundColor: '#f9f9f9', padding: '24px', borderRadius: '12px', margin: '24px 0', border: '1px solid var(--color-border)' }}>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '14px', textTransform: 'uppercase', fontWeight: '600', letterSpacing: '1px', marginBottom: '8px' }}>Estimated Cost</p>
                  <p style={{ fontSize: '40px', fontWeight: '800', color: 'var(--color-text-dark)', marginBottom: '24px' }}>{quoteResult.estimatedCost}</p>
                  
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '14px', textTransform: 'uppercase', fontWeight: '600', letterSpacing: '1px', marginBottom: '8px' }}>Estimated Transit Time</p>
                  <p style={{ fontSize: '24px', fontWeight: '700', color: 'var(--color-text-dark)' }}>{quoteResult.transitTime}</p>
                </div>

                <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6', marginBottom: '32px' }}>
                  {quoteResult.message}
                </p>

                <button onClick={() => setQuoteResult(null)} className="btn btn-primary btn-animated" style={{ padding: '16px 32px', fontSize: '16px' }}>
                  Calculate Another Quote
                </button>
              </div>
            ) : (
              <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '16px', boxShadow: '0 10px 40px rgba(0,0,0,0.05)' }}>
                <form onSubmit={handleCalculateQuote} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  
                  <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
                    <div style={{ flex: '1 1 200px' }}>
                      <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '8px' }}>Origin City / Port</label>
                      <input required type="text" style={inputStyle} placeholder="e.g. Mombasa, Kenya" />
                    </div>
                    <div style={{ flex: '1 1 200px' }}>
                      <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '8px' }}>Destination City</label>
                      <input required type="text" style={inputStyle} placeholder="e.g. Goma, DRC" />
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
                    <div style={{ flex: '1 1 200px' }}>
                      <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '8px' }}>Freight Type</label>
                      <select required style={inputStyle} defaultValue="">
                        <option value="" disabled>Select type</option>
                        <option value="container">FCL Container (20ft / 40ft)</option>
                        <option value="lcl">LCL (Less than Container Load)</option>
                        <option value="flatbed">Flatbed Truck</option>
                        <option value="air">Air Freight</option>
                      </select>
                    </div>
                    <div style={{ flex: '1 1 200px' }}>
                      <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '8px' }}>Estimated Weight (kg)</label>
                      <input required type="number" style={inputStyle} placeholder="e.g. 15000" />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '12px' }}>Customs Clearance Required?</label>
                    <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
                      <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '15px' }}>
                        <input type="radio" name="customs" defaultChecked style={{ width: '18px', height: '18px', accentColor: 'var(--color-primary)' }} /> Yes, both borders
                      </label>
                      <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '15px' }}>
                        <input type="radio" name="customs" style={{ width: '18px', height: '18px', accentColor: 'var(--color-primary)' }} /> Destination only
                      </label>
                      <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '15px' }}>
                        <input type="radio" name="customs" style={{ width: '18px', height: '18px', accentColor: 'var(--color-primary)' }} /> No
                      </label>
                    </div>
                  </div>
                  
                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '8px' }}>Additional Information</label>
                    <textarea style={{ ...inputStyle, minHeight: '120px', resize: 'vertical' }} placeholder="Describe your cargo, special handling requirements, or hazardous materials..."></textarea>
                  </div>

                  <div style={{ marginTop: '16px' }}>
                    <button type="submit" disabled={isSubmitting} className={`btn btn-primary w-full ${!isSubmitting && 'btn-animated'}`} style={{ padding: '16px', fontSize: '18px', display: 'flex', justifyContent: 'center', gap: '12px', opacity: isSubmitting ? 0.7 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer' }}>
                      {isSubmitting ? 'Calculating Quote...' : 'Calculate Estimated Quote'} 
                      {!isSubmitting && <ArrowRight size={20} />}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>

          {/* Right Column: Value Props */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ backgroundColor: 'rgba(223, 58, 53, 0.05)', padding: '32px', borderRadius: '16px', border: '1px solid rgba(223, 58, 53, 0.1)' }}>
              <Calculator style={{ color: 'var(--color-primary)', marginBottom: '16px' }} size={32} />
              <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '8px', color: 'var(--color-text-dark)' }}>Smart Pricing</h3>
              <p style={{ fontSize: '15px', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>Our algorithms calculate real-time border tariffs and transport costs to ensure you get the most accurate quote.</p>
            </div>
            
            <div style={{ backgroundColor: 'white', padding: '32px', borderRadius: '16px', border: '1px solid var(--color-border)' }}>
              <Shield style={{ color: '#0056b3', marginBottom: '16px' }} size={32} />
              <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '8px', color: 'var(--color-text-dark)' }}>Guaranteed Rates</h3>
              <p style={{ fontSize: '15px', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>Quotes are locked in for 14 days. We absorb minor fluctuations in border transit fees.</p>
            </div>

            <div style={{ backgroundColor: 'white', padding: '32px', borderRadius: '16px', border: '1px solid var(--color-border)' }}>
              <Clock style={{ color: 'var(--color-primary)', marginBottom: '16px' }} size={32} />
              <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '8px', color: 'var(--color-text-dark)' }}>Fast Response</h3>
              <p style={{ fontSize: '15px', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>Complex multi-modal quotes are manually reviewed and returned within 2 hours by our logistics experts.</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

const inputStyle = {
  width: '100%',
  padding: '14px 16px',
  border: '1px solid var(--color-border)',
  borderRadius: '8px',
  fontSize: '15px',
  fontFamily: 'inherit',
  outline: 'none',
  transition: 'border-color 0.2s',
  backgroundColor: '#fefefe'
};
