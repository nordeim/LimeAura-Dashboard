// src/components/showcase/BrandPillShowcase.tsx
import { Card } from '@/components/ui/Card/Card';
import { PillBrand } from '@/components/ui/Pill/PillBrand';
import { SectionHeader } from '@/components/layout/SectionHeader';
import { CreditCard, DollarSign, Zap, Lock } from 'lucide-react';

export function BrandPillShowcase() {
  return (
    <Card>
      <SectionHeader 
        title="Brand Pills" 
        subtitle="Payment methods and service integrations" 
      />
      
      <div className="space-y-6">
        <div>
          <h4 className="font-medium mb-3">Payment Methods</h4>
          <div className="flex flex-wrap gap-3">
            <PillBrand 
              logo={<CreditCard className="text-blue-600" size={20} />} 
              name="Visa" 
            />
            <PillBrand 
              logo={<CreditCard className="text-gray-800" size={20} />} 
              name="Mastercard" 
            />
            <PillBrand 
              logo={<CreditCard className="text-purple-700" size={20} />} 
              name="Amex" 
            />
            <PillBrand 
              logo={<Zap className="text-yellow-500" size={20} />} 
              name="PayPal" 
            />
          </div>
        </div>
        
        <div>
          <h4 className="font-medium mb-3">Services</h4>
          <div className="flex flex-wrap gap-3">
            <PillBrand 
              logo={<DollarSign className="text-green-600" size={20} />} 
              name="Stripe" 
            />
            <PillBrand 
              logo={<Lock className="text-blue-500" size={20} />} 
              name="Auth0" 
            />
            <PillBrand 
              logo={<Zap className="text-purple-600" size={20} />} 
              name="Webflow" 
            />
          </div>
        </div>
        
        <div>
          <h4 className="font-medium mb-3">Interactive Pills</h4>
          <div className="flex flex-wrap gap-3">
            <button 
              className="bg-[var(--surface-primary)] rounded-[var(--radius-pill)] py-2 px-4 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all duration-200 ease-out border-2 border-[var(--accent-primary)]"
            >
              <div className="flex items-center gap-2">
                <div className="w-5 h-5">
                  <CreditCard className="text-[var(--accent-primary)]" size={20} />
                </div>
                <span className="text-sm font-medium text-[var(--accent-primary)]">Add Card</span>
              </div>
            </button>
            
            <button 
              className="bg-[var(--surface-primary)] rounded-[var(--radius-pill)] py-2 px-4 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all duration-200 ease-out border-2 border-[var(--border-subtle)] hover:border-[var(--accent-secondary)]"
            >
              <div className="flex items-center gap-2">
                <div className="w-5 h-5">
                  <Zap className="text-[var(--accent-secondary)]" size={20} />
                </div>
                <span className="text-sm font-medium text-[var(--text-primary)]">Connect Service</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
}
