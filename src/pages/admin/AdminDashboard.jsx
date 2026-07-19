import React from 'react';
import { Users, Truck, MessageSquare, TrendingUp } from 'lucide-react';

export default function AdminDashboard() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {[
          { title: 'Total Clearances', value: '143.4k', icon: <TrendingUp />, color: 'text-blue-500', bg: 'bg-blue-50' },
          { title: 'Active Trucks', value: '45', icon: <Truck />, color: 'text-green-500', bg: 'bg-green-50' },
          { title: 'Unread Messages', value: '12', icon: <MessageSquare />, color: 'text-orange-500', bg: 'bg-orange-50' },
          { title: 'Admin Users', value: '3', icon: <Users />, color: 'text-purple-500', bg: 'bg-purple-50' },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
            <div className={`p-4 rounded-xl ${stat.bg} ${stat.color}`}>
              {stat.icon}
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">{stat.title}</p>
              <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Welcome back, Admin!</h2>
        <p className="text-gray-600">This is the central control hub. Use the sidebar to manage schedules, view contact messages, handle border declarations, and publish blogs.</p>
      </div>
    </div>
  );
}
