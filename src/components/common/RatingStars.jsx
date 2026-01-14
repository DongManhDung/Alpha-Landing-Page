export default function RatingStars({
  rating = 5,
  size = 12,
}) {
  return (
    <div className="flex items-center gap-[2px]">
      {[...Array(5)].map((_, index) => {
        const filled = index < rating;

        return (
          <div
            key={index}
            className={`
              flex items-center justify-center
              rounded-sm
              ${filled ? "bg-emerald-500" : "bg-gray-200"}
            `}
            style={{
              width: size + 6,
              height: size + 6,
            }}
          >
            {filled && (
              <svg
                width={size}
                height={size}
                viewBox="0 0 20 20"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.97c.3.921-.755 1.688-1.538 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.783.57-1.838-.197-1.538-1.118l1.287-3.97a1 1 0 00-.364-1.118L2.05 9.397c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.97z" />
              </svg>
            )}
          </div>
        );
      })}
    </div>
  );
}
