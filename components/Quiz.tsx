import React, { useState } from 'react';
import { finalQuiz, modules } from '../constants/data';
import type { Page, ModuleProgress, QuizQuestion } from '../types';
import Footer from './Footer';

interface QuizProps {
    navigateTo: (page: Page) => void;
    moduleProgress: ModuleProgress;
}

const Quiz: React.FC<QuizProps> = ({ navigateTo, moduleProgress }) => {
    const [quizAnswers, setQuizAnswers] = useState<{ [key: string]: string }>({});
    const [showFeedback, setShowFeedback] = useState<{ [key: string]: boolean }>({});
    const [userName, setUserName] = useState('');
    const [showCertificate, setShowCertificate] = useState(false);

    const handleAnswer = (questionId: string, answer: string) => {
        if (!answer) return;
        setQuizAnswers(prev => ({ ...prev, [questionId]: answer }));
        setShowFeedback(prev => ({ ...prev, [questionId]: true }));
    };

    const checkAnswer = (question: QuizQuestion) => {
        const answer = quizAnswers[question.id];
        if (!answer) return false;
        if (question.type === 'fill') {
            return question.answer?.split(',').some(a => answer.toLowerCase().trim().includes(a.trim())) ?? false;
        }
        return answer === question.correct;
    };
    
    const allQuestionsAnswered = Object.keys(showFeedback).length === finalQuiz.length;

    // FIX: The error "Operator '+' cannot be applied to types 'unknown' and 'number'"
    // indicates that `totalModuleScore` was not being inferred as a number.
    // Coercing the score to a number inside the reduce function resolves this.
    const totalModuleScore = Object.values(moduleProgress).reduce((sum, score) => sum + (Number(score) || 0), 0);
    const maxModuleScore = modules.length * 100;
    
    const correctAnswersCount = finalQuiz.filter(q => checkAnswer(q)).length;
    const quizScore = correctAnswersCount * 10;
    const maxQuizScore = finalQuiz.length * 10;

    const finalPercentage = Math.round(((totalModuleScore + quizScore) / (maxModuleScore + maxQuizScore)) * 100);

    const handleGenerateCertificate = () => {
        if (userName.trim() !== "") {
            setShowCertificate(true);
        } else {
            alert("Por favor, insira o seu nome para gerar o certificado.");
        }
    };
    
    if (showCertificate) {
        return (
            <>
                <div className="min-h-screen bg-gray-100 p-8 flex items-center justify-center">
                    <div className="max-w-4xl w-full text-center fade-in">
                        <div className="bg-white rounded-2xl shadow-2xl p-8 sm:p-12 border-4 border-amber-500 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]">
                            <h2 className="text-4xl font-bold text-amber-800 mb-2">Certificado de Conclusão</h2>
                            <p className="text-gray-600 mb-8">Viagem pela História do Azeite</p>
                            
                            <p className="text-lg text-gray-700 mb-4">Este certificado é concedido a</p>
                            <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-700 to-yellow-800 mb-8 pb-2 border-b-2 border-amber-300 inline-block">
                                {userName}
                            </p>
                            
                            <p className="text-lg text-gray-700 mb-6">pela conclusão bem-sucedida do curso com uma pontuação final de:</p>
                            
                            <div className="text-7xl font-bold text-amber-600 mb-10">{finalPercentage}%</div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-8">
                                <div className="bg-amber-50 p-4 rounded-lg">
                                    <p className="font-bold text-gray-700">Pontuação dos Módulos:</p>
                                    <p className="text-xl text-amber-700">{totalModuleScore} / {maxModuleScore}</p>
                                </div>
                                <div className="bg-amber-50 p-4 rounded-lg">
                                    <p className="font-bold text-gray-700">Pontuação do Questionário:</p>
                                    <p className="text-xl text-amber-700">{quizScore} / {maxQuizScore}</p>
                                </div>
                            </div>

                            <p className="text-gray-500 text-sm">Emitido em: {new Date().toLocaleDateString('pt-PT')}</p>
                        </div>
                         <button onClick={() => window.location.reload()} className="mt-8 px-8 py-4 bg-gray-600 text-white rounded-xl hover:bg-gray-700 transition">
                            Recomeçar
                        </button>
                    </div>
                </div>
                <Footer />
            </>
        );
    }

    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 p-4 sm:p-8">
                <div className="max-w-4xl mx-auto">
                    <button onClick={() => navigateTo('modules')} className="mb-6 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg flex items-center gap-2 transition">
                        ← Voltar aos Módulos
                    </button>
                    <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4 text-center">🏆 Questionário Final</h2>
                        <p className="text-xl text-gray-600 mb-10 text-center">Teste os seus conhecimentos sobre a história do azeite.</p>
                        
                        <div className="space-y-8">
                            {finalQuiz.map((q, idx) => (
                                <div key={q.id} className="bg-gray-50 p-6 rounded-xl border-l-4 border-amber-500">
                                    <p className="text-lg font-semibold text-gray-800 mb-4">{idx + 1}. {q.question}</p>
                                    {q.type === 'mcq' && q.options && (
                                        <div className="space-y-2">
                                            {q.options.map(opt => (
                                                <button key={opt.id} onClick={() => handleAnswer(q.id, opt.id)} disabled={!!showFeedback[q.id]}
                                                    className={`w-full text-left p-3 rounded-lg border-2 transition disabled:opacity-80 ${
                                                        showFeedback[q.id] && opt.id === q.correct ? 'border-green-500 bg-green-100' :
                                                        showFeedback[q.id] && opt.id !== q.correct && quizAnswers[q.id] === opt.id ? 'border-red-500 bg-red-100' :
                                                        'border-gray-300 hover:border-blue-500 hover:bg-blue-50'
                                                    }`}
                                                >
                                                    <span className="font-bold">{opt.id}.</span> {opt.text}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                    {q.type === 'truefalse' && q.options && (
                                        <div className="flex gap-4">
                                            {q.options.map(opt => (
                                                 <button key={opt.id} onClick={() => handleAnswer(q.id, opt.id)} disabled={!!showFeedback[q.id]}
                                                 className={`flex-1 p-3 rounded-lg border-2 font-bold transition disabled:opacity-80 ${
                                                     showFeedback[q.id] && opt.id === q.correct ? 'border-green-500 bg-green-100' :
                                                     showFeedback[q.id] && opt.id !== q.correct && quizAnswers[q.id] === opt.id ? 'border-red-500 bg-red-100' :
                                                     'border-gray-300 hover:border-blue-500 hover:bg-blue-50'
                                                 }`}
                                             >
                                                 {opt.text}
                                             </button>
                                            ))}
                                        </div>
                                    )}
                                    {q.type === 'fill' && (
                                        <input type="text" placeholder="Sua resposta..."
                                               className="w-full p-3 border-2 border-gray-300 rounded-lg"
                                               disabled={!!showFeedback[q.id]} onBlur={(e) => handleAnswer(q.id, e.target.value)} />
                                    )}
                                    {showFeedback[q.id] && (
                                        <div className={`mt-4 p-3 rounded-lg ${checkAnswer(q) ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                            <p><span className="font-bold">{checkAnswer(q) ? '✓' : '✗'}</span> {typeof q.feedback === 'string' ? q.feedback : (checkAnswer(q) ? q.feedback.correct : q.feedback.incorrect)}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {allQuestionsAnswered && (
                            <div className="mt-12 text-center bg-gradient-to-r from-amber-50 to-yellow-100 p-8 rounded-2xl border-2 border-amber-300">
                                <h3 className="text-2xl font-bold text-gray-800 mb-2">Parabéns, concluiu o questionário!</h3>
                                <p className="text-gray-700 mb-6">Insira o seu nome para gerar o seu certificado de conclusão.</p>
                                <input 
                                    type="text"
                                    value={userName}
                                    onChange={(e) => setUserName(e.target.value)}
                                    placeholder="O seu nome completo"
                                    className="w-full max-w-md mx-auto p-4 border-2 border-amber-400 rounded-lg text-center text-lg focus:ring-2 focus:ring-amber-500"
                                />
                                <button
                                    onClick={handleGenerateCertificate}
                                    className="mt-6 px-8 py-4 bg-gradient-to-r from-amber-600 to-yellow-700 text-white text-xl font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition"
                                >
                                    Gerar Certificado
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Quiz;