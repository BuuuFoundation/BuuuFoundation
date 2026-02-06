
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, IndianRupee, MessageCircle, ChevronLeft, ChevronRight, HeartHandshake, X, ZoomIn, Hand } from 'lucide-react';
import { INITIATIVES, ACTIVITIES } from '../constants';

// Activity Details Modal with Image Carousel and Full Content
const ActivityDetailsModal: React.FC<{
  activity: typeof ACTIVITIES[0];
  onClose: () => void;
}> = ({ activity, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % activity.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + activity.images.length) % activity.images.length);
  };

  return (
    <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200" onClick={onClose}>
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-50 bg-black/20 p-2 rounded-full hover:bg-black/40"
      >
        <X className="w-8 h-8" />
      </button>

      <div
        className="bg-white w-full max-w-5xl max-h-[90vh] rounded-[2rem] overflow-hidden shadow-2xl flex flex-col md:flex-row relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left: Image Carousel */}
        <div className="w-full md:w-3/5 h-[40vh] md:h-auto bg-slate-900 relative group">
          <img
            src={activity.images[currentImageIndex]}
            alt={`Gallery ${currentImageIndex + 1}`}
            className="w-full h-full object-contain bg-black/50"
          />

          {/* Navigation Controls */}
          {activity.images.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
              >
                <ChevronRight className="w-8 h-8" />
              </button>

              {/* Dots */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                {activity.images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx); }}
                    className={`nav-dot w-2 h-2 rounded-full transition-all ${idx === currentImageIndex ? 'bg-white w-6' : 'bg-white/40 hover:bg-white/60'
                      }`}
                  />
                ))}
              </div>
            </>
          )}

          {/* Image Counter */}
          <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-md text-white/90 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
            Photo {currentImageIndex + 1} of {activity.images.length}
          </div>
        </div>

        {/* Right: Content */}
        <div className="w-full md:w-2/5 p-8 md:p-10 flex flex-col overflow-y-auto bg-white/50">
          <div className="mb-6">
            <span className="inline-block px-3 py-1 bg-rose-100 text-rose-600 rounded-lg text-xs font-bold uppercase tracking-wider mb-3">
              {activity.category}
            </span>
            <h3 className="text-3xl font-bold font-serif text-slate-800 leading-tight">
              {activity.location}
            </h3>
            <div className="flex items-center text-slate-500 font-medium text-sm mt-2 space-x-4">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2 text-rose-500" />
                {activity.date}
              </div>
            </div>
          </div>

          <div className="prose prose-slate prose-lg text-slate-600 font-light leading-relaxed mb-8 flex-grow">
            <p>{activity.description}</p>
          </div>

          <div className="mt-auto pt-6 border-t border-slate-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-emerald-100 rounded-full">
                  <HeartHandshake className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Funds Provided</p>
                  <p className="text-lg font-bold text-slate-800">{activity.fundsProvided || 'TBA'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Activity Card with integrated carousel and click-to-modal
const ActivityCard: React.FC<{ act: typeof ACTIVITIES[0]; onOpen: (act: typeof ACTIVITIES[0]) => void }> = ({ act, onOpen }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % act.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + act.images.length) % act.images.length);
  };

  return (
    <div
      className="bg-white rounded-[2.5rem] overflow-hidden shadow-md border border-slate-100 group hover:shadow-xl transition-all duration-500 flex flex-col h-full cursor-pointer hover:-translate-y-1"
      onClick={() => onOpen(act)}
    >
      <div className="h-64 overflow-hidden relative bg-slate-100">
        <img
          src={act.images[currentImageIndex]}
          alt={act.title}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />

        {/* Overlay Hint on Hover */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
          <div className="bg-white/95 text-slate-900 px-6 py-3 rounded-full font-bold uppercase text-xs tracking-widest shadow-2xl transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 flex items-center gap-3">
            <Hand className="w-4 h-4" />
            <span>Read More</span>
          </div>
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-lg shadow-sm z-10">
          <span className="text-[10px] font-bold uppercase tracking-widest text-rose-600">
            {act.category}
          </span>
        </div>

        {/* Carousel Controls (Only show if > 1 image) */}
        {act.images.length > 1 && (
          <div className="absolute inset-0 flex items-center justify-between px-2 opacity-0 group-hover:opacity-100 transition-opacity z-20 pointer-events-none">
            <button
              onClick={prevImage}
              className="pointer-events-auto p-2 bg-white/80 rounded-full hover:bg-white text-slate-800 shadow-md transition-all hover:scale-110"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextImage}
              className="pointer-events-auto p-2 bg-white/80 rounded-full hover:bg-white text-slate-800 shadow-md transition-all hover:scale-110"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>

      <div className="p-8 space-y-4 flex flex-col flex-grow relative bg-white z-30">
        <div className="space-y-1">
          <h3 className="text-xl font-bold text-slate-800 font-serif leading-tight group-hover:text-rose-600 transition-colors line-clamp-1">
            {act.location}
          </h3>
          <div className="flex items-center text-slate-400 text-xs font-bold uppercase tracking-wider">
            <Calendar className="w-3.5 h-3.5 mr-1.5" />
            {act.date}
          </div>
        </div>

        {/* Truncated Description */}
        <p className="text-slate-600 text-sm font-light leading-relaxed italic line-clamp-3">
          {act.description}
        </p>

        {/* Read More Link styling */}
        <div className="pt-2">
          <span className="text-rose-500 text-xs font-bold uppercase tracking-widest hover:underline decoration-rose-500 underline-offset-4">Read Full Story</span>
        </div>

        <div className="pt-4 border-t border-slate-50 flex items-center justify-between mt-auto">
          <div className="flex items-center space-x-2 text-emerald-600 font-bold">
            <HeartHandshake className="w-4 h-4" />
            <span className="text-sm">Support: {act.fundsProvided || 'TBA'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const InitiativeDetail: React.FC = () => {
  const { id } = useParams();
  const [selectedActivity, setSelectedActivity] = useState<typeof ACTIVITIES[0] | null>(null);
  const initiative = INITIATIVES.find(i => i.id === id);

  // Filter activities strictly by their initiativeId
  const filteredActivities = ACTIVITIES.filter(a => a.initiativeId === id);

  if (!initiative) return <div className="py-24 text-center">Initiative not found</div>;

  return (
    <div className="py-24 bg-slate-50 min-h-screen">
      <Helmet>
        <title>{initiative.title} | Buuu Foundation</title>
        <meta name="description" content={initiative.description.substring(0, 160)} />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/activities" className="inline-flex items-center space-x-2 text-rose-600 font-bold mb-12 hover:underline">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Initiatives</span>
        </Link>

        {/* Hero Section */}
        <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-sm border border-slate-100 mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-rose-50 rounded-full -mr-32 -mt-32 opacity-50 blur-3xl"></div>

          <div className="relative z-10">
            <div className="flex items-center space-x-6 mb-8">
              <span className="text-6xl md:text-8xl font-serif font-black text-rose-100">{initiative.number}</span>
              <h1 className="text-3xl md:text-5xl font-bold font-serif text-slate-800">{initiative.title}</h1>
            </div>

            {/* Initiative Quote */}
            {initiative.quote && (
              <div className="mb-12 border-l-4 border-rose-500 pl-8 py-2">
                <p className="text-2xl font-serif italic text-slate-700 leading-relaxed">
                  {initiative.quote}
                </p>
              </div>
            )}

            <div className="space-y-6">
              <p className="text-xl text-slate-600 font-light leading-relaxed max-w-4xl italic">
                {initiative.description}
              </p>
              {initiative.extendedInfo && (
                <p className="text-lg text-slate-600 font-light leading-relaxed max-w-4xl">
                  {initiative.extendedInfo}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Impact Gallery Section */}
        <div className="mb-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-slate-200 pb-8">
            <div>
              <h2 className="text-3xl font-bold font-serif text-slate-800 mb-2">
                Recent Contributions: <span className="text-rose-600 italic font-normal">A Glimpse of Impact</span>
              </h2>
              <p className="text-slate-500 font-light max-w-4xl">
                {initiative.impactDescription || "Discover the impactful strides we’ve taken in supporting this cause."}
              </p>
            </div>
          </div>

          {filteredActivities.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 auto-rows-fr">
              {filteredActivities.map((act) => (
                <ActivityCard
                  key={act.id}
                  act={act}
                  onOpen={(activity) => setSelectedActivity(activity)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-24 bg-white rounded-[3rem] border-2 border-dashed border-slate-100">
              <p className="text-slate-400 font-medium text-lg">More impact stories and photos coming soon for this specific initiative.</p>
            </div>
          )}
        </div>

        {/* Have Questions Section */}
        <div className="bg-slate-900 rounded-[3rem] p-12 md:p-16 text-center text-white relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex p-4 bg-rose-600/20 rounded-2xl mb-8">
              <MessageCircle className="w-8 h-8 text-rose-500" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif tracking-tight">"Have Questions? We're Here to Help!"</h2>
            <p className="text-slate-400 mb-10 text-lg font-light leading-relaxed">
              If you have any questions about the fundraising efforts we’ve conducted or our ongoing initiatives, please don’t hesitate to reach out to us. We value transparency and are happy to provide clarity on how your support is making a difference.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="w-full sm:w-auto bg-rose-600 text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-rose-700 transition-all shadow-lg"
              >
                Contact Support
              </Link>
              <Link
                to="/faq"
                className="w-full sm:w-auto bg-white/10 backdrop-blur border border-white/20 text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-white/20 transition-all"
              >
                View FAQ
              </Link>
            </div>
          </div>
          <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-rose-600/10 rounded-full blur-3xl"></div>
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* Detail Modal */}
      {selectedActivity && (
        <ActivityDetailsModal
          activity={selectedActivity}
          onClose={() => setSelectedActivity(null)}
        />
      )}
    </div>
  );
};

export default InitiativeDetail;
