import React, { useState } from 'react';
import { Calendar, FileText, MessageSquare, LayoutDashboard, Settings, LogOut, Plus, Trash2, Edit2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Admin() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="flex h-screen bg-gray-100" style={{ backgroundColor: '#f9f9f9', minHeight: '100vh', display: 'flex' }}>
      {/* Sidebar */}
      <div style={{ width: '280px', backgroundColor: '#111', color: 'white', display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '24px', borderBottom: '1px solid #333' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: 'white' }}>Carefour Admin</h2>
          <p style={{ fontSize: '12px', color: '#888' }}>Control Panel</p>
        </div>

        <nav style={{ flex: 1, padding: '24px 0' }}>
          <button onClick={() => setActiveTab('dashboard')} style={navItemStyle(activeTab === 'dashboard')}>
            <LayoutDashboard size={20} /> Dashboard
          </button>
          <button onClick={() => setActiveTab('schedules')} style={navItemStyle(activeTab === 'schedules')}>
            <Calendar size={20} /> Manage Schedules
          </button>
          <button onClick={() => setActiveTab('blogs')} style={navItemStyle(activeTab === 'blogs')}>
            <FileText size={20} /> Manage Blogs
          </button>
          <button onClick={() => setActiveTab('requests')} style={navItemStyle(activeTab === 'requests')}>
            <MessageSquare size={20} /> View Requests
          </button>
          <button onClick={() => setActiveTab('settings')} style={navItemStyle(activeTab === 'settings')}>
            <Settings size={20} /> Settings
          </button>
        </nav>

        <div style={{ padding: '24px', borderTop: '1px solid #333' }}>
          <Link to="/" style={{ ...navItemStyle(false), padding: 0, color: '#ff6b6b', textDecoration: 'none' }}>
            <LogOut size={20} /> Back to Site
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '40px' }}>
        {activeTab === 'dashboard' && <DashboardTab />}
        {activeTab === 'schedules' && <SchedulesTab />}
        {activeTab === 'blogs' && <BlogsTab />}
        {activeTab === 'requests' && <RequestsTab />}
        {activeTab === 'settings' && <div style={{ fontSize: '24px', fontWeight: 'bold' }}>Settings (Coming Soon)</div>}
      </div>
    </div>
  );
}

// Subcomponents for tabs

function DashboardTab() {
  return (
    <div>
      <h1 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '32px' }}>Dashboard Overview</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px', marginBottom: '40px' }}>
        <StatCard title="Total Requests" value="1,284" trend="+12%" />
        <StatCard title="Active Schedules" value="45" trend="+5%" />
        <StatCard title="Published Blogs" value="28" trend="0%" />
        <StatCard title="Pending Quotes" value="14" trend="-2%" />
      </div>
      <div style={{ backgroundColor: 'white', padding: '24px', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
        <h2 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '16px' }}>Recent Activity</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ padding: '12px 0', borderBottom: '1px solid #eee' }}>New quote request from John Doe</li>
          <li style={{ padding: '12px 0', borderBottom: '1px solid #eee' }}>Schedule updated: Mombasa Port to Kampala</li>
          <li style={{ padding: '12px 0' }}>Blog post "Customs Regulations 2026" published</li>
        </ul>
      </div>
    </div>
  );
}

