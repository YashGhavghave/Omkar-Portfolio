import { ABOUT_FACTS } from '@/lib/data';
import { ORIGINAL_PROFILE_IMAGE } from '@/lib/original-assets';

export default function About() {
  return (
    <section id="about" className="bg-black py-20 md:py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Visual */}
          <div className="reveal relative">
            <div className="relative w-full bg-gray-200 border border-white/6 rounded-2xl overflow-hidden flex items-center justify-center aspect-[4/5]">
              <img
                src={ORIGINAL_PROFILE_IMAGE}
                alt="Onkar Raut - Video Editor"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Badge */}
            <div className="absolute -bottom-2 -right-2 md:right-0 bg-red text-white px-6 py-4 rounded-xl text-center shadow-xl">
              <div className="font-display text-3xl font-bold leading-none">3+</div>
              <div className="text-xs opacity-85 mt-1">Years of Experience</div>
            </div>
          </div>

          {/* Text */}
          <div className="reveal reveal-delay-2">
            <div className="section-label">About Me</div>
            <h2 className="section-title">
              The Editor Behind <span className="text-red">REWIRED</span>
            </h2>
            <p className="section-desc mb-6">
              I'm Onkar Raut — a video editor and content creator based in India, obsessed with crafting visuals that stop people mid-scroll. From fast-paced reels to cinematic brand stories, I bring raw footage to life with precision and intention.
            </p>

            {/* Philosophy Quote */}
            <div className="bg-gray-100 border border-white/6 border-l-4 border-l-red rounded-r-lg p-5 my-6 italic text-white/80 text-base leading-relaxed">
              "Great editing isn't just about cutting clips — it's about understanding rhythm, emotion, and storytelling. Every frame should earn its place on screen."
            </div>

            <p className="section-desc mb-8">
              I've worked with brands, YouTubers, and content creators to help them grow their audiences and produce content that actually converts. My process is collaborative, efficient, and always focused on results.
            </p>

            {/* Facts Grid */}
            <div className="grid grid-cols-3 gap-3">
              {ABOUT_FACTS.map((fact) => (
                <div
                  key={fact.label}
                  className="text-center p-4 border border-white/6 rounded-lg bg-gray-100"
                >
                  <div className="font-display text-2xl font-bold text-red leading-none">
                    {fact.number}
                  </div>
                  <div className="text-xs text-gray-600 mt-1">
                    {fact.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
