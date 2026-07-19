import React, { useState, useEffect } from 'react';
import { Truck, Ship, MapPin, Package, CheckCircle2, Clock, FileText, LogOut, DollarSign, User, Building, Phone, Mail, Settings, ChevronRight, UploadCloud, ArrowRight } from 'lucide-react';
import { supabase } from '../supabase';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      window.location.href = '/admin';
      return;
    }
    
    setUser(session.user);
    
    const { data: profileData } = await supabase
      .from('user_profiles')
      .select('*')
      .eq('id', session.user.id)
      .single();
      
    if (profileData) {
      setProfile(profileData);
    }
    
    setLoading(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = '/admin';
  };

  const shipments = [
    { id: 'CRF-89234', origin: 'Mombasa, KE', destination: 'Kampala, UG', status: 'In Transit', ETA: '2 Days', type: 'Container', progress: 65 },
    { id: 'CRF-89235', origin: 'Kampala, UG', destination: 'Goma, DRC', status: 'Pending Customs', ETA: 'Pending', type: 'Flatbed', progress: 30 },
  ];

  const quotes = [
    { id: 'QT-1024', service: 'Truck Border Clearance', date: '2026-07-15', status: 'Approved', amount: '$450.00' },
    { id: 'QT-1025', service: 'Sea Freight Clearance', date: '2026-07-18', status: 'Processing', amount: 'Pending' },
  ];

  if (loading) {
    return (
      <div className="flex justify-center items-center py-32 bg-[#fafafa]">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent"></div>
      </div>
    );
  }

  const isCompany = profile?.account_type === 'company';

  return (
    <div className="bg-[#fafafa] py-12">
      <div className="container mx-auto px-4">
        
        {/* Welcome Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
          <div>
            <h1 style={{ fontSize: '32px', fontWeight: '800', color: 'var(--color-text-dark)', marginBottom: '8px' }}>
              Welcome back, {profile?.email?.split('@')[0] || 'Client'}!
            </h1>
            <p style={{ fontSize: '16px', color: 'var(--color-text-muted)' }}>
              Manage your clearances, track shipments, and view your documents.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <button className="btn btn-primary shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              New Request
            </button>
            <button onClick={handleLogout} className="btn" style={{ backgroundColor: 'white', color: '#ef4444', border: '1px solid #fecaca', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
              <LogOut size={18} className="inline-block mr-2" /> Sign Out
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Sidebar Profile Card */}
          <div className="lg:col-span-3 space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
              <div className="w-20 h-20 mx-auto rounded-full bg-blue-50 text-primary flex items-center justify-center mb-4 border-4 border-white shadow-md">
                {isCompany ? <Building size={32} /> : <User size={32} />}
              </div>
              <h2 className="text-xl font-bold text-gray-800 mb-1 truncate">{profile?.email?.split('@')[0]}</h2>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-primary mb-6">
                {isCompany ? 'Corporate Account' : 'Individual Account'}
              </span>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-gray-600 bg-gray-50 p-3 rounded-xl border border-gray-100">
                  <Mail size={16} className="text-gray-400 flex-shrink-0" />
                  <span className="truncate">{profile?.email}</span>
                </div>
                <button className="w-full btn" style={{ backgroundColor: '#f8fafc', color: '#475569', border: '1px solid #e2e8f0', padding: '10px' }}>
                  <Settings size={16} className="inline-block mr-2" /> Manage Profile
                </button>
              </div>
            </div>

            {/* Quick Support */}
            <div className="bg-primary rounded-2xl p-6 text-white shadow-lg">
              <h3 className="font-bold text-lg mb-2">Need Help?</h3>
              <p className="text-white/80 text-sm mb-4">Contact your dedicated agent directly.</p>
              <button className="w-full bg-white text-primary font-bold py-3 rounded-xl shadow-sm hover:shadow-md transition-shadow flex items-center justify-center gap-2">
                <Phone size={18} /> Contact Agent
              </button>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-9">
            
            {/* Custom Modern Tabs */}
            <div className="flex overflow-x-auto gap-4 mb-8 border-b border-gray-200 pb-px">
              {[
                { id: 'overview', label: 'Overview' },
                { id: 'shipments', label: 'My Shipments' },
                { id: 'quotes', label: 'Quotes & Invoices' },
                { id: 'documents', label: 'Document Hub' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`font-semibold pb-4 px-2 whitespace-nowrap transition-colors relative ${
                    activeTab === tab.id 
                      ? 'text-primary' 
                      : 'text-gray-500 hover:text-gray-800'
                  }`}
                  style={{ marginBottom: '-1px' }}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-t-full"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Tab Contents */}
            {activeTab === 'overview' && (
              <div className="space-y-8 animate-fade-in">
                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { label: 'Active Clearances', value: '2', icon: Package },
                    { label: 'In Transit', value: '1', icon: Truck },
                    { label: 'Pending Quotes', value: '1', icon: DollarSign },
                    { label: 'Total Shipments', value: '14', icon: Ship },
                  ].map((stat, idx) => (
                    <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col items-start">
                      <div className="w-10 h-10 rounded-lg bg-blue-50 text-primary flex items-center justify-center mb-4">
                        <stat.icon size={20} />
                      </div>
                      <h3 className="text-3xl font-extrabold text-gray-800 mb-1">{stat.value}</h3>
                      <p className="text-sm font-semibold text-gray-500">{stat.label}</p>
                    </div>
                  ))}
                </div>

                {/* Tracking Activity */}
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold text-gray-800">Live Tracking</h2>
                  </div>
                  
                  <div className="space-y-4">
                    {shipments.map((shipment, i) => (
                      <div key={i} className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-5 rounded-xl border border-gray-100 hover:border-blue-200 bg-gray-50/50 hover:bg-blue-50/30 transition-all">
                        <div className="flex-1 w-full mb-4 sm:mb-0">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="font-bold text-gray-800">{shipment.id}</span>
                            <span className={`px-2.5 py-1 rounded-md text-xs font-bold ${
                              shipment.status === 'In Transit' ? 'bg-blue-100 text-blue-700' : 'bg-orange-100 text-orange-700'
                            }`}>
                              {shipment.status}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                            <span>{shipment.origin}</span>
                            <ArrowRight size={14} className="text-gray-300" />
                            <span className="text-gray-800">{shipment.destination}</span>
                          </div>
                        </div>
                        
                        <div className="text-left sm:text-right">
                          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Est. Arrival</p>
                          <p className="font-bold text-gray-800">{shipment.ETA}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'quotes' && (
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 animate-fade-in">
                <h2 className="text-xl font-bold text-gray-800 mb-6">Quotes & Invoices</h2>
                <div className="grid gap-4">
                  {quotes.map((quote, idx) => (
                    <div key={idx} className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-5 rounded-xl border border-gray-100 hover:border-gray-300 transition-colors bg-white">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${quote.status === 'Approved' ? 'bg-green-50 text-green-600' : 'bg-gray-50 text-gray-500'}`}>
                          <DollarSign size={20} strokeWidth={2.5} />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-800">{quote.service}</h3>
                          <p className="text-sm text-gray-500 mt-1">Ref: {quote.id} • {quote.date}</p>
                        </div>
                      </div>
                      <div className="mt-4 sm:mt-0 text-right w-full sm:w-auto flex flex-row sm:flex-col justify-between sm:justify-end items-center sm:items-end">
                        <span className={`px-2.5 py-1 rounded-md text-xs font-bold mb-0 sm:mb-2 ${quote.status === 'Approved' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}`}>
                          {quote.status}
                        </span>
                        <p className="text-lg font-bold text-gray-800">{quote.amount}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'documents' && (
              <div className="bg-white rounded-2xl p-12 shadow-sm border border-gray-100 text-center animate-fade-in">
                <div className="w-20 h-20 bg-blue-50 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <UploadCloud size={32} />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-3">Secure Document Hub</h2>
                <p className="text-gray-500 mb-8 max-w-md mx-auto">
                  Upload your Bills of Lading, Commercial Invoices, and Packing Lists here to securely transmit them to your clearance agent.
                </p>
                <button className="btn btn-primary px-8 py-3 shadow-md hover:-translate-y-1 transition-transform">
                  Select Files to Upload
                </button>
                <p className="mt-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Supports PDF, JPG, PNG (Max 10MB)</p>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}
