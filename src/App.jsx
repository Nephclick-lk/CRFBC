import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Quotes from './pages/Quotes';
import Documents from './pages/Documents';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import Services from './pages/Services';
import Solutions from './pages/Solutions';
import Tracking from './pages/Tracking';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

import AdminLayout from './components/admin/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminSchedules from './pages/admin/AdminSchedules';
import AdminMessages from './pages/admin/AdminMessages';
import AdminBorder from './pages/admin/AdminBorder';
import AdminBlogs from './pages/admin/AdminBlogs';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="quotes" element={<Quotes />} />
          <Route path="documents" element={<Documents />} />
          <Route path="services" element={<Services />} />
          <Route path="solutions" element={<Solutions />} />
          <Route path="tracking" element={<Tracking />} />
        </Route>
        
        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="schedules" element={<AdminSchedules />} />
          <Route path="messages" element={<AdminMessages />} />
          <Route path="border" element={<AdminBorder />} />
          <Route path="blogs" element={<AdminBlogs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
