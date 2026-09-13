const LoadingSpinner = () => {
  return (
    <div className="flex min-h-[300px] items-center justify-center">
      <div className="relative h-16 w-16">
        {/* Outer spinning ring */}
        <div className="absolute inset-0 animate-spin rounded-full border-4 border-gray-200 border-t-[#D91B7E]"></div>

        {/* Inner gradient ring */}
        <div className="absolute inset-2 animate-spin rounded-full border-4 border-transparent border-r-[#FF5722] border-b-[#7C3AED] [animation-direction:reverse] [animation-duration:1.5s]"></div>

        {/* Center dot */}
        <div className="absolute inset-0 m-auto h-3 w-3 animate-pulse rounded-full bg-[#D91B7E]"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;