import React from 'react';
import { Calculator, Shield, Clock } from 'lucide-react';

export default function Quotes() {
  return (
    <div className="bg-surface min-h-[calc(100vh-80px)] py-xl">
      <div className="container max-w-[1000px]">
        <div className="text-center mb-xl animate-fade-in">
          <h1 className="font-display-lg text-primary mb-sm">Request a Freight Quote</h1>
          <p className="font-body-lg text-on-surface-variant max-w-[600px] mx-auto">
            Get transparent pricing for truck border clearance, sea container customs processing, and freight forwarding across East Africa. No hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-xl">
          <div className="md:col-span-8 bg-surface-container-lowest p-xl rounded-2xl border shadow-md animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <form className="flex flex-col gap-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                <div>
                  <label className="label">Origin City / Port</label>
                  <input type="text" className="input-field" placeholder="e.g. Mombasa, Kenya" />
                </div>
                <div>
                  <label className="label">Destination City</label>
                  <input type="text" className="input-field" placeholder="e.g. Goma, DRC" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                <div>
                  <label className="label">Freight Type</label>
                  <select className="input-field" defaultValue="">
                    <option value="" disabled>Select type</option>
                    <option value="container">FCL Container (20ft / 40ft)</option>
                    <option value="lcl">LCL (Less than Container Load)</option>
                    <option value="flatbed">Flatbed Truck</option>
                    <option value="air">Air Freight</option>
                  </select>
                </div>
                <div>
                  <label className="label">Estimated Weight (kg)</label>
                  <input type="number" className="input-field" placeholder="e.g. 15000" />
                </div>
              </div>

              <div>
                <label className="label">Customs Clearance Required?</label>
                <div className="flex gap-md mt-sm">
                  <label className="flex items-center gap-xs font-body-md text-on-surface cursor-pointer">
                    <input type="radio" name="customs" className="w-4 h-4 text-primary accent-primary" defaultChecked /> Yes, both borders
                  </label>
                  <label className="flex items-center gap-xs font-body-md text-on-surface cursor-pointer">
                    <input type="radio" name="customs" className="w-4 h-4 text-primary accent-primary" /> Destination only
                  </label>
                  <label className="flex items-center gap-xs font-body-md text-on-surface cursor-pointer">
                    <input type="radio" name="customs" className="w-4 h-4 text-primary accent-primary" /> No
                  </label>
                </div>
              </div>
              
              <div>
                <label className="label">Additional Information</label>
                <textarea className="input-field min-h-[100px]" placeholder="Describe your cargo, special handling requirements, or hazardous materials..."></textarea>
              </div>

              <div className="mt-sm">
                <button type="button" className="btn btn-primary w-full text-[18px] py-md">Calculate Estimated Quote</button>
              </div>
            </form>
          </div>

          <div className="md:col-span-4 flex flex-col gap-lg animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="bg-primary-fixed p-lg rounded-xl border border-primary-fixed-dim">
              <Calculator className="text-primary mb-sm" size={32} />
              <h3 className="font-title-md text-on-primary-fixed mb-xs">Smart Pricing</h3>
              <p className="font-body-md text-on-primary-fixed-variant">Our algorithms calculate real-time border tariffs and transport costs to ensure you get the most accurate quote.</p>
            </div>
            
            <div className="bg-surface-container-low p-lg rounded-xl border">
              <Shield className="text-secondary mb-sm" size={32} />
              <h3 className="font-title-md text-on-surface mb-xs">Guaranteed Rates</h3>
              <p className="font-body-md text-on-surface-variant">Quotes are locked in for 14 days. We absorb minor fluctuations in border transit fees.</p>
            </div>

            <div className="bg-surface-container-low p-lg rounded-xl border">
              <Clock className="text-primary mb-sm" size={32} />
              <h3 className="font-title-md text-on-surface mb-xs">Fast Response</h3>
              <p className="font-body-md text-on-surface-variant">Complex multi-modal quotes are manually reviewed and returned within 2 hours by our logistics experts.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
