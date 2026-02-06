import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Heart, ShieldCheck } from 'lucide-react';

const Donate: React.FC = () => {
  return (
    <div className="py-20 bg-slate-50 min-h-screen">
      <Helmet>
        <title>Donate | Buuu Foundation</title>
        <meta name="description" content="Support Buuu Foundation's mission. Your contribution helps us provide shelter, food, healthcare, and education to those in need." />
      </Helmet>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Page Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-slate-800 font-serif mb-4">
            Support Our Foundation
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Your generosity helps us continue our work with care, responsibility, and transparency.
          </p>
        </div>

        {/* Purpose */}
        <div className="max-w-3xl mx-auto mb-20 text-center">
          <p className="text-lg text-slate-600 leading-relaxed mb-10">
            Every act of kindness has the power to change lives. Your support helps us:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left text-slate-600">
            <div className="flex items-start gap-3">
              <Heart className="w-5 h-5 text-rose-500 mt-1 shrink-0" />
              <span>Respond to emergencies and urgent needs</span>
            </div>

            <div className="flex items-start gap-3">
              <Heart className="w-5 h-5 text-rose-500 mt-1 shrink-0" />
              <span>Support ashrams and welfare organisations we have helped in the past</span>
            </div>

            <div className="flex items-start gap-3">
              <Heart className="w-5 h-5 text-rose-500 mt-1 shrink-0" />
              <span>Provide essential supplies such as food and basic necessities</span>
            </div>

            <div className="flex items-start gap-3">
              <Heart className="w-5 h-5 text-rose-500 mt-1 shrink-0" />
              <span>Sustain community-driven initiatives responsibly</span>
            </div>
          </div>
        </div>

        {/* Bank Transfer (Primary Method) */}
        <div className="bg-slate-900 text-white p-12 rounded-3xl shadow-2xl relative overflow-hidden mb-20">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Heart className="w-48 h-48 fill-current" />
          </div>

          <div className="relative z-10">
            <h3 className="text-3xl font-bold font-serif mb-4">
              Donate via Bank Transfer
            </h3>
            <p className="text-slate-300 mb-10 max-w-xl">
              Contributions can be made directly to our official bank account.
              This is currently our primary and preferred method of receiving donations.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-slate-300 text-sm">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500 font-bold">
                  Account Name
                </p>
                <p className="text-lg text-white">BUUU FOUNDATION</p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500 font-bold">
                  Account Number
                </p>
                <p className="text-lg text-white">925010050621933</p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500 font-bold">
                  IFSC Code
                </p>
                <p className="text-lg text-white">UTIB0002201</p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500 font-bold">
                  Bank & Branch
                </p>
                <p className="text-lg text-white">Axis Bank, Guduvanchery</p>
              </div>
            </div>
          </div>
        </div>

        {/* Flexible Giving */}
        <div className="max-w-3xl mx-auto mb-16 bg-white border border-slate-200 rounded-3xl p-10 text-center">
          <h3 className="text-2xl font-bold text-slate-800 mb-4 font-serif">
            Flexible Giving
          </h3>
          <p className="text-slate-600 leading-relaxed">
            Donations can be made directly to <span className="font-semibold">Buuu Foundation</span>.
            If you would like to support an ashram or welfare organisation we have helped in the past,
            please contact us for more information. We are happy to share details transparently.
          </p>

          <p className="mt-4 text-sm text-slate-500">
            📩 Reach us at <span className="font-medium">contact@buuufoundation.org</span>
          </p>
        </div>

        {/* Trust Badge */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 text-slate-500 bg-white px-6 py-2 rounded-full border border-slate-200 text-sm">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>Transparent operations. Donation receipts provided on request.</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Donate;
