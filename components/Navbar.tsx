
import React from 'react';
import type { Page } from '../types';

interface NavbarProps {
    currentPage: Page;
    navigateTo: (page: Page) => void;
}

const NavLink: React.FC<{
    pageName: Page;
    currentPage: Page;
    navigateTo: (page: Page) => void;
    activePages?: Page[];
    children: React.ReactNode;
}> = ({ pageName, currentPage, navigateTo, activePages, children }) => {
    const isActive = currentPage === pageName || (activePages && activePages.includes(currentPage));
    const activeClass = "text-amber-700 font-bold border-b-2 border-amber-600";
    const inactiveClass = "text-gray-600 hover:text-amber-700 transition-colors";

    return (
        <li>
            <button
                onClick={() => navigateTo(pageName)}
                className={`px-3 py-2 text-lg font-medium ${isActive ? activeClass : inactiveClass}`}
                aria-current={isActive ? 'page' : undefined}
            >
                {children}
            </button>
        </li>
    );
};

const Navbar: React.FC<NavbarProps> = ({ currentPage, navigateTo }) => {
    return (
        <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md shadow-md z-50">
            <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex items-center space-x-3 cursor-pointer" onClick={() => navigateTo('intro')}>
                        <span className="text-4xl" aria-hidden="true">🫒</span>
                        <span className="font-bold text-2xl text-amber-800">Ouro Líquido</span>
                    </div>
                    {/* Note: Basic responsive, hides links on small screens. For a full solution, a hamburger menu would be needed. */}
                    <ul className="hidden md:flex items-center space-x-6">
                         <NavLink pageName="intro" currentPage={currentPage} navigateTo={navigateTo}>Início</NavLink>
                         <NavLink pageName="story" currentPage={currentPage} navigateTo={navigateTo}>História</NavLink>
                         <NavLink pageName="modules" currentPage={currentPage} navigateTo={navigateTo} activePages={['module']}>Módulos</NavLink>
                         <NavLink pageName="quiz" currentPage={currentPage} navigateTo={navigateTo}>Questionário</NavLink>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
