
import React, { useState } from 'react';
import type { Page } from '../types';
import Footer from './Footer';

interface IntroProps {
    navigateTo: (page: Page) => void;
}

const Intro: React.FC<IntroProps> = ({ navigateTo }) => {
    const [showVideo, setShowVideo] = useState(false);
    const [showAudio, setShowAudio] = useState(false);

    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 p-8 flex items-center justify-center">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-700 mb-4">
                        Ouro Líquido
                    </h1>
                    <p className="text-2xl md:text-3xl text-gray-700 mb-2">Uma Viagem pela História Milenar do Azeite</p>
                    <p className="text-lg md:text-xl text-gray-600 mb-12">Mais do que um Alimento, um Símbolo</p>

                    <div className="bg-white rounded-2xl shadow-2xl p-8 mb-8 text-left">
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            O azeite é um pilar incontornável da gastronomia mediterrânea, mas a sua influência transcende a cozinha, enraizando-se profundamente na herança cultural da humanidade. Desde a antiguidade, as suas gotas douradas têm temperado não só pratos, mas também rituais, mitos e a própria história.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Este documento convida-o a uma viagem no tempo, explorando as origens ancestrais da oliveira, o seu papel central nas grandes civilizações da Antiguidade e o seu profundo simbolismo sagrado nas principais religiões do mundo.
                        </p>
                    </div>
                    
                    <button
                        onClick={() => navigateTo('story')}
                        className="px-8 py-4 bg-gradient-to-r from-amber-600 to-yellow-700 text-white text-xl font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition"
                    >
                        Começar a Viagem
                    </button>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Intro;
