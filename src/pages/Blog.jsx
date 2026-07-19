import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import { supabase } from '../supabase';

export default function Blog() {
  const { t, i18n } = useTranslation();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('is_published', true)
        .order('published_at', { ascending: false });

      if (error) throw error;
      setBlogs(data || []);
    } catch (err) {
      console.error('Error fetching blogs:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '80vh' }}>
      <section style={{ backgroundColor: 'var(--color-bg-dark)', color: 'white', padding: '120px 0 80px', textAlign: 'center' }}>
        <div className="container px-4">
          <div style={{ color: 'var(--color-primary)', fontWeight: '600', fontSize: '14px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>
            {t('BLOGS_SUBTITLE')}
          </div>
          <h1 className="page-title" style={{ marginBottom: '24px' }}>{t('Our Latest News & Insights')}</h1>
          <p style={{ fontSize: '18px', maxWidth: '700px', margin: '0 auto', opacity: 0.9, lineHeight: '1.6' }}>
            {t('Stay updated with the latest in cross-border logistics.')}
          </p>
        </div>
      </section>

      <section style={{ padding: '80px 0', backgroundColor: '#f9f9f9' }}>
        <div className="container px-4">
          {loading ? (
            <div className="text-center py-20 text-gray-500">Loading blogs...</div>
          ) : blogs.length === 0 ? (
            <div className="text-center py-20 text-gray-500">
              No articles published yet. Check back soon!
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog) => (
                <div key={blog.id} className="blog-card flex flex-col h-full bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                  {blog.cover_image_url && (
                    <div className="relative overflow-hidden h-48">
                      <img src={blog.cover_image_url} alt={blog.title} className="w-full h-full object-cover transition-transform hover:scale-105 duration-300" />
                    </div>
                  )}
                  <div className="blog-content p-6 flex flex-col flex-1">
                    <div className="blog-date text-sm text-gray-500 mb-3">
                      {new Date(blog.published_at || blog.created_at).toLocaleDateString(i18n.language === 'fr' ? 'fr-FR' : 'en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                    <h3 className="blog-title text-xl font-bold text-gray-800 mb-4 line-clamp-2">{blog.title}</h3>
                    {/* Render a snippet of the HTML content */}
                    <div 
                      className="text-gray-600 mb-6 line-clamp-3 text-sm"
                      dangerouslySetInnerHTML={{ __html: blog.content.substring(0, 150) + '...' }}
                    />
                    <div className="mt-auto">
                      <button className="flex items-center text-primary font-semibold hover:text-red-700 transition-colors">
                        {t('Read More')} <ArrowRight size={16} className="ml-2"/>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
