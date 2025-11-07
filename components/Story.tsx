
import React, { useState } from 'react';
import { storyPages } from '../constants/data';
import type { Page } from '../types';
import Footer from './Footer';
import ImageWithPlaceholder from './ImageWithPlaceholder';

interface StoryProps {
    navigateTo: (page: Page) => void;
}

const Story: React.FC<StoryProps> = ({ navigateTo }) => {
    const [currentPageIndex, setCurrentPageIndex] = useState(0);
    const page = storyPages[currentPageIndex];
    const isLastPage = currentPageIndex === storyPages.length - 1;
    const isCoverPage = currentPageIndex === 0;

    const previousPage = () => {
        if (currentPageIndex > 0) {
            setCurrentPageIndex(prev => prev - 1);
        }
    };

    const nextPage = () => {
        if (!isLastPage) {
            setCurrentPageIndex(prev => prev + 1);
        }
    };

    if (isCoverPage) {
        return (
            <>
                <div className="min-h-screen bg-gradient-to-br from-amber-600 via-yellow-600 to-orange-700 p-4 sm:p-8 flex items-center justify-center">
                    <div className="max-w-5xl w-full mx-auto">
                        <div className="bg-white/10 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border-4 border-white/30 p-8 sm:p-12">
                            <div className="text-center mb-8">
                                <div className="text-8xl mb-6">🫒</div>
                                <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4 drop-shadow-lg">
                                    O Ouro Líquido da Oliveira
                                </h1>
                                <div className="h-1 w-32 bg-white/50 mx-auto mb-6"></div>
                                <p className="text-2xl text-white/90 italic mb-8">
                                    Uma viagem no tempo através dos olhos de Irina
                                </p>
                            </div>
                            
                            <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 mb-8">
                                <p className="text-lg text-white leading-relaxed text-center">
                                    {page.text}
                                </p>
                            </div>
                            
                            <div className="flex justify-center">
                                <button 
                                    onClick={nextPage} 
                                    className="px-8 py-4 bg-white text-amber-700 text-xl font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition flex items-center gap-3"
                                >
                                    Começar a Viagem →
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        );
    }

    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-amber-50 to-yellow-50 p-4 sm:p-8">
                <div className="max-w-6xl w-full mx-auto">
                    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                        <div className="bg-gradient-to-r from-amber-600 to-yellow-700 p-4 sm:p-6 text-white">
                            <h2 className="text-2xl sm:text-3xl font-bold">O Ouro Líquido da Oliveira</h2>
                            <p className="text-amber-100 mt-1 text-sm sm:text-base">Uma viagem no tempo através dos olhos de Irina</p>
                        </div>
                        
                        <div className="p-4 sm:p-8">
                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                <div className="bg-gray-200 rounded-xl overflow-hidden h-64 md:h-96 flex items-center justify-center shadow-lg">
                                    <ImageWithPlaceholder src={page.image} alt={`Página ${currentPageIndex + 1}`} />
                                </div>
                                
                                <div className="flex items-center">
                                    <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-6 rounded-xl border-2 border-amber-200 shadow-md">
                                        <div className="text-amber-600 font-bold text-sm mb-3">
                                            Capítulo {currentPageIndex}
                                        </div>
                                        <p className="text-base sm:text-lg leading-relaxed text-gray-800">
                                            {page.text}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="flex justify-between items-center flex-wrap gap-4 pt-4 border-t-2 border-gray-200">
                                <button 
                                    onClick={previousPage} 
                                    disabled={currentPageIndex <= 1}
                                    className="flex items-center gap-2 px-6 py-3 bg-amber-600 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-amber-700 transition shadow-md"
                                >
                                    ← Anterior
                                </button>
                                
                                <span className="text-gray-600 font-medium">
                                    Página {currentPageIndex + 1} de {storyPages.length}
                                </span>
                                
                                {!isLastPage ? (
                                    <button 
                                        onClick={nextPage} 
                                        className="flex items-center gap-2 px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition shadow-md"
                                    >
                                        Próxima →
                                    </button>
                                ) : (
                                    <button 
                                        onClick={() => navigateTo('modules')} 
                                        className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition shadow-md"
                                    >
                                        Começar Módulos →
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Story;
