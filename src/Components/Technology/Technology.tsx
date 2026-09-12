
import React, { use, useState } from 'react';

import type { TechTypes } from '../types/TechTypes';

import TechCard from './TechCard';
import StackCard from './StackCard';

import { toast } from 'react-toastify';


interface TechnologyProps {
    TechFetchPromise: Promise<TechTypes[]>;
}


const Technology = ({ TechFetchPromise }: TechnologyProps) => {

    const technologies = use(TechFetchPromise);

    const [selectedTech, setSelectedTech] = useState<TechTypes[]>([]);


    const handleAddToStack = (technology: TechTypes) => {

        const alreadyExists = selectedTech.some(
            (tech) => tech.id === technology.id
        );

        if (alreadyExists) {
            toast.error(`${technology.name} is already in your stack!`);
            return;
        }

        setSelectedTech((prev) => [...prev, technology]);

        toast.success(`${technology.name} added to your stack!`);
    };


    const handleRemoveFromStack = (id: number) => {

        const technology = selectedTech.find(
            (tech) => tech.id === id
        );

        setSelectedTech((prev) =>
            prev.filter((technology) => technology.id !== id)
        );

        if (technology) {
            toast.success(`${technology.name} removed from your stack`);
        }
    };


    const handleRemoveAll = () => {

        if (selectedTech.length === 0) {
            return;
        }

        setSelectedTech([]);

        toast.success('All technologies removed from your stack');
    };


    return (

        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-12">

            
            <h1 className="text-center lg:text-left font-bold text-2xl sm:text-3xl lg:text-4xl mb-3">

                Explore the{" "}

                <span className="bg-[linear-gradient(90deg,#EC4899_0%,#8B5CF6_100%)] bg-clip-text text-transparent">

                    Technologies

                </span>

            </h1>


            
            <p className="text-[#64748B] mb-8 text-xs sm:text-sm lg:text-lg text-center lg:text-left">

                Pick one technology per category to build your ideal stack.

            </p>


            
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">


                
                <div className="xl:col-span-2">

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-6">

                        {technologies.map((technology) => (

                            <TechCard
                                key={technology.id}
                                technology={technology}
                                handleAddToStack={handleAddToStack}
                                selectedTech={selectedTech}
                            />

                        ))}

                    </div>

                </div>


                
                <div className="xl:col-span-1">

                    <StackCard
                        selectedTech={selectedTech}
                        handleRemoveFromStack={handleRemoveFromStack}
                        handleRemoveAll={handleRemoveAll}
                    />

                </div>

            </div>

        </section>
    );
};


export default Technology;