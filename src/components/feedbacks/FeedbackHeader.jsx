import { useState, useRef } from "react";

export default function FeedbackHeader() {
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [selectedFile, setSelectedFile] = useState(null);
  const [displayName, setDisplayName] = useState("John S.");
  const fileInputRef = useRef(null);

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const removeFile = () => {
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="w-full bg-white py-16">
      <div className="max-w-5xl mx-auto px-4 text-center">
        {/* TRUSTPILOT SCORE IMAGE */}
        <div className="flex justify-center mb-6">
          <img
            src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Trustpilot_Score.png?v=1752349211"
            alt="Trustpilot score"
            className="h-6 object-contain"
          />
        </div>

        {/* TITLE */}
        <h2 className="font-serif text-3xl md:text-2xl mb-4">
          Real Women, Real Results: 93,000+ Transformations
        </h2>

        {/* SUBTITLE */}
        <p className="text-lg text-gray-700 mb-10">
          All reviews verified from actual paying customers
        </p>

        {/* CUSTOMER REVIEWS */}
        <h3 className="text-xl font-serif mb-8">Customer Reviews</h3>

        {/* REVIEWS SUMMARY */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          {/* LEFT */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex gap-0.5 items-center">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="text-[#FA8A8A] text-lg">
                  ★
                </span>
              ))}
              <span className="text-sm ml-2">
                <strong>4.67 out of 5</strong>
              </span>
            </div>

            <div className="flex items-center gap-2 text-sm mt-1">
              <span>Based on 110 reviews</span>
              <img
                src="https://judgeme-public-images.imgix.net/judgeme/logos/verified-checkmark.svg"
                className="w-4 h-4"
              />
            </div>
          </div>

          {/* CENTER */}
          <div className="space-y-2 max-w-xs mx-auto w-full">
            {[84, 17, 8, 1, 0].map((p, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-16 text-right text-[#FA8A8A] text-sm">
                  {"★★★★★".slice(0, 5 - i)}
                </div>
                <div className="flex-1 h-3 bg-gray-200 rounded-full">
                  <div
                    className="h-full bg-[#FA8A8A]"
                    style={{ width: `${p}%` }}
                  />
                </div>
                <span className="w-6 text-xs text-right">{p}</span>
              </div>
            ))}
          </div>

          {/* RIGHT CTA */}
          <div className="flex justify-center md:justify-end">
            <button
              onClick={() => setOpen(!open)}
              className="bg-[#FA8A8A] text-white px-10 py-2 text-sm font-medium hover:opacity-90 transition"
            >
              {open ? "Cancel Review" : "Write a Review"}
            </button>
          </div>
        </div>

        {/* COLLAPSIBLE FORM */}
        <div
          className={`
            overflow-hidden transition-all duration-500 ease-in-out
            ${open ? "max-h-[900px] opacity-100 mt-8" : "max-h-0 opacity-0"}
          `}
        >
          <div className="max-w-2xl mx-auto px-4">
            <h3 className="font-bold text-xl mb-3">Write a review</h3>

            {/* RATING */}
            <div className="mb-4">
              <p className="text-sm mb-1">Rating</p>
              <div className="flex justify-center gap-1 text-2xl cursor-pointer">
                {Array.from({ length: 5 }).map((_, i) => {
                  const starValue = i + 1;
                  return (
                    <span
                      key={i}
                      className={
                        starValue <= (hoverRating || rating)
                          ? "text-[#FA8A8A]"
                          : "text-gray-300"
                      }
                      onMouseEnter={() => setHoverRating(starValue)}
                      onMouseLeave={() => setHoverRating(0)}
                      onClick={() => setRating(starValue)}
                    >
                      ★
                    </span>
                  );
                })}
              </div>
            </div>

            {/* TEXTAREA */}
            <textarea
              placeholder="Start writing here..."
              className="w-full border border-gray-300 p-4 text-sm mb-3"
              rows={4}
            />

            {/* UPLOAD */}
            <div className="mb-6">
              <p className="text-sm mb-2">Picture/Video (optional)</p>

              {/* Hidden file input */}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*,video/*"
                onChange={handleFileSelect}
                className="hidden"
              />

              {!selectedFile ? (
                <div
                  onClick={triggerFileInput}
                  className="w-32 h-32 mx-auto border border-solid border-gray-300 flex flex-col items-center justify-center text-gray-400 cursor-pointer hover:border-gray-400 hover:bg-gray-50 transition-all"
                >
                  <svg
                    className="w-8 h-8 mb-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                </div>
              ) : (
                <div className="mx-auto max-w-xs">
                  {/* File preview */}
                  <div className="relative">
                    {selectedFile.type.startsWith("image/") ? (
                      <img
                        src={URL.createObjectURL(selectedFile)}
                        alt="Preview"
                        className="w-32 h-32 mx-auto object-cover rounded border"
                      />
                    ) : (
                      <div className="w-32 h-32 mx-auto bg-gray-100 border rounded flex flex-col items-center justify-center">
                        <svg
                          className="w-8 h-8 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                          />
                        </svg>
                        <span className="text-xs text-gray-600 mt-1">
                          Video
                        </span>
                      </div>
                    )}

                    {/* Remove button */}
                    <button
                      onClick={removeFile}
                      className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs hover:bg-red-600 transition-colors"
                    >
                      ✕
                    </button>
                  </div>

                  {/* File info */}
                  <p className="text-xs text-gray-600 mt-2 text-center truncate">
                    {selectedFile.name}
                  </p>
                  <p className="text-xs text-gray-400 text-center">
                    {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
              )}
            </div>

            {/* DISPLAY NAME DESCRIPTION */}
            <div className="mb-1 text-left max-w-md mx-auto justify-center items-center flex">
              <p className="text-sm text-gray-600">
                Display name (displayed publicly like{" "}
                <select
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  className="inline-block bg-white rounded py-1 text-xs font-medium text-[#FA8A8A] focus:outline-none focus:ring-1"
                >
                  <option value="John Smith">John Smith</option>
                  <option value="John S.">John S.</option>
                  <option value="John">John</option>
                  <option value="J.S.">J.S.</option>
                  <option value="Anonymous">Anonymous</option>
                </select>
                )
              </p>
            </div>

            {/* NAME */}
            <input
              placeholder="Display name"
              className="w-full border p-3 text-sm mb-4"
            />

            {/* EMAIL DESCRIPTION */}
            <div className="mb-1 text-left max-w-md mx-auto justify-center items-center flex">
              <p className="text-sm text-gray-600">
                Email address
              </p>
            </div>

            {/* EMAIL */}
            <input
              placeholder="Your email address"
              className="w-full border p-3 text-sm mb-4"
            />

            {/* NOTE */}
            <p className="text-xs text-gray-500 mb-6">
              How we use your data: We'll only contact you about the review you
              left, and only if necessary. By submitting your review, you agree
              to Judge.me's{" "}
              <span className="text-blue-600 underline">terms</span>,{" "}
              <span className="text-blue-600 underline">privacy</span> and{" "}
              <span className="text-blue-600 underline">content</span> policies.
            </p>

            {/* ACTIONS */}
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setOpen(false)}
                className="border border-[#FA8A8A] text-[#FA8A8A] px-6 py-2 text-sm"
              >
                Cancel review
              </button>
              <button className="bg-[#FA8A8A] text-white px-6 py-2 text-sm">
                Submit Review
              </button>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-12 border-t" />

        {/* BADGE */}
        <div className="flex justify-center">
          <div className="flex flex-col items-center">
            <img
              src="https://judgeme-public-images.imgix.net/judgeme/medals-v2-2025-rebranding/auth/diamond.svg"
              className="h-20 md:h-24"
            />
            <span className="text-[#2F6EDB] text-sm mt-1">100.0</span>
          </div>
        </div>
      </div>
    </div>
  );
}
