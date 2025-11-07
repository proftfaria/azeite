import React from 'react';
import { modules } from '../constants/data';
import type { Page, ModuleProgress } from '../types';
import Footer from './Footer';

interface ModuleListProps {
    navigateTo: (page: Page, data?: any) => void;
    moduleProgress: ModuleProgress;
}

const ModuleList: React.FC<ModuleListProps> = ({ navigateTo, moduleProgress }) => {
    // FIX: Coerce module progress scores to numbers to prevent type errors.
    // The error on line 15 indicates that `totalModuleScore` might not be inferred as a number,
    // which can happen if TypeScript infers values from `Object.values` as `unknown`.
    const totalModuleScore = Object.values(moduleProgress).reduce((sum, score) => sum + (Number(score) || 0), 0);
    const maxModuleScore = modules.length * 100;
    const modulePercentage = maxModuleScore > 0 ? Math.round((totalModuleScore / maxModuleScore) * 100) : 0;
    const completedModules = Object.values(moduleProgress).filter(score => Number(score) > 0).length;

    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 p-4 sm:p-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">Módulos de Aprendizagem</h2>
                        <p className="text-xl text-gray-600">Escolha um módulo para começar a explorar</p>
                        
                        {completedModules > 0 && (
                            <div className="mt-6 inline-block bg-white rounded-xl shadow-lg p-6">
                                <p className="text-lg font-semibold text-gray-700 mb-2">Progresso dos Módulos</p>
                                <div className="flex items-center gap-4">
                                    <div className="text-3xl font-bold text-amber-600">
                                        {totalModuleScore}/{maxModuleScore}
                                    </div>
                                    <div className="flex-1 bg-gray-200 rounded-full h-4 min-w-[200px]">
                                        <div 
                                            className="bg-gradient-to-r from-amber-500 to-yellow-600 h-4 rounded-full transition-all duration-500"
                                            style={{ width: `${modulePercentage}%` }}
                                        ></div>
                                    </div>
                                    <span className="text-xl font-bold text-gray-700">{modulePercentage}%</span>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                        {modules.map((module, idx) => {
                            const score = moduleProgress[module.id] || 0;
                            const isCompleted = score > 0;
                            
                            return (
                                <div 
                                    key={module.id} 
                                    onClick={() => navigateTo('module', idx)} 
                                    className="bg-white rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col"
                                >
                                    <div className={`bg-gradient-to-r ${module.color} p-6 text-white`}>
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center gap-3">
                                                <span className="text-3xl">{module.icon}</span>
                                                <span className="text-2xl font-bold">Módulo {idx + 1}</span>
                                            </div>
                                            {isCompleted && <span className="text-3xl font-bold text-white">✓</span>}
                                        </div>
                                        {isCompleted && (
                                            <div className="text-sm font-semibold bg-white/20 rounded px-2 py-1 inline-block">
                                                Pontuação: {score}/100
                                            </div>
                                        )}
                                    </div>
                                    <div className="p-6 flex-grow">
                                        <h3 className="text-xl font-bold text-gray-800 mb-3">{module.title.split(': ')[1]}</h3>
                                        <p className="text-gray-600">{module.content.intro}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="text-center">
                        <button 
                            onClick={() => navigateTo('quiz')} 
                            className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-700 text-white text-xl font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition inline-flex items-center gap-3"
                        >
                            🏆 Questionário Final
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ModuleList;