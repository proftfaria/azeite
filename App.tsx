
import React, { useState, useCallback } from 'react';
import Intro from './components/Intro';
import Story from './components/Story';
import ModuleList from './components/ModuleList';
import ModuleDetail from './components/ModuleDetail';
import Quiz from './components/Quiz';
import Navbar from './components/Navbar';
import { modules } from './constants/data';
import type { Page, ModuleProgress } from './types';

const App: React.FC = () => {
    const [page, setPage] = useState<Page>('intro');
    const [currentModuleIndex, setCurrentModuleIndex] = useState<number | null>(null);
    const [moduleProgress, setModuleProgress] = useState<ModuleProgress>({});

    const navigateTo = useCallback((newPage: Page, data?: any) => {
        if (newPage === 'module' && typeof data === 'number') {
            setCurrentModuleIndex(data);
        } else {
            setCurrentModuleIndex(null);
        }
        setPage(newPage);
        window.scrollTo(0, 0);
    }, []);

    const handleModuleComplete = useCallback((moduleId: string, score: number) => {
        setModuleProgress(prev => ({ ...prev, [moduleId]: score }));
    }, []);

    const renderPage = () => {
        switch (page) {
            case 'intro':
                return <Intro navigateTo={navigateTo} />;
            case 'story':
                return <Story navigateTo={navigateTo} />;
            case 'modules':
                return <ModuleList navigateTo={navigateTo} moduleProgress={moduleProgress} />;
            case 'module':
                if (currentModuleIndex !== null && modules[currentModuleIndex]) {
                    const module = modules[currentModuleIndex];
                    return (
                        <ModuleDetail
                            navigateTo={navigateTo}
                            module={module}
                            onComplete={handleModuleComplete}
                            currentScore={moduleProgress[module.id] || 0}
                        />
                    );
                }
                // Fallback to modules list if index is invalid
                navigateTo('modules');
                return null;
            case 'quiz':
                return <Quiz navigateTo={navigateTo} moduleProgress={moduleProgress} />;
            default:
                return <Intro navigateTo={navigateTo} />;
        }
    };

    return (
        <>
            <Navbar currentPage={page} navigateTo={navigateTo} />
            <main className="pt-20 fade-in">
                {renderPage()}
            </main>
        </>
    );
};

export default App;
