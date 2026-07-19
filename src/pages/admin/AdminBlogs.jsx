import React, { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2, CheckCircle, XCircle } from 'lucide-react';
import { supabase } from '../../supabase';

export default function AdminBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ id: null, title: '', content: '', cover_image_url: '', is_published: false });

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const { data, error } = await supabase.from('blog_posts').select('*').order('created_at', { ascending: false });
      if (error) throw error;
      setBlogs(data || []);
    } catch (err) {
      console.error('Error fetching blogs:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      const slug = formData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
      const payload = {
        title: formData.title,
        content: formData.content,
        cover_image_url: formData.cover_image_url,
        is_published: formData.is_published,
        slug: slug,
        published_at: formData.is_published ? new Date().toISOString() : null
      };

      if (formData.id) {
        const { error } = await supabase.from('blog_posts').update(payload).eq('id', formData.id);
        if (error) throw error;
      } else {
        const { error } = await supabase.from('blog_posts').insert([payload]);
        if (error) throw error;
      }
      setIsEditing(false);
      fetchBlogs();
    } catch (err) {
      alert('Error saving blog: ' + err.message);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this blog?')) return;
    try {
      const { error } = await supabase.from('blog_posts').delete().eq('id', id);
      if (error) throw error;
      fetchBlogs();
    } catch (err) {
      alert('Error deleting blog: ' + err.message);
    }
  };

  const togglePublish = async (blog) => {
    try {
      const newStatus = !blog.is_published;
      const { error } = await supabase.from('blog_posts').update({ 
        is_published: newStatus,
        published_at: newStatus ? new Date().toISOString() : null
      }).eq('id', blog.id);
      if (error) throw error;
      fetchBlogs();
    } catch (err) {
      alert('Error updating status: ' + err.message);
    }
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Blog Management</h2>
        {!isEditing && (
          <button onClick={() => { setFormData({ id: null, title: '', content: '', cover_image_url: '', is_published: false }); setIsEditing(true); }} className="btn btn-primary flex items-center gap-2 px-4 py-2">
            <Plus size={18} /> New Blog Post
          </button>
        )}
      </div>

      {isEditing ? (
        <form onSubmit={handleSave} className="bg-gray-50 p-6 rounded-xl border border-gray-200">
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Title</label>
            <input required type="text" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} className="w-full p-3 rounded-lg border border-gray-300" placeholder="Post Title" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Cover Image URL</label>
            <input type="url" value={formData.cover_image_url} onChange={e => setFormData({...formData, cover_image_url: e.target.value})} className="w-full p-3 rounded-lg border border-gray-300" placeholder="https://example.com/image.jpg" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Content (HTML Supported)</label>
            <textarea required rows="10" value={formData.content} onChange={e => setFormData({...formData, content: e.target.value})} className="w-full p-3 rounded-lg border border-gray-300" placeholder="<p>Write your blog content here...</p>"></textarea>
          </div>
          <div className="mb-6 flex items-center gap-2">
            <input type="checkbox" id="publish" checked={formData.is_published} onChange={e => setFormData({...formData, is_published: e.target.checked})} className="w-4 h-4" />
            <label htmlFor="publish" className="font-medium">Publish immediately</label>
          </div>
          <div className="flex gap-4">
            <button type="submit" className="btn btn-primary px-6 py-2">Save Blog</button>
            <button type="button" onClick={() => setIsEditing(false)} className="btn bg-gray-200 text-gray-800 px-6 py-2">Cancel</button>
          </div>
        </form>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="p-4 font-semibold text-gray-600">Title</th>
                <th className="p-4 font-semibold text-gray-600">Status</th>
                <th className="p-4 font-semibold text-gray-600">Date</th>
                <th className="p-4 font-semibold text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr><td colSpan="4" className="p-4 text-center text-gray-500">Loading...</td></tr>
              ) : blogs.length === 0 ? (
                <tr><td colSpan="4" className="p-4 text-center text-gray-500">No blogs found. Create one!</td></tr>
              ) : (
                blogs.map(blog => (
                  <tr key={blog.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="p-4 font-medium text-gray-800">{blog.title}</td>
                    <td className="p-4">
                      <button onClick={() => togglePublish(blog)} className={`px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 ${blog.is_published ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                        {blog.is_published ? <CheckCircle size={14} /> : <XCircle size={14} />}
                        {blog.is_published ? 'Published' : 'Draft'}
                      </button>
                    </td>
                    <td className="p-4 text-gray-500 text-sm">
                      {new Date(blog.created_at).toLocaleDateString()}
                    </td>
                    <td className="p-4 flex gap-3">
                      <button onClick={() => { setFormData(blog); setIsEditing(true); }} className="text-blue-600 hover:text-blue-800"><Edit2 size={18} /></button>
                      <button onClick={() => handleDelete(blog.id)} className="text-red-500 hover:text-red-700"><Trash2 size={18} /></button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
