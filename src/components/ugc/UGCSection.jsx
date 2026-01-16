import { useState, useEffect } from "react";

export default function UGCSection() {
  const VIDEOS = [
    {
      video:
        "https://cdn.shopify.com/videos/c/o/v/014b7db24d12443791bd22d345637ccc.mp4",
      thumb:
        "https://trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_12.40.11.png?v=1752486039",
    },
    {
      video:
        "https://cdn.shopify.com/videos/c/o/v/4eecdc1058f349628e1c50ba81112b54.mov",
      thumb:
        "https://trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_16.12.02.png?v=1752498744",
    },
    {
      video:
        "https://cdn.shopify.com/videos/c/o/v/2967808b09114feb9616d295fd2f3557.mp4",
      thumb:
        "https://trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_15.43.04.png?v=1752497038",
    },
    {
      video:
        "https://cdn.shopify.com/videos/c/o/v/88efaa94523742bdb8f980d66600cde2.mp4",
      thumb:
        "https://trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_15.43.34.png?v=1752497063",
    },
    {
      video:
        "https://cdn.shopify.com/videos/c/o/v/a7bce8da322747e08ef1ce7c87317c30.mp4",
      thumb:
        "https://trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_16.11.50.png?v=1752498777",
    },
    {
      video:
        "https://cdn.shopify.com/videos/c/o/v/3a117937ae264508b440a6972ebcb6a1.mp4",
      thumb:
        "https://trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_15.43.10.png?v=1752497092",
    },
    {
      video:
        "https://cdn.shopify.com/videos/c/o/v/27085ed5be5c4c38ad579f0fdae8aefa.mp4",
      thumb:
        "https://trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_15.44.54.png?v=1752497118",
    },
    {
      video:
        "https://cdn.shopify.com/videos/c/o/v/a4ab9e815f3446ea8b84292627ec2a10.mp4",
      thumb:
        "https://trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_15.46.37.png?v=1752497216",
    },
    {
      video:
        "https://cdn.shopify.com/videos/c/o/v/68b2aa06fab44d968723e052a14d87d5.mp4",
      thumb:
        "https://trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_15.45.36.png?v=1752497166",
    },
    {
      video:
        "https://cdn.shopify.com/videos/c/o/v/0ec8de99a9c3459da6c53e18c0eeab3c.mp4",
      thumb:
        "https://trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_15.47.12.png?v=1752497252",
    },
  ];

  const [visible, setVisible] = useState(4);
  const [index, setIndex] = useState(0);
  const maxIndex = VIDEOS.length - visible;

  // Handle responsive visible count
  useEffect(() => {
    const handleResize = () => {
      const newVisible = window.innerWidth < 768 ? 1 : 4;
      setVisible(newVisible);
      // Reset index if current index would be out of bounds
      setIndex(prevIndex => {
        const newMaxIndex = VIDEOS.length - newVisible;
        return prevIndex > newMaxIndex ? newMaxIndex : prevIndex;
      });
    };

    // Set initial value
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, [VIDEOS.length]);

  const next = () => setIndex((i) => Math.min(i + 1, maxIndex));
  const prev = () => setIndex((i) => Math.max(i - 1, 0));

  const progress = ((index + 1) / (maxIndex + 1)) * 100;

  return (
    <section className="w-screen bg-[#F7F2E8] py-10 sm:py-10 lg:py-10 overflow-hidden relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
      <div className="max-w-6xl mx-auto px-4">
        {/* HEADER */}
        <div className="flex justify-center mb-6">
          <img
            src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Trustpilot_review_2.png?v=1752485383"
            alt="Trustpilot"
            className="
            h-7 sm:h-8 md:h-9 
            max-w-full 
            object-contain
            "
          />
        </div>

        {/* TITLE */}
        <h2 className="text-center font-serif text-2xl sm:text-2xl md:text-3xl mb-10">
          See The Stories of Sculptique™ Women Firsthand
        </h2>

        {/* SLIDER */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${index * (100 / visible)}%)`,
            }}
          >
            {VIDEOS.map((item, i) => (
              <VideoCard key={i} item={item} />
            ))}
          </div>
        </div>

        {/* NAVIGATION */}
        <div className="mt-6 flex items-center gap-4">
          {/* PROGRESS */}
          <div className="flex-1 h-[3px] bg-gray-300 relative">
            <div
              className="absolute left-0 top-0 h-full bg-emerald-600 transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>

          <button
            onClick={prev}
            disabled={index === 0}
            className="cursor-pointer"
          >
            <img
              src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/iconamoon_arrow-up-2-thin_55aa38bb-cb5e-4608-9097-927814968771.png?v=1758716845"
              className="w-6 opacity-70"
            />
          </button>

          <button
            onClick={next}
            disabled={index === maxIndex}
            className="cursor-pointer"
          >
            <img
              src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/iconamoon_arrow-up-2-thin_55aa38bb-cb5e-4608-9097-927814968771.png?v=1758716845"
              className="w-6 -rotate-180 opacity-70"
            />
          </button>
        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-col items-center">
          <button className="bg-black text-white px-10 py-4 rounded-md text-sm font-medium">
            Try Lymphatic Drainage Risk-Free
          </button>

          <div className="mt-3 flex items-center gap-2 text-sm">
            <img
              src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/60-days_11622780_1_1.png?v=1752388395"
              className="w-5 h-5"
            />
            60-Day Money-Back Guarantee
          </div>
        </div>
      </div>
    </section>
  );
}

/* VIDEO CARD */
function VideoCard({ item }) {
  const [play, setPlay] = useState(false);

  return (
    <div className="w-full md:w-1/4 px-2 shrink-0">
      <div className="relative rounded-xl overflow-hidden bg-black">
        {/* ASPECT RATIO */}
        <div className="pt-[177.77%] pointer-events-none" /> {/* 16 / 9 = 1.7777 */}
        {/* THUMB */}
        {!play && (
          <>
            <img
              src={item.thumb}
              className="absolute inset-0 w-full h-full object-cover z-10"
            />
            <button
              onClick={() => setPlay(true)}
              className="absolute inset-0 z-1 flex items-center justify-center"
            >
              <img
                src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/mingcute_play-fill.png?v=1752485519"
                className="w-14 h-14 z-10"
              />
            </button>
          </>
        )}
        {/* VIDEO */}
        {play && (
          <video
            src={item.video}
            controls
            autoPlay
            playsInline
            preload="metadata"
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
      </div>
    </div>
  );
}
