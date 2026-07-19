-- =====================================================================================
-- PHASE 1: SUPABASE SQL SCHEMA FOR ADMIN DASHBOARD
-- Run this in your Supabase SQL Editor to create all necessary tables.
-- =====================================================================================

-- 1. SCHEDULE MANAGEMENT
-- Table for Admin's Available Times
CREATE TABLE IF NOT EXISTS public.admin_availability (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    day_of_week VARCHAR(20) NOT NULL, -- e.g., 'Monday', 'Tuesday'
    start_time TIME NOT NULL,
    end_time TIME NOT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Table for Received Appointments / Booked Schedules
CREATE TABLE IF NOT EXISTS public.appointments (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    client_name VARCHAR(255) NOT NULL,
    client_email VARCHAR(255) NOT NULL,
    appointment_date DATE NOT NULL,
    appointment_time TIME NOT NULL,
    status VARCHAR(50) DEFAULT 'pending', -- pending, confirmed, cancelled
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. CONTACT MESSAGES
-- Table for messages received from the Contact Form
CREATE TABLE IF NOT EXISTS public.contact_messages (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    sender_name VARCHAR(255) NOT NULL,
    sender_email VARCHAR(255) NOT NULL,
    subject VARCHAR(255),
    message TEXT NOT NULL,
    is_read BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. BORDER CLEARANCE MANAGEMENT
-- Table for Border Users
CREATE TABLE IF NOT EXISTS public.border_users (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_name VARCHAR(255) NOT NULL,
    company_name VARCHAR(255),
    role VARCHAR(100), -- e.g., 'Agent', 'Inspector'
    status VARCHAR(50) DEFAULT 'active',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Table for Cleared Posts
CREATE TABLE IF NOT EXISTS public.border_posts (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    post_name VARCHAR(255) NOT NULL,
    location VARCHAR(255),
    status VARCHAR(50) DEFAULT 'cleared',
    cleared_by UUID REFERENCES public.border_users(id),
    cleared_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Table for Trucks Declared
CREATE TABLE IF NOT EXISTS public.trucks_declared (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    license_plate VARCHAR(100) NOT NULL,
    driver_name VARCHAR(255),
    cargo_details TEXT,
    declaration_status VARCHAR(50) DEFAULT 'pending', -- pending, cleared, rejected
    border_post_id UUID REFERENCES public.border_posts(id),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Table for Ships Declared
CREATE TABLE IF NOT EXISTS public.ships_declared (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    vessel_name VARCHAR(255) NOT NULL,
    imo_number VARCHAR(100) UNIQUE,
    cargo_details TEXT,
    declaration_status VARCHAR(50) DEFAULT 'pending',
    port_of_arrival VARCHAR(255),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 4. BLOG MANAGEMENT
-- Table for Blog Categories
CREATE TABLE IF NOT EXISTS public.blog_categories (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name VARCHAR(255) UNIQUE NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Table for Blog Posts (HTML content for professional text editor)
CREATE TABLE IF NOT EXISTS public.blog_posts (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    category_id UUID REFERENCES public.blog_categories(id) ON DELETE SET NULL,
    content TEXT NOT NULL, -- Rich HTML content from the text editor
    cover_image_url VARCHAR(500),
    is_published BOOLEAN DEFAULT FALSE,
    author_id UUID REFERENCES auth.users(id), -- Assuming Admin is authenticated
    published_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- =====================================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- =====================================================================================
ALTER TABLE public.admin_availability ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.appointments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.border_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.border_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.trucks_declared ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ships_declared ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

-- Allow public read access to availability, blog categories, and published blogs
CREATE POLICY "Public can view availability" ON public.admin_availability FOR SELECT USING (is_active = true);
CREATE POLICY "Public can view blog categories" ON public.blog_categories FOR SELECT USING (true);
CREATE POLICY "Public can view published blogs" ON public.blog_posts FOR SELECT USING (is_published = true);

-- Allow public to insert appointments and contact messages
CREATE POLICY "Public can insert appointments" ON public.appointments FOR INSERT WITH CHECK (true);
CREATE POLICY "Public can insert contact messages" ON public.contact_messages FOR INSERT WITH CHECK (true);

-- Allow Admins (authenticated users) to manage everything
CREATE POLICY "Admins manage availability" ON public.admin_availability FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admins manage appointments" ON public.appointments FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admins manage contact messages" ON public.contact_messages FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admins manage border users" ON public.border_users FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admins manage border posts" ON public.border_posts FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admins manage trucks" ON public.trucks_declared FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admins manage ships" ON public.ships_declared FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admins manage blog categories" ON public.blog_categories FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admins manage blog posts" ON public.blog_posts FOR ALL USING (auth.role() = 'authenticated');
