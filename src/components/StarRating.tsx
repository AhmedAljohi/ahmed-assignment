const StarRating = ({ rating }: { rating: number }) => {
  const full = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  const empty = 5 - full - (hasHalf ? 1 : 0);

  return (
    <span className="inline-flex items-center gap-px" aria-label={`Rating: ${rating} out of 5`}>
      {Array.from({ length: full }, (_, i) => (
        <span key={`full-${i}`} className="text-[#eab308]" aria-hidden>★</span>
      ))}
      {hasHalf && (
        <span className="relative inline-block w-4 h-4 text-[14px] leading-none">
          <span className="text-gray-300 absolute inset-0" aria-hidden>★</span>
          <span
            className="text-[#eab308] absolute inset-0 overflow-hidden star-half-fill"
            aria-hidden
          >
            ★
          </span>
        </span>
      )}
      {Array.from({ length: empty }, (_, i) => (
        <span key={`empty-${i}`} className="text-gray-300" aria-hidden>★</span>
      ))}
    </span>
  );
};

export default StarRating;