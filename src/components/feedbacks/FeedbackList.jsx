import { useState } from "react";

export default function FeedbackList() {
  const reviews = [
    {
      id: 1,
      name: "Anonymous",
      date: "12/08/2025",
      content:
        "Pretty sure I’m seeing improvement in the smoothness of my skin after 30 days. Will continue with confidence it’s working.",
    },
    {
      id: 2,
      name: "Anonymous",
      date: "12/01/2025",
      content: "One month and I’ve already seen a difference!",
    },
    {
      id: 3,
      name: "Donabeth Houx",
      date: "11/23/2025",
      content:
        "I LOVE THEM! My legs have gone from late stage 2 to late one!!! Oh my gosh! It’s a miracle! I no longer have to worry about elephantitis in my future! Thank you so much!!!!!",
    },
    {
      id: 4,
      name: "Dawn Camacho",
      date: "11/17/2025",
      content:
        "It took me about 60 days to notice a difference in smoothness. My husband noticed which is why I purchased another round. I'm happy.",
    },
    {
      id: 5,
      name: "Anonymous",
      date: "11/13/2025",
      content: "I have noticed a difference on my swelling.",
    },
  ];

  const [recent, setRecent] = useState("Most Recent");

  return (
    <div className="w-full bg-white">
      <div className="max-w-5xl mx-auto px-4">
        {/* SORT */}
        <div className="flex items-center gap-2 text-[#FA8A8A] text-sm mb-6">
          <select
            value={recent}
            onChange={(e) => setRecent(e.target.value)}
            className="inline-block bg-white rounded py-1 text-xs font-medium text-[#FA8A8A] focus:outline-none focus:ring-1"
          >
            <option value="Most Recent">Most Recent</option>
            <option value="Highest Rating">Highest Rating</option>
            <option value="Lowest Rating">Lowest Rating</option>
            <option value="Only Pictures">Only Pictures</option>
            <option value="Pictures First">Pictures First</option>
            <option value="Videos First">Videos First</option>
            <option value="Most Helpful">Most Helpful</option>
          </select>
        </div>

        {/* LIST */}
        <div className="space-y-10">
          {reviews.map((r) => (
            <div key={r.id} className="border-b border-[#FADDDD] pb-8">
              {/* STARS */}
              <div className="flex gap-1 mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-[#FA8A8A] text-sm">
                    ★
                  </span>
                ))}
              </div>

              {/* NAME + VERIFIED + DATE */}
              <div className="flex justify-between items-start flex-wrap gap-2">
                <div className="flex items-center gap-3">
                  {/* AVATAR ICON */}
                  <div className="relative w-8 h-8 bg-[#F5F5F5] flex items-center justify-center">
                    {/* MAIN AVATAR ICON */}
                    <span
                      className="text-[#FA8A8A] leading-none"
                      style={{
                        fontFamily: "JudgemeIcons",
                        fontSize: 24,
                        lineHeight: "36px",
                      }}
                    >
                      {"\uE007"}
                    </span>

                    {/* VERIFIED CHECK ICON */}
                    <span
                      className="absolute bottom-0 right-0 w-3 h-3 bg-[#FA8A8A] text-white flex items-center justify-center rounded-full"
                      style={{
                        fontFamily: "JudgemeIcons",
                        fontSize: 8,
                        lineHeight: "12px",
                      }}
                    >
                      {"\uE001"}
                    </span>
                  </div>

                  <span className="text-[#FA8A8A] text-sm font-medium">
                    {r.name}
                  </span>

                  <span className="bg-[#FA8A8A] text-white text-xs px-2 py-[2px] rounded">
                    Verified
                  </span>
                </div>

                <span className="text-xs text-gray-400">{r.date}</span>
              </div>

              {/* CONTENT */}
              <p className="text-sm text-gray-900 mt-4 leading-relaxed text-left">
                {r.content}
              </p>
            </div>
          ))}
        </div>

        {/* PAGINATION */}
        <div className="flex justify-center gap-4 mt-10 text-sm text-[#FA8A8A]">
          <span className="font-bold text-gray-700">1</span>
          <button>2</button>
          <button>3</button>
          <button>›</button>
          <button>»</button>
        </div>
      </div>
    </div>
  );
}
