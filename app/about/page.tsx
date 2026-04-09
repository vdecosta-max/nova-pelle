/**
 * Nove Pelle About Page
 * Founders story and brand mission
 */

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cream via-beige-light to-cream-light py-20">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-forest mb-6">Our Story</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From a shared vision of sustainable fashion to a global movement in conscious footwear
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="max-w-screen-xl mx-auto px-6 lg:px-12 py-20">
        <div className="bg-cream rounded-2xl p-8 md:p-12 text-center">
          <div className="inline-block px-4 py-2 bg-terracotta/10 border border-terracotta/20 rounded-full mb-6">
            <span className="text-xs uppercase tracking-widest font-semibold text-terracotta">Our Mission</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-forest mb-6">
            Stylish. Sustainable. Scalable.
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            We believe that fashion shouldn't cost the earth. Every step we take is toward a future
            where style and sustainability walk hand in hand, where craftsmanship meets conscience,
            and where global reach doesn't mean global harm.
          </p>
        </div>
      </section>

      {/* Founders Section */}
      <section className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-forest mb-4">Meet the Founders</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Two visionaries united by a passion for change
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Pearl - Fashion Designer */}
          <div className="space-y-6">
            <div className="aspect-[4/5] bg-gradient-to-br from-cream to-beige rounded-2xl overflow-hidden flex items-center justify-center">
              <div className="text-9xl opacity-20">👗</div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-forest mb-2">Pearl Thompson</h3>
              <p className="text-terracotta font-semibold mb-4">Co-Founder & Creative Director</p>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Pearl spent over a decade as a lead designer at one of the world's largest high street
                  fashion brands, where she witnessed firsthand the devastating environmental impact of
                  fast fashion manufacturing.
                </p>
                <p>
                  Frustrated by the industry's resistance to change, she left her senior position to
                  pursue a different path—one where beautiful design didn't come at the cost of our planet.
                  Her vision was clear: create footwear that people would be proud to wear and proud to own.
                </p>
                <p>
                  "Every design choice is an opportunity to do better," Pearl says. "We don't have to
                  compromise on style to be sustainable. In fact, constraint breeds creativity."
                </p>
              </div>
            </div>
          </div>

          {/* Marcus - Operations Expert */}
          <div className="space-y-6">
            <div className="aspect-[4/5] bg-gradient-to-br from-cream to-beige rounded-2xl overflow-hidden flex items-center justify-center">
              <div className="text-9xl opacity-20">🪑</div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-forest mb-2">Marcus Chen</h3>
              <p className="text-terracotta font-semibold mb-4">Co-Founder & Chief Operations Officer</p>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Before co-founding Nôva Pelle, Marcus ran large-scale furniture production operations
                  across Europe and North America. His expertise in sustainable manufacturing and supply
                  chain optimization made him a pioneer in zero-waste production methods.
                </p>
                <p>
                  When he met Pearl at a sustainability conference in Amsterdam, they discovered a shared
                  frustration with the fashion industry's wasteful practices. Marcus saw an opportunity
                  to apply his furniture manufacturing principles to footwear—using recycled materials,
                  modular design, and circular production systems.
                </p>
                <p>
                  "Sustainability isn't just an ideal—it's a competitive advantage," Marcus explains.
                  "We've proven that you can scale responsibly, manufacture efficiently, and still maintain
                  the highest standards of quality and traceability."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-cream py-20">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-forest mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide every decision we make
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 text-center">
              <div className="text-5xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-forest mb-3">Planet First</h3>
              <p className="text-gray-600">
                Every material, every process, every partnership is evaluated through the lens of
                environmental impact. We measure success by the footprint we don't leave behind.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 text-center">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-forest mb-3">Full Transparency</h3>
              <p className="text-gray-600">
                From raw material sourcing to final delivery, every product has a traceable journey.
                You deserve to know exactly where your footwear comes from and how it was made.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 text-center">
              <div className="text-5xl mb-4">✨</div>
              <h3 className="text-xl font-bold text-forest mb-3">Timeless Design</h3>
              <p className="text-gray-600">
                We don't follow trends—we create classics. Our designs are built to last years, not
                seasons, because the most sustainable product is the one you never throw away.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="max-w-screen-xl mx-auto px-6 lg:px-12 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-forest mb-4">Our Journey</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From concept to global impact
          </p>
        </div>

        <div className="space-y-8">
          <div className="flex gap-6 items-start">
            <div className="w-24 flex-shrink-0 text-right">
              <span className="text-2xl font-bold text-forest">2023</span>
            </div>
            <div className="flex-1 pb-8 border-l-2 border-forest pl-6 relative">
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-forest"></div>
              <h3 className="text-xl font-bold text-forest mb-2">The Beginning</h3>
              <p className="text-gray-600">
                Pearl and Marcus founded Nôva Pelle in London, launching with a single product line
                made from 85% recycled ocean plastics.
              </p>
            </div>
          </div>

          <div className="flex gap-6 items-start">
            <div className="w-24 flex-shrink-0 text-right">
              <span className="text-2xl font-bold text-forest">2024</span>
            </div>
            <div className="flex-1 pb-8 border-l-2 border-forest pl-6 relative">
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-forest"></div>
              <h3 className="text-xl font-bold text-forest mb-2">Going Global</h3>
              <p className="text-gray-600">
                Expanded to four continents with studios in Paris, Los Angeles, and Sydney.
                Launched our traceability platform, allowing customers to track the journey of every product.
              </p>
            </div>
          </div>

          <div className="flex gap-6 items-start">
            <div className="w-24 flex-shrink-0 text-right">
              <span className="text-2xl font-bold text-forest">2025</span>
            </div>
            <div className="flex-1 pb-8 border-l-2 border-forest pl-6 relative">
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-forest"></div>
              <h3 className="text-xl font-bold text-forest mb-2">Certified Impact</h3>
              <p className="text-gray-600">
                Achieved B Corp certification and launched our circular return program, where customers
                can return worn products for recycling into new footwear.
              </p>
            </div>
          </div>

          <div className="flex gap-6 items-start">
            <div className="w-24 flex-shrink-0 text-right">
              <span className="text-2xl font-bold text-terracotta">2026</span>
            </div>
            <div className="flex-1 pl-6 relative">
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-terracotta"></div>
              <h3 className="text-xl font-bold text-forest mb-2">Today & Beyond</h3>
              <p className="text-gray-600">
                Over 50,000 pairs of sustainable footwear in circulation, with an average recycled
                content of 72%. Our mission continues: proving that fashion can be a force for good.
              </p>
            </div>
          </div>
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
