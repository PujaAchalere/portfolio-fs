import { useState } from "react";
import { createPortal } from "react-dom";
import { Reveal } from "../Reveal";
import { X, Maximize2 } from "lucide-react";

// ===============================
// MAIN IMAGES
// ===============================

import img1 from "../../assets/images/works/images/1.jpg";
import img2 from "../../assets/images/works/images/2.jpg";
import img3 from "../../assets/images/works/images/3.jpg";
import img4 from "../../assets/images/works/images/4.jpg";
import img5 from "../../assets/images/works/images/5.jpg";
import img6 from "../../assets/images/works/images/6.jpg";
import img7 from "../../assets/images/works/images/7.png";
import prl9 from "../../assets/images/works/images/PRL 2.jpg";
import prl2 from "../../assets/images/works/images/PRL 5.jpg";
import prl5 from "../../assets/images/works/images/PRL 9.jpg";

// ===============================
// FREELANCING THUMBNAILS
// ===============================

import img8 from "../../assets/images/works/images/Freelance.jpg";
import img9 from "../../assets/images/works/images/Freelance 2.jpg";
import img10 from "../../assets/images/works/images/Freelance 3.jpg";
import img11 from "../../assets/images/works/images/Freelance 4.jpg";
import img12 from "../../assets/images/works/images/Freelance 7.jpg";
import img13 from "../../assets/images/works/images/Freelance 6.jpg";
import img14 from "../../assets/images/works/images/Freelance 9.jpg";

// ===============================
// MAIN VIDEOS
// ===============================

import video1 from "../../assets/images/works/videos/Video 1.mp4";
import video2 from "../../assets/images/works/videos/Video 2.mp4";

// ===============================
// FREELANCING VIDEOS
// ===============================

import freelanceVideo1 from "../../assets/images/works/videos/Farm Stay.mp4";
import freelanceVideo2 from "../../assets/images/works/videos/Goa Reel 2.mp4";
import freelanceVideo3 from "../../assets/images/works/videos/Jungle.mp4";
import freelanceVideo4 from "../../assets/images/works/videos/Jungle Vilas Reel.mp4";
import freelanceVideo5 from "../../assets/images/works/videos/Jungle Vilas.mp4";
import freelanceVideo6 from "../../assets/images/works/videos/kota reel.mp4";
import freelanceVideo7 from "../../assets/images/works/videos/Ladies Night.mp4";
import rpmArabianNight from "../../assets/images/works/videos/RPM Arabian Night.mp4";
import samudraVideo from "../../assets/images/works/videos/Samudra.mp4";
import saturdayNight from "../../assets/images/works/videos/Saturday Night.mp4";
import snapInsta1 from "../../assets/images/works/videos/Video 5.mp4";
import snapInsta2 from "../../assets/images/works/videos/Video 4.mp4";
import snapInsta3 from "../../assets/images/works/videos/Video 3.mp4";
import sundayMadness from "../../assets/images/works/videos/Sunday Madness.mp4";

const TABS = [
  "All",
  "Healthcare",
  "Social Media",
  "Design",
  "Video",
  "Freelancing",
  // "Rega",
  // "Jungle Vilas"
];

const WORKS = [
  {
    id: 1,
    title: "Child Health First",
    cat: "Social Media",
    image: img1,
  },

  {
    id: 2,
    title: "Expert Skin Care",
    cat: "Healthcare",
    image: img2,
  },
  {
    id: 26,
    title: "Glow with Confidence",
    cat: "Healthcare",
    image: img3,
  },

  {
    id: 3,
    title: "Expert Skin Advice",
    cat: "Healthcare",
    video: video2,
  },

  {
    id: 4,
    title: "Brain Tumors: Expert Guidance",
    cat: "Healthcare",
    image: img5,
  },

  {
    id: 5,
    title: "Healthy Sleep, Healthy Growth",
    cat: "Healthcare",
    image: img4,
  },

  {
    id: 6,
    title: "Patient Story",
    cat: "Video",
    video: video1,
  },

  {
    id: 7,
    title: "Doctor Branding & Social Pack",
    cat: "Design",
    image: img7,
  },

  {
    id: 8,
    title: "Social Media Carousel",
    cat: "Design",
    image: img6,
  },

  // ===============================
  // FREELANCING THUMBNAILS
  // ===============================

  {
    id: 9,
    title: "A Stay to Remember",
    cat: "Freelancing",
    image: img8,
  },

  {
    id: 10,
    title: "Stay. Relax. Repeat.",
    cat: "Social Media",
    image: img9,
  },

  {
    id: 11,
    title: "Jungle Safari",
    cat: "Social Media",
    image: img10,
  },

  {
    id: 12,
    title: "Wildlife Safari Experience",
    cat: "Freelancing",
    image: img11,
  },

  {
    id: 13,
    title: "Daily Dose of Humor",
    cat: "Freelancing",
    image: img12,
  },

  {
    id: 14,
    title: "Stay in Paradise",
    cat: "Freelancing",
    image: img13,
  },

  {
    id: 15,
    title: "The Menu Made Me Do It",
    cat: "Freelancing",
    image: img14,
  },

  // ===============================
  // FREELANCING VIDEOS
  // ===============================

  {
    id: 16,
    title: "Farm Stay Overview",
    cat: "Freelancing",
    video: freelanceVideo1,
  },

  {
    id: 17,
    title: "Goa Awaits",
    cat: "Video",
    video: freelanceVideo2,
  },

  {
    id: 18,
    title: "Life at Jungle Vilas",
    cat: "Freelancing",
    video: freelanceVideo3,
  },

  {
    id: 19,
    title: "Into the Wild: Jungle Vilas",
    cat: "Video",
    video: freelanceVideo4,
  },

  {
    id: 20,
    title: "Moments at Jungle Vilas",
    cat: "Freelancing",
    video: freelanceVideo5,
  },

  {
    id: 21,
    title: "A Table Full of Love",
    cat: "Video",
    video: freelanceVideo6,
  },

  {
    id: 22,
    title: "Ladies Night",
    cat: "Video",
    video: freelanceVideo7,
  },
  {
    id: 23,
    title: "PRL Machines",
    cat: "Social Media",
    image: prl9,
  },

  {
    id: 24,
    title: "PRL Machines",
    cat: "Social Media",
    image: prl2,
  },

  {
    id: 25,
    title: "PRL Machines",
    cat: "Social Media",
    image: prl5,
  },
  {
  id: 27,
  title: "RPM Arabian Night",
  cat: "Video",
  video: rpmArabianNight,
},

{
  id: 28,
  title: "Samudra",
  cat: "Freelancing",
  video: samudraVideo,
},

{
  id: 29,
  title: "Saturday Night",
  cat: "Video",
  video: saturdayNight,
},

{
  id: 30,
  title: "Ladakh Rides",
  cat: "Video",
  video: snapInsta1,
},

{
  id: 31,
  title: "Techno Night",
  cat: "Video",
  video: snapInsta2,
},

{
  id: 32,
  title: "Sexy Saturday",
  cat: "Video",
  video: snapInsta3,
},

{
  id: 33,
  title: "Sunday Madness",
  cat: "Video",
  video: sundayMadness,
}
];

