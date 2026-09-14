import { LangContent, Testimonial } from '../types';

interface TestimonialsProps {
  t: LangContent;
  testimonials: Testimonial[];
  onAddClick: () => void;
}

export default function Testimonials({ t, testimonials, onAddClick }: TestimonialsProps) {
  return (
    <section className="py-16 border-t border-neutral-800/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-4">
          <div className="text-center sm:text-left space-y-2">
            <h2 className="text-xs font-mono uppercase tracking-widest text-amber-400">{t.testimonialsTitle}</h2>
            <h3 className="text-2xl font-bold text-white">{t.testimonialsSubtitle}</h3>
          </div>
          <button
            onClick={onAddClick}
            className="px-5 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-amber-400 border border-amber-500/40 rounded-xl text-xs font-bold uppercase tracking-wider transition cursor-pointer"
          >
            + {t.addTestimonialBtn}
          </button>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4 pt-1 snap-x scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {testimonials.map((item, idx) => (
            <div key={idx} className="min-w-[280px] sm:min-w-[340px] max-w-[380px] flex-1 bg-neutral-950 p-6 rounded-xl border border-neutral-800/80 flex flex-col justify-between space-y-4 shadow-md snap-start">
              <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed italic">«{item.text}»</p>
              <div className="pt-3 border-t border-neutral-900 text-xs font-mono font-bold text-amber-400">
                {item.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}