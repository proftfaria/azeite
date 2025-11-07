
import React, { useState, useEffect } from 'react';
import type { Page, Module } from '../types';
import Footer from './Footer';

interface ModuleDetailProps {
    navigateTo: (page: Page) => void;
    module: Module;
    onComplete: (moduleId: string, score: number) => void;
    currentScore: number;
}

const ModuleDetail: React.FC<ModuleDetailProps> = ({ navigateTo, module, onComplete, currentScore }) => {
    const [activityAnswers, setActivityAnswers] = useState<{ [key: string]: string }>({});
    const [textAnswer, setTextAnswer] = useState('');
    const [showFeedback, setShowFeedback] = useState(false);
    const [isCompleted, setIsCompleted] = useState(false);

    useEffect(() => {
        if (currentScore > 0) {
            setShowFeedback(true);
            setIsCompleted(true);
        }
    }, [currentScore]);

    const activity = module.content.activity;

    const handleSubmit = (isCorrect: boolean) => {
        if (!isCompleted) {
            setShowFeedback(true);
            onComplete(module.id, isCorrect ? 100 : 0);
            setIsCompleted(true);
        }
    };

    const handleTimelineAnswer = (optionId: number, value: string) => {
        const newAnswers = { ...activityAnswers, [optionId]: value };
        setActivityAnswers(newAnswers);
        if (Object.keys(newAnswers).length === activity.options.length) {
            const isCorrect = activity.options.every(opt => newAnswers[opt.id] === opt.answer);
            handleSubmit(isCorrect);
        }
    };
    
    const handleTextAnswer = () => {
        if (!textAnswer || activity.type === 'timeline' || activity.type === 'problem') return;
        const isCorrect = textAnswer.toLowerCase().trim().includes(activity.answer.toLowerCase());
        handleSubmit(isCorrect);
    };

    const handleProblemAnswer = (optionId: string) => {
        if (activity.type !== 'problem') return;
        setTextAnswer(optionId);
        const selectedOption = activity.options.find(opt => opt.id === optionId);
        const isCorrect = selectedOption?.correct === true;
        handleSubmit(isCorrect);
    };

    const checkFinalAnswer = (): boolean => {
        if (!isCompleted && !showFeedback) return false;
        
        switch (activity.type) {
            case 'timeline':
                return activity.options.every(opt => activityAnswers[opt.id] === opt.answer);
            case 'archaeology':
            case 'quote':
            case 'symbols':
                return textAnswer.toLowerCase().trim().includes(activity.answer.toLowerCase());
            case 'problem':
                const selectedOption = activity.options.find(opt => opt.id === textAnswer);
                return selectedOption?.correct === true;
            default:
                return false;
        }
    };

    const isCorrect = checkFinalAnswer();

    const renderActivity = () => {
        switch (activity.type) {
            case 'timeline':
                return (
                    <>
                        <p className="text-gray-700 mb-6 font-medium">{activity.question}</p>
                        {activity.options.map(option => (
                            <div key={option.id} className="bg-white p-4 rounded-lg shadow mb-4">
                                <p className="font-medium mb-3">{option.id}. {option.text}</p>
                                <select
                                    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    disabled={showFeedback}
                                    onChange={(e) => handleTimelineAnswer(option.id, e.target.value)}
                                    value={activityAnswers[option.id] || ''}
                                >
                                    <option value="">Selecione...</option>
                                    {activity.choices.map(choice => <option key={choice.id} value={choice.id}>{choice.id}. {choice.text}</option>)}
                                </select>
                            </div>
                        ))}
                    </>
                );
            case 'archaeology':
            case 'quote':
            case 'symbols':
                return (
                    <>
                        {activity.type === 'archaeology' && (
                            <>
                                <p className="text-xl font-semibold mb-3">{activity.question} 🏺</p>
                                <p className="text-gray-700 mb-6">{activity.description}</p>
                                <div className="space-y-3 mb-6">
                                    {activity.objects.map(obj => (
                                        <div key={obj.id} className="bg-white p-4 rounded-lg shadow"><p className="font-medium">📜 {obj.name}</p></div>
                                    ))}
                                </div>
                            </>
                        )}
                        {activity.type === 'quote' && (
                        <>
                                <p className="text-gray-700 mb-4 font-medium">{activity.question}</p>
                                <p className="text-lg italic bg-white p-4 rounded-lg mb-4 border-l-4 border-purple-500">"{activity.text}"</p>
                        </>
                        )}
                        {activity.type === 'symbols' && (
                            <>
                                <p className="text-xl font-semibold mb-3">{activity.question} 🕊️👑</p>
                                <p className="text-gray-700 mb-6">{activity.description}</p>
                                <div className="space-y-3 mb-6">
                                    {activity.scenarios.map(scenario => (
                                        <div key={scenario.id} className="bg-white p-4 rounded-lg shadow"><p className="font-medium">• {scenario.text}</p></div>
                                    ))}
                                </div>
                            </>
                        )}
                        <input
                            type="text"
                            placeholder={activity.type === 'archaeology' ? "Que combustível é esse?" : "Sua resposta..."}
                            className="w-full p-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            disabled={showFeedback}
                            value={textAnswer}
                            onChange={(e) => setTextAnswer(e.target.value)}
                        />
                        {!showFeedback && <button onClick={handleTextAnswer} className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Submeter</button>}
                    </>
                );
            case 'problem':
                return (
                    <>
                        <p className="text-xl font-semibold mb-3">{activity.question} 🕵️‍♂️</p>
                        <div className="bg-amber-50 p-4 rounded-lg mb-6 border-l-4 border-amber-500">
                            <p className="text-gray-700 italic">{activity.scenario}</p>
                        </div>
                        <div className="space-y-3">
                            {activity.options.map(option => (
                                <button
                                    key={option.id}
                                    onClick={() => handleProblemAnswer(option.id)}
                                    disabled={showFeedback}
                                    className={`w-full text-left p-4 bg-white rounded-lg border-2 transition disabled:opacity-70 ${
                                        showFeedback && option.correct ? 'border-green-500 bg-green-50' :
                                        showFeedback && !option.correct && textAnswer === option.id ? 'border-red-500 bg-red-50' :
                                        'border-gray-300 hover:border-blue-500 hover:bg-blue-50'
                                    }`}
                                >
                                    <span className="font-bold">{option.id}.</span> {option.text}
                                </button>
                            ))}
                        </div>
                    </>
                );
            default:
                return null;
        }
    };
    
    const renderFeedback = () => {
        if (!showFeedback) return null;
        const feedbackClass = isCorrect ? 'bg-green-100 border-green-500' : 'bg-orange-100 border-orange-500';
        const feedbackIcon = isCorrect ? '✓' : '⚠';
        const feedbackTitle = isCorrect ? 'Muito bem! Resposta correta! (+100 pontos)' : 'Quase lá! Vamos rever... (0 pontos)';
        return (
            <div className={`mt-6 p-6 rounded-lg border-2 ${feedbackClass}`}>
                <div className="flex items-start gap-3">
                    <span className="text-2xl">{feedbackIcon}</span>
                    <div><p className="font-bold mb-2 text-lg">{feedbackTitle}</p></div>
                </div>
            </div>
        );
    };

    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 p-4 sm:p-8">
                <div className="max-w-4xl mx-auto">
                    <button onClick={() => navigateTo('modules')} className="mb-6 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg flex items-center gap-2 transition">
                        ← Voltar aos Módulos
                    </button>
                    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                        <div className={`bg-gradient-to-r ${module.color} p-6 text-white`}>
                             <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <span className="text-4xl">{module.icon}</span>
                                    <div>
                                        <h2 className="text-3xl font-bold">{module.title}</h2>
                                        <p className="text-white/90 mt-1">{module.content.intro}</p>
                                    </div>
                                </div>
                                {currentScore > 0 && (
                                    <div className="text-right bg-white/20 rounded-lg px-4 py-2">
                                        <p className="text-sm">Pontuação</p>
                                        <p className="text-2xl font-bold">{currentScore}/100</p>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="p-6 sm:p-8">
                            {module.content.sections.map((section, idx) => (
                                <div key={idx} className="mb-8">
                                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{section.title}</h3>
                                    {section.text && <p className="text-gray-700 leading-relaxed mb-4">{section.text}</p>}
                                    {section.items && (
                                        <div className="space-y-3">
                                            {section.items.map((item, itemIdx) => (
                                                <div key={itemIdx} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                                                    {item.emoji && <span className="text-2xl mt-1">{item.emoji}</span>}
                                                    <div className="flex-1">
                                                        {item.title && <span className="font-bold text-gray-800">{item.title}: </span>}
                                                        <span className="text-gray-700">{item.text}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                            <div className="mt-12 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 sm:p-8 border-2 border-blue-200">
                                <h3 className="text-2xl font-bold text-blue-900 mb-4">🎯 Atividade Interativa</h3>
                                {renderActivity()}
                                {renderFeedback()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ModuleDetail;
