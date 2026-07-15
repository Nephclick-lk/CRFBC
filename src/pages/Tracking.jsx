import React, { useState } from 'react';
import { Search, MapPin, Truck, Ship, CheckCircle2, AlertCircle } from 'lucide-react';

export default function Tracking() {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [result, setResult] = useState(null);

  const handleTrack = (e) => {
    e.preventDefault();
    if (!trackingNumber.trim()) return;
    
    setIsSearching(true);
    
    // Simulate API delay
    setTimeout(() => {
      setIsSearching(false);
      setResult({
        number: trackingNumber.toUpperCase(),
        status: 'In Transit',
        origin: 'Mombasa Port, Kenya',
        destination: 'Kampala, Uganda',
        estDelivery: 'July 18, 2026',
        steps: [
          { title: 'Cargo Received', date: 'Jul 12, 08:30 AM', location: 'Mombasa Port', completed: true },
          { title: 'Customs Cleared (Origin)', date: 'Jul 13, 11:45 AM', location: 'Mombasa Port', completed: true },
          { title: 'In Transit to Border', date: 'Jul 14, 06:00 AM', location: 'Kenya Highway', completed: true },
          { title: 'Arrived at Border', date: 'Jul 15, 02:15 PM', location: 'Busia Border', completed: true },
          { title: 'Customs Clearance (Border)', date: 'In Progress', location: 'Busia Border', completed: false },
          { title: 'Out for Delivery', date: 'Pending', location: 'Uganda', completed: false }
        ]
      });
    }, 1200);
  };

  return (
    <div style={{ backgroundColor: '#f4f6f8', minHeight: 'calc(100vh - 80px)' }}>
      {/* Search Section */}
      <section style={{ backgroundColor: 'var(--color-bg-dark)', padding: '80px 0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h1 className="page-title" style={{ color: 'white', marginBottom: '24px' }}>Track Your Cargo</h1>
          <p style={{ color: '#aaa', fontSize: '18px', marginBottom: '40px' }}>
            Enter your Waybill, Booking, or Container number for real-time clearance and transit updates.
          </p>
          
          <form onSubmit={handleTrack} style={{ display: 'flex', gap: '16px', backgroundColor: 'rgba(255,255,255,0.1)', padding: '12px', borderRadius: '16px', backdropFilter: 'blur(10px)' }}>
            <div style={{ flex: 1, position: 'relative' }}>
              <Search style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#888' }} size={24} />
              <input 
                type="text" 
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                placeholder="e.g. CRFB-10928374" 
                style={{ width: '100%', padding: '20px 20px 20px 56px', borderRadius: '12px', border: 'none', fontSize: '18px', outline: 'none' }}
              />
            </div>
            <button type="submit" disabled={isSearching} className="btn btn-primary btn-animated" style={{ padding: '0 40px', fontSize: '18px', borderRadius: '12px' }}>
              {isSearching ? 'Searching...' : 'Track'}
            </button>
          </form>
        </div>
      </section>

      {/* Results Section */}
      <section style={{ padding: '60px 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          {!result && !isSearching && (
            <div style={{ textAlign: 'center', padding: '80px 0', color: 'var(--color-text-muted)' }}>
              <MapPin size={64} style={{ margin: '0 auto 24px', opacity: 0.2 }} />
              <h3 style={{ fontSize: '24px', fontWeight: '600' }}>Waiting for tracking number</h3>
              <p style={{ marginTop: '8px' }}>Please enter a valid tracking number above to see the cargo status.</p>
            </div>
          )}

          {result && !isSearching && (
            <div style={{ backgroundColor: 'white', borderRadius: '24px', boxShadow: '0 10px 40px rgba(0,0,0,0.05)', overflow: 'hidden' }}>
              {/* Card Header */}
              <div style={{ padding: '40px', borderBottom: '1px solid var(--color-border)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '24px' }}>
                <div>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '14px', textTransform: 'uppercase', fontWeight: '600', letterSpacing: '1px', marginBottom: '8px' }}>Tracking Number</p>
                  <h2 style={{ fontSize: '32px', fontWeight: '800', color: 'var(--color-text-dark)' }}>{result.number}</h2>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '14px', textTransform: 'uppercase', fontWeight: '600', letterSpacing: '1px', marginBottom: '8px' }}>Estimated Delivery</p>
                  <h2 style={{ fontSize: '24px', fontWeight: '700', color: 'var(--color-primary)' }}>{result.estDelivery}</h2>
                </div>
              </div>

              {/* Route Summary */}
              <div style={{ padding: '32px 40px', backgroundColor: '#f9f9f9', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'white', border: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Ship size={24} color="var(--color-text-muted)" />
                  </div>
                  <div>
                    <p style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>Origin</p>
                    <p style={{ fontWeight: '600', fontSize: '16px' }}>{result.origin}</p>
                  </div>
                </div>

                <div style={{ flex: 1, borderTop: '2px dashed #ccc', margin: '0 16px', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)', backgroundColor: '#f9f9f9', padding: '0 8px', color: '#888' }}>
                    <Truck size={24} />
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ textAlign: 'right' }}>
                    <p style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>Destination</p>
                    <p style={{ fontWeight: '600', fontSize: '16px' }}>{result.destination}</p>
                  </div>
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'white', border: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <MapPin size={24} color="var(--color-primary)" />
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div style={{ padding: '40px' }}>
                <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '32px' }}>Clearance & Transit History</h3>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                  {result.steps.map((step, idx) => (
                    <div key={idx} style={{ display: 'flex', gap: '24px', position: 'relative', paddingBottom: idx === result.steps.length - 1 ? '0' : '40px' }}>
                      
                      {/* Line connecting steps */}
                      {idx !== result.steps.length - 1 && (
                        <div style={{ position: 'absolute', left: '15px', top: '32px', bottom: '0', width: '2px', backgroundColor: step.completed ? 'var(--color-primary)' : '#eee', zIndex: 0 }}></div>
                      )}

                      {/* Dot icon */}
                      <div style={{ position: 'relative', zIndex: 1, width: '32px', height: '32px', borderRadius: '50%', backgroundColor: step.completed ? 'var(--color-primary)' : 'white', border: step.completed ? 'none' : '2px solid #ddd', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                        {step.completed ? <CheckCircle2 size={16} /> : (idx === result.steps.filter(s => s.completed).length ? <AlertCircle size={16} color="var(--color-primary)" /> : null)}
                      </div>

                      {/* Step content */}
                      <div style={{ flex: 1, paddingTop: '4px' }}>
                        <h4 style={{ fontSize: '18px', fontWeight: step.completed ? '600' : '500', color: step.completed ? 'var(--color-text-dark)' : 'var(--color-text-muted)', marginBottom: '4px' }}>
                          {step.title}
                        </h4>
                        <div style={{ display: 'flex', gap: '16px', fontSize: '14px', color: 'var(--color-text-muted)' }}>
                          <span>{step.date}</span>
                          <span>•</span>
                          <span>{step.location}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
