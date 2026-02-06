
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { INITIATIVES } from '../constants';

const Activities: React.FC = () => {
  return (
    <div className="py-24 bg-white min-h-screen">
      <Helmet>
        <title>Our Initiatives | Buuu Foundation</title>
        <meta name="description" content="Explore our impactful initiatives: Shelter Support, Nourishing Lives, Education, Healthcare, and more." />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 font-serif mb-6">Our Initiatives</h2>
          <div className="w-24 h-1.5 bg-rose-500 mx-auto rounded-full mb-8"></div>
          <p className="text-slate-600 max-w-3xl mx-auto text-lg leading-relaxed font-light">
            At Buuu Foundation, we believe that no challenge is too great when we come together. Our initiatives span a variety of areas, each driven by a single goal: to uplift the underserved and vulnerable communities around us.
          </p>
        </div>

        <div className="space-y-12">
          {INITIATIVES.map((item) => (
            <div
              key={item.id}
              className="group relative bg-slate-50 hover:bg-white rounded-[3rem] p-8 md:p-12 border border-slate-100 hover:border-rose-100 transition-all duration-500 hover:shadow-2xl hover:shadow-rose-500/5 flex flex-col md:flex-row items-center gap-12"
            >
              <div className="flex-shrink-0">
                <div className="text-6xl md:text-8xl font-black text-rose-100 group-hover:text-rose-200 transition-colors font-serif">
                  {item.number}
                </div>
              </div>

              <div className="flex-grow space-y-4">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="p-3 bg-white rounded-2xl text-rose-600 shadow-sm">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-800 font-serif">{item.title}</h3>
                </div>
                <p className="text-slate-600 text-lg leading-relaxed font-light">
                  {item.description}
                </p>
              </div>

              <div className="flex-shrink-0">
                <Link
                  to={`/activities/${item.id}`}
                  className="bg-white p-5 rounded-full shadow-lg text-rose-600 hover:bg-rose-600 hover:text-white transition-all transform hover:scale-110 active:scale-95 flex items-center justify-center group/btn"
                >
                  <ArrowRight className="w-8 h-8 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Activities;
