import React from 'react';
import BannerLogo from "../../assets/banner-stack.png";

const Banner = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 py-12 md:py-16 lg:py-20">

            <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-6">

                
                <div className="w-full md:w-1/2 text-center md:text-left">

                    <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-5">
                        Build Your Ideal{" "}
                        <br className="hidden sm:block" />

                        <span className="bg-[linear-gradient(90deg,#FF5722_0%,#D81B7E_50%,#7C3AED_100%)] bg-clip-text text-transparent">
                            Development Stack
                        </span>
                    </h1>

                    <p className="text-[#475569] text-base md:text-lg mb-6 max-w-xl mx-auto md:mx-0">
                        Explore frontend, backend, database, and tooling options,
                        compare them side by side, and put together the stack that
                        fits your next project.
                    </p>

                    
                    <div className="flex justify-center md:justify-start gap-3 sm:gap-4">

                        <button
                            className="text-white bg-[linear-gradient(90deg,#F97316_0%,#EC4899_100%)] rounded-md px-5 py-2.5 font-medium text-sm transition"
                        >
                            Explore Technologies
                        </button>

                        <button
                            className="bg-white text-[#374151] border border-[#E5E7EB] rounded-md px-8 py-2.5 text-sm transition hover:bg-gray-50"
                        >
                            Learn More
                        </button>

                    </div>

                </div>


                {/* Right Image */}
                <div className="w-full md:w-1/2 flex justify-center">

                    <img
                        src={BannerLogo}
                        alt="Development Stack"
                        className="w-64 sm:w-80 md:w-full md:max-w-lg object-contain"
                    />

                </div>

            </div>

        </section>
    );
};

export default Banner;