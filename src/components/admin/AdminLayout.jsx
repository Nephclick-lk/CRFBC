import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Calendar, MessageSquare, Truck, FileText, Menu, X, LogOut, Settings, Eye, EyeOff } from 'lucide-react';

export default function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const location = useLocation();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'arthurnkongolo@gmail.com' && password === 'carfour') {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Invalid email or password');
    }
  };

  if (!isAuthenticated) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f4f6f8' }}>
        <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '16px', boxShadow: '0 10px 40px rgba(0,0,0,0.05)', width: '100%', maxWidth: '400px' }}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#333' }}>Admin Login</h1>
            <p style={{ color: '#666' }}>Sign in to the Carefour control panel</p>
          </div>
          
          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {error && <div style={{ color: '#df3a35', backgroundColor: '#df3a3515', padding: '12px', borderRadius: '8px', fontSize: '14px', textAlign: 'center' }}>{error}</div>}
            
            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '8px', color: '#333' }}>Email</label>
              <input 
                type="email" 
                required 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #ddd', outline: 'none' }} 
              />
            </div>
            
            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '8px', color: '#333' }}>Password</label>
              <div style={{ position: 'relative' }}>
                <input 
                  type={showPassword ? "text" : "password"}
                  required 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{ width: '100%', padding: '12px 16px', paddingRight: '48px', borderRadius: '8px', border: '1px solid #ddd', outline: 'none' }} 
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: '#666' }}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>
            
            <button type="submit" style={{ backgroundColor: 'var(--color-primary)', color: 'white', padding: '14px', fontSize: '16px', borderRadius: '8px', border: 'none', fontWeight: '600', cursor: 'pointer', marginTop: '8px' }}>
              Login
            </button>
            <Link to="/" style={{ display: 'block', textAlign: 'center', color: '#666', fontSize: '14px', marginTop: '16px', textDecoration: 'underline' }}>
              Return to Website
            </Link>
          </form>
        </div>
      </div>
    );
  }

  const navItems = [
    { name: 'Dashboard', path: '/admin', icon: <LayoutDashboard size={20} /> },
    { name: 'Schedules', path: '/admin/schedules', icon: <Calendar size={20} /> },
    { name: 'Messages', path: '/admin/messages', icon: <MessageSquare size={20} /> },
    { name: 'Border Clearance', path: '/admin/border', icon: <Truck size={20} /> },
    { name: 'Blogs', path: '/admin/blogs', icon: <FileText size={20} /> }
  ];

  return (
    <div className="flex h-screen bg-gray-50 font-sans">
      
      {/* Sidebar */}
      <aside 
        className={`bg-white shadow-xl flex flex-col transition-all duration-300 ${sidebarOpen ? 'w-64' : 'w-20'} hidden md:flex`}
        style={{ zIndex: 40 }}
      >
        <div className="h-20 flex items-center justify-center border-b border-gray-100">
          <Link to="/" className="flex items-center gap-2">
            <img src="/icon.png" alt="Logo" className={`${sidebarOpen ? 'w-10' : 'w-8'} transition-all`} />
            {sidebarOpen && <span className="font-bold text-lg text-gray-800">Admin</span>}
          </Link>
        </div>
        
        <nav className="flex-1 py-6 px-3 flex flex-col gap-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path || (item.path !== '/admin' && location.pathname.startsWith(item.path));
            return (
              <Link 
                key={item.name} 
                to={item.path}
                className={`flex items-center gap-3 px-3 py-3 rounded-lg transition-colors ${isActive ? 'bg-primary text-white shadow-md' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'}`}
                title={!sidebarOpen ? item.name : ""}
              >
                <div className={`${!sidebarOpen && 'mx-auto'}`}>{item.icon}</div>
                {sidebarOpen && <span className="font-medium">{item.name}</span>}
              </Link>
            )
          })}
        </nav>

        <div className="p-4 border-t border-gray-100">
          <button onClick={() => setIsAuthenticated(false)} className="flex items-center gap-3 text-red-500 hover:bg-red-50 p-3 rounded-lg w-full transition-colors">
            <LogOut size={20} className={`${!sidebarOpen && 'mx-auto'}`} />
            {sidebarOpen && <span className="font-medium">Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        
        {/* Topbar */}
        <header className="h-20 bg-white shadow-sm flex items-center justify-between px-6 z-30">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="text-gray-500 hover:bg-gray-100 p-2 rounded-lg transition-colors hidden md:block"
            >
              <Menu size={24} />
            </button>
            {/* Mobile menu button */}
            <button className="md:hidden text-gray-500 hover:bg-gray-100 p-2 rounded-lg">
              <Menu size={24} />
            </button>
            <h1 className="text-xl font-bold text-gray-800 capitalize">
              {location.pathname === '/admin' ? 'Dashboard Overview' : location.pathname.split('/').pop()}
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-gray-500 hover:bg-gray-100 p-2 rounded-lg transition-colors">
              <Settings size={22} />
            </button>
            <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg shadow-md cursor-pointer">
              A
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-6">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
