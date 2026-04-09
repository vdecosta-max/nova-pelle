/**
 * Nove Pelle Contact Page
 * Contact form and office locations
 */

'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual form submission
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cream via-beige-light to-cream-light py-20">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-forest mb-6">Get in Touch</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have a question? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Form & Info Grid */}
      <section className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <div>
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-forest mb-4">Send Us a Message</h2>
              <p className="text-gray-600">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-forest focus:outline-none transition-colors"
                  placeholder="John Smith"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-forest focus:outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-900 mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-forest focus:outline-none transition-colors"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="order">Order Support</option>
                  <option value="sustainability">Sustainability Questions</option>
                  <option value="wholesale">Wholesale Partnership</option>
                  <option value="press">Press & Media</option>
                  <option value="careers">Careers</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-forest focus:outline-none transition-colors resize-none"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-forest text-white font-semibold text-lg rounded-lg hover:bg-forest-dark transition-all"
              >
                Send Message
              </button>

              {submitted && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3">
                  <span className="text-2xl">✓</span>
                  <div>
                    <p className="font-semibold text-green-800">Message sent!</p>
                    <p className="text-sm text-green-600">We'll get back to you soon.</p>
                  </div>
                </div>
              )}
            </form>
          </div>

          {/* Quick Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-forest mb-8">Other Ways to Reach Us</h2>

              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-cream flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">📧</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-forest mb-1">Email</h3>
                    <a href="mailto:hello@novapelle.com" className="text-gray-600 hover:text-forest transition-colors">
                      hello@novapelle.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-cream flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">📞</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-forest mb-1">Phone</h3>
                    <a href="tel:+442071234567" className="text-gray-600 hover:text-forest transition-colors block">
                      UK: +44 20 7123 4567
                    </a>
                    <a href="tel:+13105551234" className="text-gray-600 hover:text-forest transition-colors block">
                      US: +1 310 555 1234
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-cream flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">💬</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-forest mb-1">Live Chat</h3>
                    <p className="text-gray-600">
                      Click the chat button in the bottom right corner for instant support
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-cream rounded-xl p-6">
              <h3 className="font-semibold text-forest mb-3">Business Hours</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-medium">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-medium">Closed</span>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-3">Times shown in GMT. Offices operate on local time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="bg-cream py-20">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-forest mb-4">Our Global Offices</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Visit us at one of our studio locations around the world
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* London HQ */}
            <div className="bg-white rounded-xl p-6">
              <div className="text-4xl mb-4">🇬🇧</div>
              <h3 className="text-xl font-bold text-forest mb-2">London (HQ)</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p>42 Redchurch Street</p>
                <p>Shoreditch</p>
                <p>London E2 7DP</p>
                <p className="pt-2 font-medium text-forest">United Kingdom</p>
              </div>
            </div>

            {/* Paris Studio */}
            <div className="bg-white rounded-xl p-6">
              <div className="text-4xl mb-4">🇫🇷</div>
              <h3 className="text-xl font-bold text-forest mb-2">Paris Studio</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p>18 Rue de Turenne</p>
                <p>Le Marais</p>
                <p>75004 Paris</p>
                <p className="pt-2 font-medium text-forest">France</p>
              </div>
            </div>

            {/* Los Angeles */}
            <div className="bg-white rounded-xl p-6">
              <div className="text-4xl mb-4">🇺🇸</div>
              <h3 className="text-xl font-bold text-forest mb-2">Los Angeles</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p>8560 Melrose Avenue</p>
                <p>West Hollywood</p>
                <p>CA 90069</p>
                <p className="pt-2 font-medium text-forest">United States</p>
              </div>
            </div>

            {/* Sydney */}
            <div className="bg-white rounded-xl p-6">
              <div className="text-4xl mb-4">🇦🇺</div>
              <h3 className="text-xl font-bold text-forest mb-2">Sydney</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p>127 Commonwealth Street</p>
                <p>Surry Hills</p>
                <p>NSW 2010</p>
                <p className="pt-2 font-medium text-forest">Australia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="max-w-screen-xl mx-auto px-6 lg:px-12 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-forest mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600">Quick answers to common questions</p>
        </div>

        <div className="space-y-4 max-w-3xl mx-auto">
          <details className="bg-cream rounded-lg p-6 cursor-pointer">
            <summary className="font-semibold text-forest">What are your shipping times?</summary>
            <p className="mt-3 text-gray-600">
              Standard shipping takes 5-7 business days for UK orders, 7-10 days for Europe, and 10-14 days
              for international orders. Express shipping options are available at checkout.
            </p>
          </details>

          <details className="bg-cream rounded-lg p-6 cursor-pointer">
            <summary className="font-semibold text-forest">Do you offer returns?</summary>
            <p className="mt-3 text-gray-600">
              Yes! We offer free returns within 30 days of purchase. Items must be unworn and in original
              condition. Through our circular return program, you can also return worn items for recycling.
            </p>
          </details>

          <details className="bg-cream rounded-lg p-6 cursor-pointer">
            <summary className="font-semibold text-forest">How do I track my order?</summary>
            <p className="mt-3 text-gray-600">
              Once your order ships, you'll receive a tracking number via email. You can use this to monitor
              your delivery status on our website or the carrier's tracking page.
            </p>
          </details>

          <details className="bg-cream rounded-lg p-6 cursor-pointer">
            <summary className="font-semibold text-forest">Are your products really sustainable?</summary>
            <p className="mt-3 text-gray-600">
              Every product displays its exact recycled material percentage. Our average is 72% recycled content,
              and we're transparent about our entire supply chain. Visit our Sustainability page for full details
              on materials, certifications, and traceability.
            </p>
          </details>
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
