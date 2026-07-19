-- =====================================================================================
-- SQL SCHEMA FOR USER PROFILES
-- Run this in your Supabase SQL Editor
-- =====================================================================================

-- 1. Create the user_profiles table to store extra data collected during sign-up
CREATE TABLE IF NOT EXISTS public.user_profiles (
    id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    account_type VARCHAR(50) NOT NULL CHECK (account_type IN ('company', 'individual')),
    how_heard VARCHAR(255),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Enable Row Level Security (RLS)
ALTER TABLE public.user_profiles ENABLE ROW LEVEL SECURITY;

-- 3. Setup RLS Policies
-- Users can only view their own profile
CREATE POLICY "Users can view own profile" ON public.user_profiles
    FOR SELECT USING (auth.uid() = id);

-- Users can insert their own profile upon signing up
CREATE POLICY "Users can insert own profile" ON public.user_profiles
    FOR INSERT WITH CHECK (auth.uid() = id);

-- Users can update their own profile
CREATE POLICY "Users can update own profile" ON public.user_profiles
    FOR UPDATE USING (auth.uid() = id);

-- (Optional) If you want admins to be able to read all profiles, uncomment this:
-- CREATE POLICY "Admins can view all profiles" ON public.user_profiles
--     FOR SELECT USING (auth.email() = 'arthurnkongolo@gmail.com');
