import React, { useState } from 'react';
import { Search, Plane, Warehouse, Truck, ClipboardList, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('Tracking');
  const [trackingType, setTrackingType] = useState('Booking Number');

  return (
    <div style={{ backgroundColor: '#ffffff' }}>
      {/* Hero Section */}
      <section className="hero-section" style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Vimeo Background Video */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          pointerEvents: 'none',
          overflow: 'hidden'
        }}>
          <iframe 
            src="https://player.vimeo.com/video/1206391296?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1" 
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '100vw',
              height: '56.25vw',
              minHeight: '100%',
              minWidth: '177.77vh',
              transform: 'translate(-50%, -50%)',
              border: 'none'
            }}
            allow="autoplay; fullscreen"
            title="Hero Background Video"
          ></iframe>
        </div>
        
        {/* Semi-transparent overlay to ensure text readability */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(255, 255, 255, 0.7)',
          zIndex: 1
        }}></div>

        <div className="container flex flex-col md:flex-row gap-8 relative" style={{ height: '100%', zIndex: 2 }}>
          
          {/* Left Column */}
          <div className="md:w-1/2 flex flex-col justify-center" style={{ marginTop: '20px' }}>
            <h1 style={{ fontSize: '72px', fontWeight: '700', lineHeight: '1.05', marginBottom: '24px', letterSpacing: '-1px' }}>
              From First Mile to<br />Final Delivery
            </h1>
            <p style={{ fontSize: '18px', color: 'var(--color-text-dark)', maxWidth: '480px', marginBottom: '40px', lineHeight: '1.6', opacity: 0.85, fontWeight: '500' }}>
              Reliable global logistics solutions designed for speed, transparency, and peace of mind — from first mile to final delivery.
            </p>

            {/* Tracking Widget */}
            <div className="tracking-widget">
              <div className="flex gap-6 mb-4" style={{ borderBottom: '1px solid var(--color-border)' }}>
                {['Tracking', 'Schedules', 'Offices'].map(tab => (
                  <button 
                    key={tab}
                    className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="radio-group">
                <label className="radio-label">
                  <input 
                    type="radio" 
                    name="trackingType"
                    checked={trackingType === 'Container'}
                    onChange={() => setTrackingType('Container')}
                  />
                  Container / Bill of Lading Number
                </label>
                <label className="radio-label">
                  <input 
                    type="radio" 
                    name="trackingType"
                    checked={trackingType === 'Booking Number'}
                    onChange={() => setTrackingType('Booking Number')}
                  />
                  Booking Number
                </label>
              </div>

              <div className="search-input-wrapper">
                <Search size={18} />
                <input type="text" placeholder="Enter Tracking Number" />
              </div>

              <button className="btn btn-primary btn-animated" style={{ width: '100%', padding: '16px', fontSize: '16px' }}>
                Search
              </button>
            </div>
          </div>

          {/* Right Column / Image Overlays */}
          <div className="md:w-1/2 relative flex flex-col justify-between" style={{ paddingBottom: '40px' }}>
            <div style={{ alignSelf: 'flex-end', textAlign: 'right', marginTop: '20px' }}>
              <div className="avatar-group mb-2">
                <img src="https://i.pravatar.cc/100?img=11" className="avatar" alt="User 1" />
                <img src="https://i.pravatar.cc/100?img=12" className="avatar" alt="User 2" />
                <img src="https://i.pravatar.cc/100?img=13" className="avatar" alt="User 3" />
              </div>
              <p style={{ fontSize: '14px', fontWeight: '600', textDecoration: 'underline' }}>
                143.4k+ Customer Reviews
              </p>
            </div>
            
            {/* Stats Overlaid */}
            <div className="flex gap-8 mt-auto ml-auto" style={{ backgroundColor: 'rgba(0,0,0,0.15)', padding: '24px 32px', borderRadius: '16px', backdropFilter: 'blur(8px)' }}>
              <div className="stats-card">
                <div className="stats-number">15+</div>
                <div className="stats-label">Years Of Experience</div>
              </div>
              <div className="stats-card">
                <div className="stats-number">20+</div>
                <div className="stats-label">Countries Served</div>
              </div>
              <div className="stats-card">
                <div className="stats-number">99.2%</div>
                <div className="stats-label">On-Time Delivery</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* About Section */}
      <section id="about" style={{ padding: '120px 0', backgroundColor: '#f9f9f9' }}>
        <div className="container flex flex-col md:flex-row items-center gap-16">
          {/* Image */}
          <div className="md:w-1/2 w-full">
            <div className="about-image-wrapper">
              <img src="https://picsum.photos/id/1073/800/600" alt="About CRFBC" />
              <div style={{ position: 'absolute', bottom: '24px', left: '24px', backgroundColor: 'white', padding: '16px 24px', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                <p style={{ fontSize: '24px', fontWeight: '700', color: 'var(--color-primary)' }}>10M+</p>
                <p style={{ fontSize: '14px', fontWeight: '600', color: 'var(--color-text-dark)' }}>Parcels Delivered</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="md:w-1/2 w-full">
            <div style={{ color: 'var(--color-primary)', fontWeight: '600', fontSize: '14px', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '16px' }}>Who We Are</div>
            <h2 style={{ fontSize: '48px', fontWeight: '700', lineHeight: '1.1', marginBottom: '24px', letterSpacing: '-1px' }}>
              Bridging the gap in global logistics.
            </h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '16px', lineHeight: '1.7', marginBottom: '24px' }}>
              CRFBC is a premier logistics and supply chain provider dedicated to making global trade accessible and efficient. With state-of-the-art tracking, dedicated transport networks, and a deep understanding of customs regulations, we ensure your cargo reaches its destination safely and on time.
            </p>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
              {['24/7 Dedicated Customer Support', 'Advanced Real-Time Tracking', 'Eco-Friendly Transport Options'].map((item, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: '500' }}>
                  <CheckCircle2 className="text-primary" size={20} />
                  {item}
                </li>
              ))}
            </ul>
            <button className="btn btn-primary btn-animated">
              Read Our Story <ArrowRight size={18} style={{ marginLeft: '8px' }} />
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" style={{ padding: '120px 0', backgroundColor: '#ffffff' }}>
        <div className="container flex flex-col md:flex-row gap-8">
          
          {/* Left */}
          <div className="md:w-1/3">
            <h2 style={{ fontSize: '48px', fontWeight: '700', lineHeight: '1.1', marginBottom: '24px', letterSpacing: '-1px' }}>
              Our Logistics<br />Services
            </h2>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6', maxWidth: '300px', fontSize: '15px' }}>
              End-to-end logistics solutions built to support businesses of every size.
            </p>
          </div>

          {/* Right */}
          <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Card 1 */}
            <div className="service-card">
              <div style={{ marginBottom: '24px', color: 'var(--color-primary)' }}>
                <Plane size={40} strokeWidth={1.5} />
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '12px' }}>Freight Forwarding</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '15px', lineHeight: '1.6' }}>
                Air, Sea, And Land Freight With Optimized Routing And Cost Control.
              </p>
            </div>

            {/* Card 2 */}
            <div className="service-card">
              <div style={{ marginBottom: '24px', color: 'var(--color-primary)' }}>
                <Warehouse size={40} strokeWidth={1.5} />
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '12px' }}>Warehousing & Storage</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '15px', lineHeight: '1.6' }}>
                Secure, Scalable Warehousing With Real-Time Inventory Tracking.
              </p>
            </div>

            {/* Card 3 */}
            <div className="service-card">
              <div style={{ marginBottom: '24px', color: 'var(--color-primary)' }}>
                <Truck size={40} strokeWidth={1.5} />
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '12px' }}>Last-Mile Delivery</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '15px', lineHeight: '1.6' }}>
                Fast And Reliable Doorstep Delivery Powered By Local Networks.
              </p>
            </div>

            {/* Card 4 */}
            <div className="service-card">
              <div style={{ marginBottom: '24px', color: 'var(--color-primary)' }}>
                <ClipboardList size={40} strokeWidth={1.5} />
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '12px' }}>Customs Clearance</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '15px', lineHeight: '1.6' }}>
                Hassle-Free Documentation And Compliance Across Borders.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Blogs Section */}
      <section id="blogs" style={{ padding: '120px 0', backgroundColor: '#f9f9f9' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <div style={{ color: 'var(--color-primary)', fontWeight: '600', fontSize: '14px', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '12px' }}>Insights & News</div>
            <h2 style={{ fontSize: '48px', fontWeight: '700', letterSpacing: '-1px' }}>Latest from our Blog</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Blog 1 */}
            <div className="blog-card">
              <div className="relative overflow-hidden">
                <img src="https://picsum.photos/id/1050/600/400" alt="Blog 1" />
              </div>
              <div className="blog-content">
                <div className="blog-date">March 15, 2026</div>
                <h3 className="blog-title">How AI is Reshaping Supply Chain Logistics</h3>
                <p className="blog-desc">Discover the revolutionary impact of artificial intelligence on route optimization and inventory management.</p>
                <button className="btn btn-ghost" style={{ padding: '12px 0', marginTop: '16px', color: 'var(--color-primary)', fontWeight: '600' }}>
                  Read More <ArrowRight size={16} style={{ marginLeft: '4px' }}/>
                </button>
              </div>
            </div>

            {/* Blog 2 */}
            <div className="blog-card">
              <div className="relative overflow-hidden">
                <img src="https://picsum.photos/id/1067/600/400" alt="Blog 2" />
              </div>
              <div className="blog-content">
                <div className="blog-date">March 10, 2026</div>
                <h3 className="blog-title">Sustainable Shipping: Our Path to Net Zero</h3>
                <p className="blog-desc">Learn about our latest eco-friendly initiatives and how we plan to reduce our carbon footprint by 2030.</p>
                <button className="btn btn-ghost" style={{ padding: '12px 0', marginTop: '16px', color: 'var(--color-primary)', fontWeight: '600' }}>
                  Read More <ArrowRight size={16} style={{ marginLeft: '4px' }}/>
                </button>
              </div>
            </div>

            {/* Blog 3 */}
            <div className="blog-card">
              <div className="relative overflow-hidden">
                <img src="https://picsum.photos/id/1015/600/400" alt="Blog 3" />
              </div>
              <div className="blog-content">
                <div className="blog-date">March 02, 2026</div>
                <h3 className="blog-title">Navigating New Cross-Border Customs Regulations</h3>
                <p className="blog-desc">An in-depth guide to understanding the recent changes in European and North American trade laws.</p>
                <button className="btn btn-ghost" style={{ padding: '12px 0', marginTop: '16px', color: 'var(--color-primary)', fontWeight: '600' }}>
                  Read More <ArrowRight size={16} style={{ marginLeft: '4px' }}/>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