function SchedulesTab() {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
        <h1 style={{ fontSize: '32px', fontWeight: 'bold' }}>Manage Schedules</h1>
        <button className="btn btn-primary" style={{ padding: '10px 20px', display: 'flex', gap: '8px', alignItems: 'center' }}>
          <Plus size={18} /> Add Schedule
        </button>
      </div>
      <div style={{ backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', overflow: 'hidden' }}>
        <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
          <thead style={{ backgroundColor: '#f5f5f5', borderBottom: '1px solid #ddd' }}>
            <tr>
              <th style={{ padding: '16px 24px' }}>Route</th>
              <th style={{ padding: '16px 24px' }}>Departure Date</th>
              <th style={{ padding: '16px 24px' }}>Status</th>
              <th style={{ padding: '16px 24px' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid #eee' }}>
              <td style={{ padding: '16px 24px' }}>Mombasa Port &rarr; Kampala</td>
              <td style={{ padding: '16px 24px' }}>July 20, 2026</td>
              <td style={{ padding: '16px 24px' }}><span style={{ backgroundColor: '#e6f7ea', color: '#10893a', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold' }}>Active</span></td>
              <td style={{ padding: '16px 24px' }}>
                <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#0056b3', marginRight: '16px' }}><Edit2 size={18} /></button>
                <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#df3a35' }}><Trash2 size={18} /></button>
              </td>
            </tr>
            <tr style={{ borderBottom: '1px solid #eee' }}>
              <td style={{ padding: '16px 24px' }}>Dar es Salaam &rarr; Kigali</td>
              <td style={{ padding: '16px 24px' }}>July 22, 2026</td>
              <td style={{ padding: '16px 24px' }}><span style={{ backgroundColor: '#e6f7ea', color: '#10893a', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold' }}>Active</span></td>
              <td style={{ padding: '16px 24px' }}>
                <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#0056b3', marginRight: '16px' }}><Edit2 size={18} /></button>
                <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#df3a35' }}><Trash2 size={18} /></button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

function BlogsTab() {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
        <h1 style={{ fontSize: '32px', fontWeight: 'bold' }}>Manage Blogs</h1>
        <button className="btn btn-primary" style={{ padding: '10px 20px', display: 'flex', gap: '8px', alignItems: 'center' }}>
          <Plus size={18} /> New Blog Post
        </button>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px' }}>
        <BlogCard title="How AI is Reshaping Supply Chain Logistics" date="March 15, 2026" status="Published" />
        <BlogCard title="Sustainable Shipping: Our Path to Net Zero" date="March 10, 2026" status="Published" />
        <BlogCard title="Navigating New Cross-Border Customs Regulations" date="March 02, 2026" status="Published" />
        <BlogCard title="Top 5 Tips for Faster Border Clearances" date="Draft" status="Draft" />
      </div>
    </div>
  );
}

function RequestsTab() {
  return (
    <div>
      <h1 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '32px' }}>View Requests & Quotes</h1>
      <div style={{ backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', overflow: 'hidden' }}>
        <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
          <thead style={{ backgroundColor: '#f5f5f5', borderBottom: '1px solid #ddd' }}>
            <tr>
              <th style={{ padding: '16px 24px' }}>Name</th>
              <th style={{ padding: '16px 24px' }}>Email</th>
              <th style={{ padding: '16px 24px' }}>Type</th>
              <th style={{ padding: '16px 24px' }}>Date</th>
              <th style={{ padding: '16px 24px' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid #eee' }}>
              <td style={{ padding: '16px 24px', fontWeight: '500' }}>Alice Smith</td>
              <td style={{ padding: '16px 24px', color: '#666' }}>alice@example.com</td>
              <td style={{ padding: '16px 24px' }}><span style={{ backgroundColor: '#fff3cd', color: '#856404', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold' }}>Quote</span></td>
              <td style={{ padding: '16px 24px' }}>Today, 10:42 AM</td>
              <td style={{ padding: '16px 24px' }}>
                <button className="btn btn-primary" style={{ padding: '6px 12px', fontSize: '13px' }}>Review</button>
              </td>
            </tr>
            <tr style={{ borderBottom: '1px solid #eee' }}>
              <td style={{ padding: '16px 24px', fontWeight: '500' }}>Robert Johnson</td>
              <td style={{ padding: '16px 24px', color: '#666' }}>robert@logistics.com</td>
              <td style={{ padding: '16px 24px' }}><span style={{ backgroundColor: '#e2e3e5', color: '#383d41', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold' }}>Contact</span></td>
              <td style={{ padding: '16px 24px' }}>Yesterday</td>
              <td style={{ padding: '16px 24px' }}>
                <button className="btn btn-primary" style={{ padding: '6px 12px', fontSize: '13px' }}>Review</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Helpers
function navItemStyle(isActive) {
  return {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '16px 24px',
    width: '100%',
    backgroundColor: isActive ? '#222' : 'transparent',
    color: isActive ? 'white' : '#aaa',
    border: 'none',
    borderLeft: isActive ? '4px solid var(--color-primary)' : '4px solid transparent',
    textAlign: 'left',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'all 0.2s',
  };
}

function StatCard({ title, value, trend }) {
  return (
    <div style={{ backgroundColor: 'white', padding: '24px', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
      <p style={{ color: '#666', fontSize: '14px', marginBottom: '8px' }}>{title}</p>
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
        <h3 style={{ fontSize: '32px', fontWeight: 'bold', margin: 0 }}>{value}</h3>
        <span style={{ color: trend.startsWith('+') ? '#10893a' : (trend === '0%' ? '#666' : '#df3a35'), fontWeight: '600', fontSize: '14px' }}>
          {trend}
        </span>
      </div>
    </div>
  );
}

function BlogCard({ title, date, status }) {
  const isPublished = status === 'Published';
  return (
    <div style={{ backgroundColor: 'white', padding: '24px', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
        <span style={{ fontSize: '12px', color: '#888' }}>{date}</span>
        <span style={{ backgroundColor: isPublished ? '#e6f7ea' : '#fff3cd', color: isPublished ? '#10893a' : '#856404', padding: '4px 10px', borderRadius: '12px', fontSize: '11px', fontWeight: 'bold' }}>
          {status}
        </span>
      </div>
      <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '24px', flex: 1 }}>{title}</h3>
      <div style={{ display: 'flex', gap: '12px' }}>
        <button className="btn btn-white" style={{ flex: 1, padding: '8px', border: '1px solid #ddd', fontSize: '13px', display: 'flex', justifyContent: 'center' }}>Edit</button>
        <button className="btn btn-white" style={{ flex: 1, padding: '8px', border: '1px solid #ddd', color: '#df3a35', fontSize: '13px', display: 'flex', justifyContent: 'center' }}>Delete</button>
      </div>
    </div>
  );
}
