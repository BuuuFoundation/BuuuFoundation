
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Linkedin, Instagram, Heart } from 'lucide-react';
import { TEAM, VOLUNTEERS, NGO_NAME, CORE_VALUES } from '../constants';

const ValueCard: React.FC<{ title: string; description: string; icon: React.ReactNode }> = ({ title, description, icon }) => (
  <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
    <div className="bg-rose-50 w-12 h-12 rounded-2xl flex items-center justify-center mb-6 text-rose-600 group-hover:bg-rose-600 group-hover:text-white transition-all">
      {icon}
    </div>
    <h4 className="text-xl font-bold text-slate-800 mb-3 font-serif">{title}</h4>
    <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
  </div>
);

const About: React.FC = () => {
  return (
    <div className="space-y-0">
      <Helmet>
        <title>About Us | Buuu Foundation</title>
        <meta name="description" content="Meet the team behind Buuu Foundation. We are a group of friends turned changemakers, dedicated to uplifting underprivileged communities." />
      </Helmet>
      {/* Intro - Finding Inspiration */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-3/5">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 font-serif mb-8 leading-tight">
                Finding Inspiration in Every Turn
              </h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  At the heart of <strong>{NGO_NAME}</strong> is a close-knit team of four passionate individuals who have been the driving force since its inception. With backgrounds in IT and a shared commitment to making a difference, we bring diverse perspectives and skills to our mission.
                </p>
                <p>
                  Two of our team members are legally registered Directors, and the other two proudly serve as co-founders, working collaboratively to lead our initiatives. Our bond runs deep, rooted in childhood friendships and college camaraderie, giving our work a personal touch that reflects in every effort.
                </p>
                <p>
                  Despite residing in different cities, we remain united by a singular goal: to uplift underprivileged communities through impactful actions. We are hoping to bring compassion, innovation, and determination to every cause we take on.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-2/5 relative">
              <div className="aspect-square bg-rose-50 rounded-full absolute -top-10 -right-10 w-64 h-64 -z-10 animate-pulse"></div>
              <img
                src="images/Team/team_collaborating.jpg"
                alt="Our team collaborating"
                className="w-full aspect-[4/5] object-cover rounded-[3rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 font-serif mb-4">Our Values</h2>
            <div className="w-20 h-1.5 bg-rose-500 mx-auto rounded-full"></div>
            <p className="mt-6 text-slate-600 max-w-2xl mx-auto">
              Our principles are the foundation upon which we build a better tomorrow for everyone.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {CORE_VALUES.map((val) => (
              <ValueCard
                key={val.title}
                icon={val.icon}
                title={val.title}
                description={val.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 font-serif mb-4">Meet the Team</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              A blend of childhood friendship, technological innovation, and a shared mission for change.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-8">
            {TEAM.map((member) => (
              <div key={member.name} className="flex flex-col items-center text-center group">
                <div className="relative mb-8 w-full aspect-square max-w-[240px]">
                  <div className="absolute inset-0 bg-slate-100 rounded-[2.5rem] rotate-6 group-hover:rotate-3 transition-transform duration-500"></div>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="relative w-full h-full rounded-[2.5rem] object-cover shadow-xl grayscale group-hover:grayscale-0 group-hover:-translate-y-2 transition-all duration-500"
                  />
                  <div className="absolute -bottom-4 right-4 flex space-x-2">
                    {member.instagram && (
                      <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="p-3 bg-white shadow-lg rounded-xl text-slate-400 hover:text-rose-600 transition-colors">
                        <Instagram className="w-4 h-4" />
                      </a>
                    )}
                    {member.linkedin && (
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-white shadow-lg rounded-xl text-slate-400 hover:text-blue-600 transition-colors">
                        <Linkedin className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-1">{member.name}</h3>
                <p className="text-rose-600 text-xs font-bold uppercase tracking-widest mb-4">{member.role}</p>
                <p className="text-slate-500 text-sm leading-relaxed max-w-xs">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteers Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[3rem] p-12 md:p-16 shadow-sm border border-slate-100">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-slate-100 pb-8">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-bold text-slate-800 font-serif mb-4 italic">Our Dedicated Volunteers</h2>
                <p className="text-slate-500 font-light">
                  Impact is only possible with a collective heart. We are immensely grateful to the individuals who dedicate their time and effort to support our ground-level activities.
                </p>
              </div>
              <div className="mt-8 md:mt-0">
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-rose-50 text-rose-600 rounded-full text-xs font-bold uppercase tracking-widest">
                  <Heart className="w-4 h-4 fill-rose-600" />
                  <span>The Backbone of Buuu</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              {VOLUNTEERS.map((name) => (
                <div key={name} className="bg-slate-50 px-8 py-4 rounded-2xl border border-slate-100 flex items-center space-x-3 group hover:border-rose-200 transition-all hover:shadow-md">
                  <div className="w-2 h-2 rounded-full bg-rose-500 group-hover:scale-150 transition-transform"></div>
                  <span className="text-slate-800 font-bold tracking-tight">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-rose-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold mb-6 italic">"No act of kindness, no matter how small, is ever wasted."</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#/donate" className="bg-white text-rose-600 px-10 py-3 rounded-full font-bold hover:bg-slate-50 transition-all">Support Our Mission</a>
            <a href="#/contact" className="bg-rose-700 text-white border border-rose-500 px-10 py-3 rounded-full font-bold hover:bg-rose-800 transition-all">Join as Volunteer</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
