
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('sending');

    // Simulate API call for Demo - In production, replace with Formspree ID
    const formData = new FormData(e.currentTarget);
    try {
      // For GitHub Pages static site: replace 'your-formspree-id' with actual ID
      await fetch('https://formspree.io/f/mjgebkyw', {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      setFormStatus('success');
    } catch (err) {
      setFormStatus('error');
    }
  };

  return (
    <div className="py-20 bg-slate-50">
      <Helmet>
        <title>Contact Us | Buuu Foundation</title>
        <meta name="description" content="Get in touch with Buuu Foundation. Whether you want to volunteer, collaborate, or say hi, we'd love to hear from you." />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 font-serif mb-4 text-center">Get in Touch</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Whether you want to volunteer, collaborate, or just say hi, we'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Details */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
              <h3 className="text-xl font-bold text-slate-800 mb-8 font-serif">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-rose-50 p-3 rounded-2xl">
                    <Mail className="w-6 h-6 text-rose-600" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Email us</p>
                    <p className="text-slate-700 font-medium">{SOCIAL_LINKS.email}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-rose-50 p-3 rounded-2xl">
                    <Phone className="w-6 h-6 text-rose-600" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Call us</p>
                    <p className="text-slate-700 font-medium">{SOCIAL_LINKS.phone}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-rose-50 p-3 rounded-2xl">
                    <MapPin className="w-6 h-6 text-rose-600" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Location</p>
                    <p className="text-slate-700 font-medium">{SOCIAL_LINKS.address}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-slate-100">
              {formStatus === 'success' ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send className="w-10 h-10 text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">Message Sent!</h3>
                  <p className="text-slate-600 mb-8">Thank you for reaching out. We'll get back to you shortly.</p>
                  <button
                    onClick={() => setFormStatus('idle')}
                    className="bg-rose-600 text-white px-8 py-3 rounded-full font-bold hover:bg-rose-700 transition-all"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  action="https://formspree.io/f/mjgebkyw" // Replace with actual ID
                  method="POST"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Your Name</label>
                      <input
                        required
                        type="text"
                        name="name"
                        placeholder="John Doe"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-rose-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                      <input
                        required
                        type="email"
                        name="email"
                        placeholder="john@example.com"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-rose-500 transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Subject</label>
                    <select
                      name="subject"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-rose-500 transition-colors"
                    >
                      <option>General Inquiry</option>
                      <option>Volunteer Application</option>
                      <option>Donation Question</option>
                      <option>Collaboration Idea</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Your Message</label>
                    <textarea
                      required
                      name="message"
                      rows={5}
                      placeholder="Tell us how we can help..."
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-rose-500 transition-colors"
                    ></textarea>
                  </div>
                  <button
                    disabled={formStatus === 'sending'}
                    type="submit"
                    className="w-full bg-rose-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-rose-700 transition-all shadow-lg hover:shadow-rose-200 disabled:bg-slate-400"
                  >
                    {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
