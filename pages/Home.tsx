
import React, { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Eye } from 'lucide-react';
import { NGO_NAME, NGO_TAGLINE } from '../constants';

const Home: React.FC = () => {
  const ourStoryRef = useRef<HTMLElement | null>(null);
  return (
    <div className="space-y-0">
      <Helmet>
        <title>Buuu Foundation | Spreading Kindness & Hope</title>
        <meta name="description" content="Buuu Foundation - A Section 8 NGO dedicated to empowering underprivileged communities through compassionate action and sustainable initiatives." />
      </Helmet>
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img
            src="images/HomePage_background.jpg"
            alt="photo background"
            className="w-full h-full object-cover opacity-30 scale-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-5xl font-bold text-white mb-8 font-serif leading-tight tracking-tight">
            Together, We Can Make a <span className="text-rose-500 italic">Difference</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-12 font-light max-w-3xl mx-auto italic leading-relaxed">
            "{NGO_TAGLINE}"
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              to="/donate"
              className="w-full sm:w-auto bg-rose-600 text-white px-12 py-5 rounded-full text-lg font-bold uppercase tracking-widest hover:bg-rose-700 transition-all shadow-2xl hover:-translate-y-1"
            >
              Donate Now
            </Link>
            <button
              type="button"
              onClick={() =>
                ourStoryRef.current?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start',
                })
              }
              className="w-full sm:w-auto bg-white/10 backdrop-blur-md text-white border border-white/20 px-12 py-5 rounded-full text-lg font-bold uppercase tracking-widest hover:bg-white/20 transition-all"
            >
              Our Story
            </button>

          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-slate-50 p-12 rounded-[3rem] border border-slate-100 hover:border-rose-200 transition-colors group">
              <div className="w-16 h-16 bg-rose-100 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-rose-600 transition-all">
                <Target className="w-8 h-8 text-rose-600 group-hover:text-white" />
              </div>
              <h2 className="text-3xl font-bold text-slate-800 font-serif mb-6 uppercase tracking-tight">Our Mission</h2>
              <p className="text-slate-600 text-lg leading-relaxed font-light">
                To empower underprivileged communities and drive meaningful change by addressing critical societal challenges through impactful initiatives, supported by individual contributions and collective community efforts.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-slate-50 p-12 rounded-[3rem] border border-slate-100 hover:border-emerald-200 transition-colors group">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-emerald-600 transition-all">
                <Eye className="w-8 h-8 text-emerald-600 group-hover:text-white" />
              </div>
              <h2 className="text-3xl font-bold text-slate-800 font-serif mb-6 uppercase tracking-tight">Our Vision</h2>
              <p className="text-slate-600 text-lg leading-relaxed font-light">
                A world where every individual has equal access to resources and opportunities, enabling them to overcome social and economic barriers and build a brighter future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Story Section */}
      <section ref={ourStoryRef} className="py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 font-serif mb-8 leading-tight">
                Our Story: <br /><span className="text-rose-600 italic font-normal">Born from Compassion</span>
              </h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-light">
                <p>
                  Buuu Foundation was born out of compassion and determination during the global COVID-19 pandemic in June 2020. As the crisis left many struggling to secure daily essentials, a group of friends in Chennai felt a deep responsibility to help.
                </p>
                <p>
                  What started as small acts of kindness for friends and family quickly evolved into a broader mission. Encouraged by loved ones and inspired by growing impact, we decided to formalize our work.
                </p>
                <p className="font-bold text-slate-800">
                  On May 7, 2021, Buuu Foundation was officially registered as a Section 8 NGO.
                </p>
                <p>
                  Today, we stand as a testament to what compassion and community can achieve together. Each donation fuels hope, proving the extraordinary power of collective action, one act of kindness at a time.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 relative">
              <div className="absolute -inset-10 bg-rose-100/50 rounded-full blur-3xl opacity-50 -z-10"></div>
              <div className="grid grid-cols-2 gap-4">
                <img src="images/01.jpg" alt="Impact 1" className="rounded-[2rem] shadow-xl w-full aspect-square object-cover" />
                <img src="images/02.jpeg" alt="Impact 2" className="rounded-[2rem] shadow-xl w-full aspect-square object-cover translate-y-8" />
                <img src="images/03.jpg" alt="Impact 3" className="rounded-[2rem] shadow-xl w-full aspect-square object-cover -translate-y-8" />
                <img src="images/04.jpg" alt="Impact 4" className="rounded-[2rem] shadow-xl w-full aspect-square object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { label: 'Lives Impacted', val: '50+' },
              { label: 'Registered Ashrams', val: '10+' },
              { label: 'Years of Hope', val: '4+' },
              { label: 'Active Volunteers', val: '10+' },
            ].map(stat => (
              <div key={stat.label}>
                <div className="text-4xl md:text-6xl font-bold font-serif mb-2 text-rose-500">{stat.val}</div>
                <div className="text-slate-400 text-xs font-bold uppercase tracking-[0.2em]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold mb-8 italic text-slate-800 leading-tight">"Each donation fuels not just aid, but also hope."</h2>
          <Link
            to="/donate"
            className="inline-flex items-center space-x-3 bg-rose-600 text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-rose-700 transition-all shadow-xl"
          >
            <span>Contribute to our Hope Fund</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