export const Work = () => {
  const [tab, setTab] = useState("All");
  const [lightbox, setLightbox] = useState(null);

  const filtered =
    tab === "All" ? WORKS : WORKS.filter((w) => w.cat === tab);

  return (
    <section id="work" className="py-28 lg:py-36">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">

        {/* Heading */}
        <Reveal>
          <span className="eyebrow">
            <span className="dot" /> My Work
          </span>
        </Reveal>

        <Reveal delay={100}>
          <h2 className="font-bebas text-5xl sm:text-6xl lg:text-7xl text-white leading-[0.95] mt-5">
            Selected <span className="text-[var(--accent)]">Projects</span>
          </h2>
        </Reveal>

        {/* Tabs */}
        <Reveal delay={160}>
          <div className="flex flex-wrap gap-2 mt-10" role="tablist">
            {TABS.map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-5 py-2.5 rounded-full font-syne text-[12px] tracking-[0.18em] uppercase border transition-all ${tab === t
                  ? "border-[var(--accent)] text-white bg-[var(--accent)]/15"
                  : "border-white/15 text-white/65 hover:border-white/35 hover:text-white"
                  }`}
              >
                {t}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {filtered.map((w, i) => (
            <Reveal delay={i * 60} key={w.id}>
              <button
                onClick={() => setLightbox(w)}
                className="group relative w-full aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 bg-black lift text-left"
              >
                {/* IMAGE */}
                {w.image && (
                  <img
                    src={w.image}
                    alt={w.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                )}

                {/* VIDEO */}
                {w.video && (
                  <video
                    src={w.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-300" />

                {/* Category */}
                <div className="absolute top-5 left-5 text-[10px] font-syne tracking-[0.25em] uppercase text-white/70 z-10">
                  {w.cat}
                </div>

                {/* Title */}
                <div className="absolute bottom-5 left-5 right-5 z-10">
                  <div className="font-bebas text-3xl text-white leading-tight">
                    {w.title}
                  </div>

                  <div className="font-dm text-[11px] text-white/55 mt-1">
                    Case study · 2026
                  </div>
                </div>

                {/* Expand Icon */}
                <div className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10">
                  <Maximize2 size={14} color="#fff" />
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* LIGHTBOX */}
      {lightbox &&
        createPortal(
          <div
            className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-md flex items-center justify-center p-6"
            onClick={() => setLightbox(null)}
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightbox(null);
              }}
              className="absolute top-6 right-6 z-[100] w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white"
            >
              <X size={18} />
            </button>

            {/* CONTENT */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative inline-block max-w-[95vw] max-h-[90vh] rounded-2xl overflow-hidden border border-white/10 bg-black"
            >
              {/* IMAGE */}
              {lightbox.image && !lightbox.video && (
                <img
                  src={lightbox.image}
                  alt={lightbox.title}
                  className="block max-w-[95vw] max-h-[90vh] object-contain object-center"
                />
              )}

              {/* VIDEO */}
              {lightbox.video && (
                <video
                  src={lightbox.video}
                  controls
                  autoPlay
                  className="block max-w-[95vw] max-h-[90vh] rounded-2xl object-contain bg-black"
                />
              )}
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

              {/* Text */}
              <div className="absolute bottom-0 left-0 right-0 z-10 p-6 sm:p-8 pointer-events-none">
                <div className="text-[10px] sm:text-xs font-syne tracking-[0.25em] uppercase text-white/70">
                  {lightbox.cat}
                </div>

                <div className="font-bebas text-3xl sm:text-5xl lg:text-6xl text-white mt-2 leading-[0.9]">
                  {lightbox.title}
                </div>

                <p className="font-dm text-white/70 text-sm sm:text-base mt-3 max-w-md">
                  A representative project from the{" "}
                  {lightbox.cat.toLowerCase()} vertical.
                </p>
              </div>
            </div>
          </div>,
          document.body
        )}
    </section>
  );
};