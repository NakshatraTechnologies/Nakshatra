
import React from 'react';
import { ArrowRight, CheckCircle2, ChevronRight, Package, Rocket } from 'lucide-react';
import Reveal from './Reveal';
import { OWN_PRODUCTS, CLIENT_PRODUCTS } from '../constants';

interface ProductsProps {
  onOpenQuote: () => void;
}

const Products: React.FC<ProductsProps> = ({ onOpenQuote }) => {
  return (
    <div className="bg-slate-50 min-h-screen overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-[#020617] overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-slate-900 to-black"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] animate-blob"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-xs font-bold uppercase tracking-[0.2em] mb-8">
              <Package size={14} />
              Products & Solutions
            </div>
            <h1 className="text-5xl md:text-8xl font-bold text-white mb-6 font-display leading-tight tracking-tight">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400">Products</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light mb-12">
              We build powerful software products that solve real-world problems. From our own flagship products to custom solutions built for your business.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Our Own Products */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-200 text-green-700 text-xs font-bold uppercase tracking-[0.2em] mb-4">
                <Rocket size={14} />
                Built by Nakshatra
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 font-display mb-4">Our Flagship Products</h2>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto">Ready-to-deploy solutions built by our team, battle-tested and production-ready.</p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {OWN_PRODUCTS.map((product, index) => (
              <Reveal key={product.id} delay={index * 0.1}>
                <div className="h-full bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 text-white relative overflow-hidden group hover:-translate-y-2 transition-all duration-500 shadow-xl">
                  {/* Glow */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all"></div>
                  
                  <div className="relative z-10">
                    <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform shadow-lg shadow-blue-500/30">
                      <product.icon size={28} />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 font-display">{product.title}</h3>
                    <p className="text-slate-300 text-sm leading-relaxed mb-6">{product.description}</p>
                    
                    <div className="space-y-2.5 mb-8">
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2.5">
                          <CheckCircle2 className="text-green-400 flex-shrink-0" size={16} />
                          <span className="text-slate-200 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <button 
                      onClick={onOpenQuote}
                      className="w-full py-3 bg-blue-600 hover:bg-blue-500 rounded-xl font-bold text-sm transition-colors flex items-center justify-center gap-2 group/btn"
                    >
                      Get Demo <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Products We Build for Clients */}
      <section className="py-24 bg-slate-50 relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-16">
              <span className="text-blue-600 font-bold tracking-widest uppercase mb-3 block text-sm">Custom Solutions</span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 font-display mb-4">Products We Build For You</h2>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto">Tell us your requirements — we engineer custom digital products tailored to your business.</p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CLIENT_PRODUCTS.map((product, index) => (
              <Reveal key={product.id} delay={index * 0.1}>
                <div className="h-full bg-white rounded-2xl p-8 border border-gray-100 hover:border-blue-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <product.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 font-display">{product.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-5">{product.description}</p>
                  
                  <div className="grid grid-cols-2 gap-2">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-1.5">
                        <CheckCircle2 className="text-green-500 flex-shrink-0" size={14} />
                        <span className="text-slate-600 text-xs">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">Have a Product Idea?</h2>
            <p className="text-blue-100 text-lg mb-10 font-light max-w-2xl mx-auto">
              Share your requirements with us and we'll turn your vision into a production-ready product.
            </p>
            <button 
              onClick={onOpenQuote}
              className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-slate-100 transition-all shadow-xl hover:-translate-y-1 inline-flex items-center gap-2 group"
            >
              Discuss Your Idea <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Products;
