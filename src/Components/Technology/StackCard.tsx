
import type { TechTypes } from '../types/TechTypes';
import { IoClose } from 'react-icons/io5';

interface StackCardProps {
    selectedTech: TechTypes[];
    handleRemoveFromStack: (id: number) => void;
    handleRemoveAll: () => void; 
}

const StackCard = ({ selectedTech, handleRemoveFromStack,
    handleRemoveAll }: StackCardProps) => {

    return (
        <div className="border border-[#F1F5F9] rounded-2xl p-7 shadow-sm bg-white">
          
            
            <div>
    <h3 className="font-bold text-2xl text-[#0F172A]">
        Your Stack
    </h3>

    {selectedTech.length === 0 ? (
        <p className="text-sm text-[#64748B] mt-1">
            No technologies selected yet
        </p>
    ) : (
        <p className="text-sm text-[#64748B] mt-1">
            {selectedTech.length} technologies selected
        </p>
    )}
</div>


           
            <div className="mt-6">

                {selectedTech.length === 0 ? (

                    
                    <div className="min-h-40 flex items-center justify-center">
                        {/* <p>No Technologies selected yet</p> */}
                        <p className="text-[#94A3B8] text-sm border border-dashed border-[#CBD5E1] rounded-xl px-6 py-4">
                            Your Stack is empty
                        </p>
                    </div>

                ) : (

                    <div>

                        
                        <div className="space-y-3">

                            {selectedTech.map((technology) => (

                                <div
                                    key={technology.id}
                                    className="flex items-center gap-3 border border-[#F1F5F9] rounded-xl p-3 hover:border-[#E2E8F0] hover:shadow-sm transition-all duration-200"
                                >

                                    
                                    <div className="w-10 h-10 flex items-center justify-center shrink-0">
                                        <img
                                            src={technology.icon}
                                            alt={technology.name}
                                            className="w-9 h-9 object-contain"
                                        />
                                    </div>


                                    
                                    <div className="min-w-0 flex-1">

                                        <h3 className="font-semibold text-[#0F172A] truncate">
                                            {technology.name}
                                        </h3>

                                        <p className="text-[#94A3B8] text-xs mt-0.5">
                                            {technology.category}
                                        </p>

                                    </div>


                                    
                                    <button onClick={() => handleRemoveFromStack(technology.id)}
                                        className="text-[#94A3B8] hover:text-[#D82C20] transition-colors duration-200"
                                        title={`Remove ${technology.name}`}
                                    >
                                        <IoClose className="text-2xl" />
                                    </button>

                                </div>

                            ))}

                        </div>


                        
                        <button onClick={handleRemoveAll}
                            className="text-[#D82C20] font-semibold border border-[#ED8C85] hover:bg-[#FFF1F0] rounded-lg mt-5 w-full py-2.5 transition-colors duration-200"
                        >
                            Remove All
                        </button>

                    </div>

                )}

            </div>
            </div>

        
    );
};

export default StackCard;