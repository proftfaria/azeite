
export type Page = 'intro' | 'story' | 'modules' | 'module' | 'quiz';

export interface StoryPage {
    image: string;
    text: string;
}

export type ModuleProgress = { [key: string]: number };

export interface Module {
    id: string;
    title: string;
    icon: string;
    color: string;
    content: {
        intro: string;
        sections: Section[];
        activity: Activity;
    };
}

interface Section {
    title: string;
    text?: string;
    items?: { emoji?: string; title?: string; text: string }[];
}

type Activity = TimelineActivity | ArchaeologyActivity | QuoteActivity | SymbolsActivity | ProblemActivity;

interface BaseActivity {
    question: string;
}

interface TimelineActivity extends BaseActivity {
    type: 'timeline';
    options: { id: number; text: string; answer: string }[];
    choices: { id: string; text: string }[];
}

interface ArchaeologyActivity extends BaseActivity {
    type: 'archaeology';
    description: string;
    objects: { id: string; name: string; use: string }[];
    answer: string;
}

interface QuoteActivity extends BaseActivity {
    type: 'quote';
    text: string;
    answer: string;
}

interface SymbolsActivity extends BaseActivity {
    type: 'symbols';
    description: string;
    scenarios: { id: number; text: string; symbol: string }[];
    answer: string;
}

interface ProblemActivity extends BaseActivity {
    type: 'problem';
    scenario: string;
    options: { id: string; text: string; correct: boolean }[];
}

export interface QuizQuestion {
    id: string;
    question: string;
    type: 'mcq' | 'truefalse' | 'fill';
    options?: { id: string; text: string }[];
    correct?: string;
    answer?: string;
    answer2?: string;
    feedback: { correct: string; incorrect: string } | string;
}
