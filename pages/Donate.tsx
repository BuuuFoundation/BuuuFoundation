import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Heart, ShieldCheck, Zap } from 'lucide-react';
import RazorpayDonateButton from '../components/RazorpayDonateButton';

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

        {/* Donation Options: Online & Bank Transfer */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 items-stretch">

          {/* Razorpay Online Donation */}
          <div className="bg-white border border-slate-200 rounded-3xl shadow-xl p-10 flex flex-col items-center text-center">
            <h3 className="text-2xl font-bold font-serif text-slate-800 mb-4">
              Donate Online
            </h3>
            <p className="text-slate-600 mb-8">
              Pay instantly via UPI, Credit/Debit Card, Net Banking, or Wallets, powered by Razorpay.
              Pick a suggested amount or enter your own.
            </p>
            <div className="mb-8">
              <RazorpayDonateButton />
            </div>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-slate-500 text-xs uppercase tracking-wider">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-500" /> Secure Checkout
              </span>
              <span className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-amber-500" /> Instant Confirmation
              </span>
            </div>
          </div>

          {/* Bank Transfer */}
          <div className="bg-white border border-slate-200 rounded-3xl shadow-xl p-10 flex flex-col">
            <h3 className="text-2xl font-bold font-serif text-slate-800 mb-4">
              Donate via Bank Transfer
            </h3>
            <p className="text-slate-600 mb-8">
              Prefer a direct bank transfer instead? Contributions can be made directly
              to our official bank account below.
            </p>

            <div className="space-y-5 text-sm">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-400 font-bold">
                  Account Name
                </p>
                <p className="text-lg text-slate-800">BUUU FOUNDATION</p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-widest text-slate-400 font-bold">
                  Account Number
                </p>
                <p className="text-lg text-slate-800">925010050621933</p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-widest text-slate-400 font-bold">
                  IFSC Code
                </p>
                <p className="text-lg text-slate-800">UTIB0002201</p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-widest text-slate-400 font-bold">
                  Bank & Branch
                </p>
                <p className="text-lg text-slate-800">Axis Bank, Guduvanchery</p>
              </div>
            </div>
          </div>

        </div>

        {/* Tax Exemption Note */}
        <div className="max-w-3xl mx-auto mb-16 text-center bg-amber-50 border border-amber-100 rounded-2xl p-6">
          <p className="text-sm text-slate-700 leading-relaxed">
            <span className="font-semibold">Note:</span> For our accounting and compliance records, including
            our foundation's yearly tax filing, we may request PAN details from contributors. Please note that
            our 80G tax-exemption registration is still pending approval, so we're currently unable to confirm
            or promise a tax deduction on your contribution. If you'd like to share your PAN for our records
            regardless, reach out to <span className="font-medium">contact@buuufoundation.org</span>.
          </p>
        </div>

        {/* Flexible Giving */}
        <div className="max-w-3xl mx-auto mb-16 bg-white border border-slate-200 rounded-3xl p-10 text-center">
          <h3 className="text-2xl font-bold text-slate-800 mb-4 font-serif">
            Flexible Giving
          </h3>
          <p className="text-slate-600 leading-relaxed">
            Donations can be made directly to <span className="font-semibold">Buuu Foundation</span>.
            If you would like to support an ashram or welfare organisation we have helped in the past,
            please <Link to="/contact" className="font-semibold text-rose-600 hover:underline">contact us</Link> for
            more information. We are happy to share details transparently.
          </p>
        </div>

        {/* Trust Badge */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 text-slate-500 bg-white px-6 py-2 rounded-full border border-slate-200 text-sm">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>Transparent operations. Every contribution is tracked and accounted for.</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Donate;
