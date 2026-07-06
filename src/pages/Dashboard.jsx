import React, { useState } from 'react';
import { Truck, Ship, MapPin, Package, CheckCircle2, Clock } from 'lucide-react';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  // Dummy shipments
  const shipments = [
    { id: 'CRF-89234', origin: 'Mombasa, KE', destination: 'Kampala, UG', status: 'In Transit', ETA: '2 Days', type: 'Container' },
    { id: 'CRF-89235', origin: 'Kampala, UG', destination: 'Goma, DRC', status: 'Pending Customs', ETA: 'Pending', type: 'Flatbed' },
    { id: 'CRF-89236', origin: 'Entebbe, UG', destination: 'Kinshasa, DRC', status: 'Cleared', ETA: '5 Days', type: 'Air Freight' },
  ];

  return (
    <div className="bg-surface min-h-[calc(100vh-80px)] py-xl">
      <div className="container">
        
        <div className="flex justify-between items-center mb-xl">
          <div>
            <h1 className="font-headline-lg text-primary mb-xs">Partner Dashboard</h1>
            <p className="text-on-surface-variant font-body-md">Track your border declarations, truck movements, and sea container clearances.</p>
          </div>
          <button className="btn btn-primary shadow-sm active:scale-95">
            + Declare Shipment
          </button>
        </div>

        <div className="flex gap-md border-b mb-lg overflow-x-auto pb-sm">
          <button 
            onClick={() => setActiveTab('overview')}
            className={`font-title-md pb-xs px-sm ${activeTab === 'overview' ? 'text-primary border-b-2 border-primary' : 'text-on-surface-variant'}`}
          >
            Overview
          </button>
          <button 
            onClick={() => setActiveTab('active')}
            className={`font-title-md pb-xs px-sm ${activeTab === 'active' ? 'text-primary border-b-2 border-primary' : 'text-on-surface-variant'}`}
          >
            Active Tracks
          </button>
          <button 
            onClick={() => setActiveTab('shipboarders')}
            className={`font-title-md pb-xs px-sm ${activeTab === 'shipboarders' ? 'text-primary border-b-2 border-primary' : 'text-on-surface-variant'}`}
          >
            Shipboarders
          </button>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-md mb-xl">
          {[
              { label: 'Active Declarations', value: '14', icon: Package, color: 'text-primary' },
              { label: 'Trucks in Transit', value: '8', icon: Truck, color: 'text-secondary' },
              { label: 'Pending Clearance', value: '3', icon: Clock, color: 'text-[#d97706]' },
              { label: 'Containers at Port', value: '4', icon: Ship, color: 'text-[#0284c7]' },
          ].map((stat, idx) => (
            <div key={idx} className="bg-surface-container-lowest p-md rounded-xl border shadow-sm flex items-center justify-between">
              <div>
                <p className="font-label-sm text-on-surface-variant">{stat.label}</p>
                <p className="font-headline-lg text-on-surface">{stat.value}</p>
              </div>
              <div className={`p-sm rounded-full bg-surface-container-low ${stat.color}`}>
                <stat.icon size={24} />
              </div>
            </div>
          ))}
        </div>

        {/* Live Shipments List */}
        <div className="bg-surface-container-lowest rounded-xl border shadow-sm overflow-hidden">
          <div className="p-md border-b bg-surface-bright flex justify-between items-center">
            <h2 className="font-title-md text-on-surface">Recent Tracking Activity</h2>
            <button className="btn btn-ghost text-primary text-sm py-xs px-sm">View All</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left font-body-md">
              <thead className="bg-surface-container-low text-on-surface-variant font-label-sm border-b">
                <tr>
                  <th className="p-md font-semibold">Waybill / ID</th>
                  <th className="p-md font-semibold">Origin</th>
                  <th className="p-md font-semibold">Destination</th>
                  <th className="p-md font-semibold">Status</th>
                  <th className="p-md font-semibold">ETA</th>
                </tr>
              </thead>
              <tbody>
                {shipments.map((shipment, i) => (
                  <tr key={i} className="border-b hover:bg-surface-bright transition-colors cursor-pointer">
                    <td className="p-md font-semibold text-primary">{shipment.id}</td>
                    <td className="p-md text-on-surface-variant flex items-center gap-xs">
                      <MapPin size={16} /> {shipment.origin}
                    </td>
                    <td className="p-md text-on-surface flex items-center gap-xs">
                      <MapPin size={16} className="text-secondary" /> {shipment.destination}
                    </td>
                    <td className="p-md">
                      <span className={`inline-flex items-center gap-xs px-sm py-xs rounded-full text-xs font-semibold ${
                        shipment.status === 'Cleared' ? 'bg-[#dcfce7] text-[#166534]' :
                        shipment.status === 'In Transit' ? 'bg-[#e0f2fe] text-[#0369a1]' :
                        'bg-[#fef3c7] text-[#92400e]'
                      }`}>
                        {shipment.status === 'Cleared' && <CheckCircle2 size={12} />}
                        {shipment.status === 'In Transit' && <Truck size={12} />}
                        {shipment.status === 'Pending Customs' && <Clock size={12} />}
                        {shipment.status}
                      </span>
                    </td>
                    <td className="p-md text-on-surface-variant font-medium">{shipment.ETA}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
