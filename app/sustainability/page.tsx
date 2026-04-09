/**
 * Nove Pelle Sustainability Page
 * Materials, certifications, and environmental commitment
 */

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function SustainabilityPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cream via-beige-light to-cream-light py-20">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 text-center">
          <div className="inline-block px-4 py-2 bg-terracotta/10 border border-terracotta/20 rounded-full mb-6">
            <span className="text-xs uppercase tracking-widest font-semibold text-terracotta">Sustainability</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-forest mb-6">
            Every Step Counts
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our commitment to the planet goes beyond words. Every product we create is designed
            to minimize environmental impact while maximizing style and durability.
          </p>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-cream rounded-2xl">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full flex flex-col items-center justify-center bg-terracotta text-white">
              <span className="text-4xl font-extrabold leading-none">72</span>
              <span className="text-xs font-bold uppercase tracking-wide">% AVG</span>
            </div>
            <h3 className="text-2xl font-bold text-forest mb-2">Recycled Content</h3>
            <p className="text-gray-600">
              Average across our entire product range. Every item displays its individual percentage.
            </p>
          </div>

          <div className="text-center p-8 bg-cream rounded-2xl">
            <div className="text-6xl mb-4">♻️</div>
            <h3 className="text-2xl font-bold text-forest mb-2">100%</h3>
            <p className="text-gray-600">
              Traceability on all materials. From source to sale, every step is documented and verified.
            </p>
          </div>

          <div className="text-center p-8 bg-cream rounded-2xl">
            <div className="text-6xl mb-4">🌊</div>
            <h3 className="text-2xl font-bold text-forest mb-2">2.4 Tonnes</h3>
            <p className="text-gray-600">
              Ocean plastic removed from waterways per month through our partnership programs.
            </p>
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="bg-cream py-20">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-forest mb-4">Our Materials</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every material is carefully selected for its environmental credentials and performance
            </p>
          </div>

          <div className="space-y-12">
            {/* Recycled Ocean Plastic */}
            <div className="bg-white rounded-2xl p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-block px-4 py-2 bg-terracotta/10 border border-terracotta/20 rounded-full mb-4">
                  <span className="text-xs uppercase tracking-widest font-semibold text-terracotta">Primary Material</span>
                </div>
                <h3 className="text-3xl font-bold text-forest mb-4">Recycled Ocean Plastic</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We partner with coastal cleanup programs across the globe to source plastic waste
                  recovered from oceans and waterways. This material is cleaned, processed, and transformed
                  into high-performance textile fibers.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-forest mt-1">✓</span>
                    <span>Removes harmful plastic from marine ecosystems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-forest mt-1">✓</span>
                    <span>Durable, water-resistant, and breathable</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-forest mt-1">✓</span>
                    <span>Certified by Ocean Bound Plastic (OBP) program</span>
                  </li>
                </ul>
              </div>
              <div className="aspect-square bg-gradient-to-br from-cream to-beige rounded-xl flex items-center justify-center">
                <div className="text-9xl opacity-30">🌊</div>
              </div>
            </div>

            {/* Recycled Rubber */}
            <div className="bg-white rounded-2xl p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1 aspect-square bg-gradient-to-br from-cream to-beige rounded-xl flex items-center justify-center">
                <div className="text-9xl opacity-30">🚗</div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-block px-4 py-2 bg-terracotta/10 border border-terracotta/20 rounded-full mb-4">
                  <span className="text-xs uppercase tracking-widest font-semibold text-terracotta">Outsoles</span>
                </div>
                <h3 className="text-3xl font-bold text-forest mb-4">Recycled Rubber</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Our outsoles are made from recycled tire rubber, giving new life to materials that
                  would otherwise end up in landfills. This rubber provides exceptional grip, durability,
                  and weather resistance.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-forest mt-1">✓</span>
                    <span>Diverts waste from landfills and incinerators</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-forest mt-1">✓</span>
                    <span>Superior traction and longevity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-forest mt-1">✓</span>
                    <span>ISO 14021 certified recycled content</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Organic Cotton & Hemp */}
            <div className="bg-white rounded-2xl p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-block px-4 py-2 bg-terracotta/10 border border-terracotta/20 rounded-full mb-4">
                  <span className="text-xs uppercase tracking-widest font-semibold text-terracotta">Lining</span>
                </div>
                <h3 className="text-3xl font-bold text-forest mb-4">Organic Cotton & Hemp</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Our interior linings use GOTS-certified organic cotton and hemp blends. These natural
                  fibers are grown without harmful pesticides, require minimal water, and biodegrade
                  naturally at end of life.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-forest mt-1">✓</span>
                    <span>Pesticide-free and biodegradable</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-forest mt-1">✓</span>
                    <span>Naturally breathable and moisture-wicking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-forest mt-1">✓</span>
                    <span>GOTS and Oeko-Tex certified</span>
                  </li>
                </ul>
              </div>
              <div className="aspect-square bg-gradient-to-br from-cream to-beige rounded-xl flex items-center justify-center">
                <div className="text-9xl opacity-30">🌿</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Traceability Section */}
      <section className="max-w-screen-xl mx-auto px-6 lg:px-12 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-forest mb-4">Full Traceability</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Every product has a story. We believe you have the right to know it.
          </p>
        </div>

        <div className="bg-cream rounded-2xl p-8 md:p-12">
          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-full bg-forest text-white flex items-center justify-center font-bold flex-shrink-0">
                1
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-forest mb-2">Material Sourcing</h3>
                <p className="text-gray-600">
                  Each product page displays the percentage of recycled materials used. We document
                  the origin of every component—from the coastal region where ocean plastic was collected
                  to the organic cotton farm location.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-full bg-forest text-white flex items-center justify-center font-bold flex-shrink-0">
                2
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-forest mb-2">Manufacturing Process</h3>
                <p className="text-gray-600">
                  Every pair of shoes is manufactured in one of our certified facilities in Portugal,
                  Vietnam, or Italy. We track energy usage, water consumption, and carbon emissions
                  for each production run.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-full bg-forest text-white flex items-center justify-center font-bold flex-shrink-0">
                3
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-forest mb-2">Transportation</h3>
                <p className="text-gray-600">
                  We offset 100% of shipping emissions through verified carbon credits. Shipping routes
                  and methods are optimized to minimize environmental impact, prioritizing sea freight
                  over air whenever possible.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-full bg-forest text-white flex items-center justify-center font-bold flex-shrink-0">
                4
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-forest mb-2">End of Life</h3>
                <p className="text-gray-600">
                  Through our circular return program, worn-out footwear can be sent back to us for
                  disassembly and recycling. Materials are separated and reintegrated into new products,
                  closing the loop.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-cream py-20">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-forest mb-4">Certifications & Partnerships</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Independently verified standards we meet
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="text-5xl mb-4">🅱️</div>
              <h3 className="font-bold text-forest mb-2">B Corp Certified</h3>
              <p className="text-sm text-gray-600">Verified social and environmental performance</p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center">
              <div className="text-5xl mb-4">🌊</div>
              <h3 className="font-bold text-forest mb-2">OBP Certified</h3>
              <p className="text-sm text-gray-600">Ocean Bound Plastic program member</p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center">
              <div className="text-5xl mb-4">🧵</div>
              <h3 className="font-bold text-forest mb-2">GOTS Organic</h3>
              <p className="text-sm text-gray-600">Global Organic Textile Standard certified</p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center">
              <div className="text-5xl mb-4">♻️</div>
              <h3 className="font-bold text-forest mb-2">GRS Certified</h3>
              <p className="text-sm text-gray-600">Global Recycled Standard verified</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-screen-xl mx-auto px-6 lg:px-12 py-20">
        <div className="bg-forest text-white rounded-2xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Transparency is a Journey</h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            We're constantly improving our processes and pushing for greater sustainability.
            Have questions about our materials or practices? We're here to answer them.
          </p>
          <button className="px-8 py-4 bg-white text-forest font-semibold rounded-lg hover:bg-cream transition-all">
            Contact Our Sustainability Team
          </button>
        </div>
      </section>

      <Footer />

      {/* Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="w-16 h-16 bg-forest hover:bg-forest-dark rounded-full shadow-2xl flex items-center justify-center text-white text-2xl transition-all hover:scale-110">
          💬
        </button>
      </div>
    </div>
  );
}
