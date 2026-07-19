-- Run this script in your Supabase SQL Editor AFTER the user has signed up or been invited.

-- 1. Create the 'Super Admin' role if it doesn't already exist
INSERT INTO public.roles (name, description)
VALUES ('Super Admin', 'Has full access to all dashboard features')
ON CONFLICT (name) DO NOTHING;

-- 2. Grant full admin access to the specific email
-- This finds the user in the secure auth.users table and links them to the public.admin_users table
INSERT INTO public.admin_users (id, role_id, email, first_name, last_name, is_active)
SELECT 
    au.id,
    r.id,
    au.email,
    'Arthur',
    'Nkongolo',
    true
FROM auth.users au
CROSS JOIN public.roles r
WHERE au.email = 'arthurnkongolo@gmail.com' AND r.name = 'Super Admin'
ON CONFLICT (id) DO UPDATE 
SET role_id = EXCLUDED.role_id, is_active = EXCLUDED.is_active;
