import React from 'react';
import { FileText, Download, UploadCloud, Search, Filter } from 'lucide-react';

export default function Documents() {
  const documents = [
    { id: 'DOC-1029', type: 'Commercial Invoice', shipment: 'CRF-89234', date: '2026-06-18', status: 'Verified' },
    { id: 'DOC-1030', type: 'Bill of Lading', shipment: 'CRF-89234', date: '2026-06-18', status: 'Verified' },
    { id: 'DOC-1031', type: 'Certificate of Origin', shipment: 'CRF-89235', date: '2026-06-19', status: 'Pending Review' },
    { id: 'DOC-1032', type: 'Customs Declaration', shipment: 'CRF-89236', date: '2026-06-17', status: 'Verified' },
  ];

  return (
    <div className="bg-surface min-h-[calc(100vh-80px)] py-xl">
      <div className="container">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-xl gap-md animate-fade-in">
          <div>
            <div className="text-secondary font-semibold text-sm tracking-widest uppercase mb-sm">PAPERWORK HUB</div>
            <h1 className="font-headline-lg text-primary mb-xs">Customs Documentation</h1>
            <p className="text-on-surface-variant font-body-md">Manage, upload, and verify all necessary clearance documents.</p>
          </div>
          <button className="btn btn-primary shadow-sm flex items-center gap-sm active:scale-95">
            <UploadCloud size={20} />
            Upload Document
          </button>
        </div>

        <div className="bg-surface-container-lowest rounded-2xl border shadow-sm p-lg mb-xl animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <div className="flex flex-col md:flex-row gap-md mb-lg">
            <div className="flex-1 relative">
              <Search className="absolute left-md top-1/2 -translate-y-1/2 text-on-surface-variant" size={20} />
              <input 
                type="text" 
                className="input-field pl-[48px]" 
                placeholder="Search by Document ID, Shipment, or Type..." 
              />
            </div>
            <button className="btn btn-outline flex items-center gap-sm">
              <Filter size={20} />
              Filters
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left font-body-md">
              <thead className="bg-surface-container-low text-on-surface-variant font-label-sm border-b">
                <tr>
                  <th className="p-md font-semibold">Document Name</th>
                  <th className="p-md font-semibold">Shipment Ref</th>
                  <th className="p-md font-semibold">Upload Date</th>
                  <th className="p-md font-semibold">Status</th>
                  <th className="p-md font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {documents.map((doc, i) => (
                  <tr key={i} className="border-b hover:bg-surface-bright transition-colors">
                    <td className="p-md">
                      <div className="flex items-center gap-sm text-on-surface font-semibold">
                        <FileText className="text-secondary" size={20} />
                        {doc.type}
                        <span className="text-xs text-on-surface-variant font-normal">({doc.id})</span>
                      </div>
                    </td>
                    <td className="p-md font-medium text-primary cursor-pointer hover:underline">{doc.shipment}</td>
                    <td className="p-md text-on-surface-variant">{doc.date}</td>
                    <td className="p-md">
                      <span className={`inline-flex items-center px-sm py-[2px] rounded-full text-xs font-semibold ${
                        doc.status === 'Verified' ? 'bg-[#dcfce7] text-[#166534]' : 'bg-[#fef3c7] text-[#92400e]'
                      }`}>
                        {doc.status}
                      </span>
                    </td>
                    <td className="p-md text-right">
                      <button className="p-sm text-on-surface-variant hover:text-primary hover:bg-surface-variant rounded-full transition-colors" title="Download">
                        <Download size={20} />
                      </button>
                    </td>
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
