import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SUPPORT_AREAS } from '../constants';

const WhatWeDo: React.FC = () => {
  return (
    <div className="py-20">
      <Helmet>
        <title>What We Do | Buuu Foundation</title>
        <meta name="description" content="Our mission spans four key areas: Registered Ashrams, Animal Welfare, Medical Support, and Education Support." />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-slate-800 font-serif mb-4">
            What We Do
          </h2>
          <div className="w-20 h-1.5 bg-rose-500 mx-auto rounded-full mb-8"></div>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Our mission spans across four key areas of support, addressing real needs through
            compassionate and responsible action.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-24">
          {SUPPORT_AREAS.map((area, index) => (
            <div
              key={area.title}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-center gap-12`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-rose-100 rounded-[2rem] opacity-50 group-hover:opacity-80 transition-opacity -z-10"></div>
                  <img
                    src={area.image}
                    alt={area.title}
                    className="w-full h-[400px] object-cover rounded-3xl shadow-2xl"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2 space-y-6">
                <div className="inline-flex p-4 rounded-2xl bg-white shadow-lg border border-slate-100">
                  {area.icon}
                </div>

                <h3 className="text-3xl font-bold text-slate-800 font-serif">
                  {area.title}
                </h3>

                <p className="text-lg text-slate-600 leading-relaxed">
                  {area.description}
                </p>

                {area.requirements && (
                  <div className="mt-6">
                    <p className="text-sm font-semibold text-slate-700 mb-2">
                      Information we may request:
                    </p>
                    <ul className="space-y-2">
                      {area.requirements.map((req, i) => (
                        <li
                          key={i}
                          className="flex items-start space-x-3 text-sm text-slate-600"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2"></div>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
