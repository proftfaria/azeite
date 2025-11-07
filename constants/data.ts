import type { StoryPage, Module, QuizQuestion } from '../types';

export const storyPages: StoryPage[] = [
    {
        image: '/assets/image1.jpg',
        text: 'No coração quente do Alentejo, entre fileiras modernas e ordenadas de oliveiras, trabalhava Irina. Os seus braços ágeis apanhavam a azeitona preta e roxa, o "ouro líquido" da sua terra.'
    },
    {
        image: '/assets/image2.jpg',
        text: 'Era a época da colha, o clímax de um ciclo que ela conhecia desde pequena. "É apenas óleo," pensava, enquanto apanhava uma pedra invulgar, lisa e escura, que parecia um nó de madeira petrificado.'
    },
    {
        image: '/assets/image3.jpg',
        text: 'Ao tocar na pedra, um arrepio percorreu-lhe a espinha, e o ar ficou quente e denso. O cheiro a terra e azeitona intensificou-se, transformando-se num aroma a mar e a lendas antigas. O campo moderno desvaneceu-se. De repente, Irina estava a observar uma oliveira retorcida e gigantesca, com raízes que pareciam abraçar o próprio tempo. Esta não era uma árvore qualquer; era a testemunha de milénios.'
    },
    {
        image: '/assets/image4.jpg',
        text: 'A árvore falou (mas não com palavras) da sua origem longínqua na Ásia Menor, há eras. Irina viu folhas fossilizadas no chão, e depois, vislumbrou a Idade do Bronze: mãos antigas esmagavam os frutos numa pedra rústica. "Antes de existir humanidade, nós existíamos," sussurrou a memória da oliveira. "E a primeira gota de azeite foi o início de uma aliança sagrada."'
    },
    {
        image: '/assets/image5.jpg',
        text: 'A visão mudou. Ela estava agora na Grécia, assistindo à disputa entre a deusa Atena e o deus Poseidão. Poseidão ofereceu um cavalo forte, mas Atena plantou a primeira oliveira. Os cidadãos aclamaram a dádiva de Atena: óleo para iluminar, curar e alimentar. "Fui a dádiva mais valiosa," vibrou a árvore, "um símbolo de paz e abundância."'
    },
    {
        image: '/assets/image6.jpg',
        text: 'O tempo avançou. Irina viu grandes barcos fenícios com velas quadradas a sulcar o Mediterrâneo. Os navegadores transportavam ânforas cheias. O azeite não era apenas alimento; era riqueza, moeda de troca. Ela viu Hirão de Tiro a aceitar o azeite de um mercador, em troca de madeira para um Templo. O azeite unia reinos.'
    },
    {
        image: '/assets/image7.jpg',
        text: 'No cenário seguinte, Roma Antiga. Ela observou um thermae (banho romano), onde o azeite era usado para a higiene e cosmética. Depois, a escuridão da noite era cortada pelo brilho suave de uma lamparina a óleo. "Eu sou o sangue vital do quotidiano," explicou a memória. "O que ilumina, cura, perfuma e protege."'
    },
    {
        image: '/assets/image8.jpg',
        text: 'A visão ficou mais intensa, tocada por um significado mais profundo. Ela viu o grande Dilúvio a acalmar, e uma pomba a regressar à Arca de Noé, trazendo um tenro ramo de oliveira. Paz. Reconciliação. A ira divina tinha cessado. E, depois, o Jardim de Getsémani, o "Lagar de Azeite," onde o fruto era esmagado para libertar o precioso óleo.'
    },
    {
        image: '/assets/image9.jpg',
        text: 'O cenário mudou para o seu país. Portugal medieval. Ela viu azeite, orgulhosamente português, a ser embarcado em naus das Descobertas. Multas no Código Visigótico protegiam a oliveira. Era um produto de valor estratégico, um commodities essencial do império. O azeite, agora, ligava continentes.'
    },
    {
        image: '/assets/image10.jpg',
        text: 'Com um suspiro, o ar quente do Alentejo voltou. Irina estava de novo no olival moderno, a segurar o nó de madeira petrificado. Ela olhou para o moderno lagar ao longe, um edifício de metal e tecnologia. Mas agora, não via apenas máquinas. Via a essência de todos aqueles milénios. O lagar moderno é a continuação do lagar de Getsémani e da pedra primitiva.'
    },
    {
        image: '/assets/image11.jpg',
        text: 'Irina juntou-se à sua família e colocou as suas azeitonas na moega. Enquanto as prensas hidráulicas e as centrifugadoras libertavam o óleo verde-esmeralda, ela já não via apenas um alimento. Via a Dádiva de Atena, a moeda dos Fenícios, a luz dos Romanos, o símbolo de Paz e o legado de Portugal. Em cada gota de "ouro líquido" do Alentejo, corria toda a História.'
    }
];

export const modules: Module[] = [
    {
        id: 'modulo1',
        title: 'Módulo 1: O Berço Milenar da Oliveira',
        icon: '🌍',
        color: 'from-amber-600 to-yellow-700',
        content: {
            intro: 'A história de um bom azeite começa na sua fonte: a oliveira. Uma árvore que remonta à Era Terciária, anterior ao aparecimento do homem.',
            sections: [
                {
                    title: 'Origens Ancestrais',
                    text: 'A oliveira, na sua forma primitiva, remonta à Era Terciária, com origem na Ásia Menor, Síria e Palestina. Folhas fossilizadas datadas do Paleolítico foram encontradas por toda a bacia do Mediterrâneo. Há mais de 6 mil anos, os povos da Mesopotâmia já utilizavam o azeite.'
                },
                {
                    title: 'Expansão pelo Mediterrâneo',
                    text: 'Foram os fenícios que, nas suas rotas comerciais, transportaram a cultura da oliveira, semeando-a nas costas de todo o Mediterrâneo. O azeite tornou-se tão valioso que funcionava como moeda de troca.'
                }
            ],
            activity: {
                type: 'timeline',
                question: 'Combine os marcos históricos com os seus períodos ou localizações:',
                options: [
                    { id: 1, text: 'Origem primitiva da oliveira', answer: 'B' },
                    { id: 2, text: 'Primeiros vestígios de produção (Síria/Palestina)', answer: 'C' },
                    { id: 3, text: 'Uso do azeite como protetor (Mesopotâmia)', answer: 'A' }
                ],
                choices: [
                    { id: 'A', text: 'Há mais de 6 mil anos' },
                    { id: 'B', text: 'Era Terciária' },
                    { id: 'C', text: 'Idade do Bronze' }
                ]
            }
        }
    },
    {
        id: 'modulo2',
        title: 'Módulo 2: As Raízes Antigas - Luz, Saúde e Comércio',
        icon: '💡',
        color: 'from-orange-600 to-amber-700',
        content: {
            intro: 'Na antiguidade, o azeite era muito mais que alimento. Era a fonte de luz da civilização, a base da saúde e o pilar da economia.',
            sections: [
                {
                    title: 'Três Pilares Vitais',
                    items: [
                        { emoji: '💡', title: 'LUZ', text: 'Principal combustível para lâmpadas de argila, iluminando casas, templos e ruas' },
                        { emoji: '🩺', title: 'SAÚDE', text: 'Base da limpeza (com estrígil) e medicina, usado para tratar feridas e proteger a pele' },
                        { emoji: '💰', title: 'COMÉRCIO', text: '"Ouro líquido" transportado em ânforas, base da riqueza mediterrânea' }
                    ]
                },
                {
                    title: 'Múltiplos Usos',
                    text: 'Para gregos e romanos: culinária, medicação, unguento, perfume, combustível, lubrificante de alfaias e impermeabilizante de tecidos.'
                }
            ],
            activity: {
                type: 'archaeology',
                question: 'O Arqueólogo Inesperado',
                description: 'Estes dois objetos foram essenciais em Roma, mas não funcionavam sem um "combustível" que também comiam. Que combustível é esse e para que servia cada objeto?',
                objects: [
                    { id: 'lucerna', name: 'Lâmpada a óleo romana (Lucerna)', use: 'iluminação' },
                    { id: 'estrigil', name: 'Estrígil (raspador de metal)', use: 'higiene' }
                ],
                answer: 'azeite'
            }
        }
    },
    {
        id: 'modulo3',
        title: 'Módulo 3: O Presente dos Deuses',
        icon: '👑',
        color: 'from-purple-600 to-indigo-700',
        content: {
            intro: 'Para as civilizações antigas, uma árvore tão vital só poderia ter origem divina. Lendas e mitos reforçam o seu estatuto sagrado.',
            sections: [
                {
                    title: 'Mitologia Grega',
                    text: 'Na disputa pela cidade de Atenas, Poseidão ofereceu um cavalo forte, mas Atena presenteou os cidadãos com uma oliveira capaz de produzir óleo para iluminar, curar e alimentar. A oliveira foi considerada a dádiva mais valiosa.'
                },
                {
                    title: 'Mitologia Romana',
                    text: 'Rómulo e Remo, os míticos fundadores de Roma, teriam visto a luz do dia pela primeira vez debaixo dos galhos da oliveira, associando a árvore à génese do império.'
                },
                {
                    title: 'Cosmologia Egípcia',
                    text: 'A dádiva da olivicultura é atribuída à deusa Ísis, que a ofereceu à humanidade como símbolo de paz e abundância.'
                }
            ],
            activity: {
                type: 'quote',
                question: 'Complete a citação de Virgílio na Eneida:',
                text: 'E com um ramo de __________ o homem se purifica totalmente.',
                answer: 'oliveira'
            }
        }
    },
    {
        id: 'modulo4',
        title: 'Módulo 4: Símbolo Sagrado nas Religiões',
        icon: '❤️',
        color: 'from-blue-600 to-cyan-700',
        content: {
            intro: 'O azeite assume profundo significado espiritual, tornando-se símbolo sagrado nas grandes religiões monoteístas.',
            sections: [
                {
                    title: 'Judaísmo - A Presença Divina',
                    text: 'O azeite simbolizava a presença de Deus entre os homens. Era usado em oferendas (enquanto o fermento simbolizava o pecado), na consagração de sacerdotes e para friccionar o corpo em ocasiões festivas. A sua ausência denunciava tristeza.'
                },
                {
                    title: 'Cristianismo - Unção e Sacrifício',
                    items: [
                        { emoji: '🕊️', text: 'O ramo de oliveira trazido pela pomba a Noé: símbolo universal de paz e reconciliação' },
                        { emoji: '⛪', text: 'Getsémani ("Lagar de Azeite"): onde Jesus foi "esmagado" pelo sacrifício, como azeitonas libertam óleo' },
                        { emoji: '✨', text: 'Santos Óleos: consagrados na Quinta-feira Santa para batismo, crisma e unção dos enfermos' }
                    ]
                },
                {
                    title: 'A Unção Real',
                    text: 'Messias (hebraico) e Cristo (grego) significam literalmente "O Ungido". A unção com azeite consagrava reis e sacerdotes, mostrando que sua autoridade vinha de Deus.'
                }
            ],
            activity: {
                type: 'symbols',
                question: 'O Fio Condutor',
                description: 'Há um elemento vegetal comum que une estas histórias. Qual é, e o que representa em cada cenário?',
                scenarios: [
                    { id: 1, text: 'Pomba regressa à Arca de Noé', symbol: 'Paz' },
                    { id: 2, text: 'Atena planta uma árvore em Atenas', symbol: 'Sabedoria' },
                    { id: 3, text: 'Coroação de um rei medieval', symbol: 'Poder Divino' }
                ],
                answer: 'oliveira'
            }
        }
    },
    {
        id: 'modulo5',
        title: 'Módulo 5: Da Cultura à Mesa',
        icon: '📖',
        color: 'from-green-600 to-emerald-700',
        content: {
            intro: 'O azeite tornou-se o pilar da Dieta Mediterrânica, parte da "Tríade" com trigo e vinho, e evoluiu até à perfeição do Virgem Extra.',
            sections: [
                {
                    title: 'O Lagar Tradicional',
                    text: 'Mós de pedra esmagavam as azeitonas, transformando-as em pasta. Esta era espalhada em capachos de fibra e prensada para extrair o líquido. Por decantação, o azeite subia ao topo.'
                },
                {
                    title: 'Problemas do Método Antigo',
                    items: [
                        { emoji: '🍂', text: 'Fermentação: Capachos difíceis de limpar causavam sabor rançoso' },
                        { emoji: '🌬️', text: 'Oxidação: Exposição ao ar roubava aromas frutados e frescura' }
                    ]
                },
                {
                    title: 'Azeite Virgem Extra',
                    text: 'O auge da qualidade moderna. Deve ter acidez inferior a 0,8% e zero defeitos na prova sensorial. Tem de apresentar frutado (fresco), podendo ter amargo e picante - sinais de qualidade e antioxidantes.'
                },
                {
                    title: 'O Legado Português',
                    text: 'Portugal consolidou-se como referência mundial. O Alentejo é o coração da produção nacional, com azeites de qualidade premiada. Um dos primeiros produtos exportados na Época dos Descobrimentos.'
                }
            ],
            activity: {
                type: 'problem',
                question: 'O Bom, o Mau e o Azeite',
                scenario: 'Estamos em 1500 d.C. num lagar tradicional. O nosso azeite sabe bem quando feito, mas passados dois meses tem sabor a "velho" e "húmido". O que está a estragar o sabor?',
                options: [
                    { id: 'A', text: 'A temperatura da prensagem', correct: false },
                    { id: 'B', text: 'Fermentação nos capachos e oxidação pelo ar', correct: true },
                    { id: 'C', text: 'O tipo de azeitonas usado', correct: false },
                    { id: 'D', text: 'A água utilizada no processo', correct: false }
                ]
            }
        }
    }
];

export const finalQuiz: QuizQuestion[] = [
    {
        id: 'q1',
        question: 'Em qual região a oliveira, na sua forma primitiva, tem origem na Era Terciária?',
        type: 'mcq',
        options: [
            { id: 'A', text: 'Região do Cáucaso' },
            { id: 'B', text: 'Ásia Menor, Síria e Palestina' },
            { id: 'C', text: 'Bacia do Mediterrâneo Ocidental' },
            { id: 'D', text: 'Península Ibérica' }
        ],
        correct: 'B',
        feedback: {
            correct: 'Correto! A origem da oliveira primitiva remonta à Era Terciária na Ásia Menor, Síria e Palestina.',
            incorrect: 'Embora vestígios tenham sido encontrados por toda a bacia do Mediterrâneo, a origem primitiva situa-se na Ásia Menor, Síria e Palestina.'
        }
    },
    {
        id: 'q2',
        question: 'A acidez do azeite era percebida sensorialmente pelos romanos como indicador de qualidade?',
        type: 'truefalse',
        options: [
            { id: 'V', text: 'Verdadeiro' },
            { id: 'F', text: 'Falso' }
        ],
        correct: 'F',
        feedback: {
            correct: 'Correto! A acidez do azeite só pode ser medida em laboratório, não pode ser percebida no paladar.',
            incorrect: 'Falso. A acidez (teor de ácidos graxos livres) não pode ser percebida sensorialmente. Só é medida em laboratório.'
        }
    },
    {
        id: 'q3',
        question: 'Complete: Noé soltou uma pomba que retornou à arca trazendo um ramo de ___, símbolo de ___.',
        type: 'fill',
        answer: 'oliveira',
        answer2: 'paz',
        feedback: 'Correto! A pomba trouxe um ramo de oliveira, símbolo universal de paz e reconciliação.'
    },
    {
        id: 'q4',
        question: 'Qual destes NÃO era um uso conhecido do azeite por gregos e romanos?',
        type: 'mcq',
        options: [
            { id: 'A', text: 'Combustível para iluminação' },
            { id: 'B', text: 'Unguento ou bálsamo' },
            { id: 'C', text: 'Lubrificante de alfaias' },
            { id: 'D', text: 'Agente de limpeza doméstica para metais' }
        ],
        correct: 'D',
        feedback: {
            correct: 'Correto! Não há menção ao uso como agente de limpeza para metais. Os usos eram: culinária, medicina, unguento, perfume, iluminação, lubrificante e impermeabilizante.',
            incorrect: 'As fontes mencionam claramente o azeite na culinária, medicina, como unguento, perfume, combustível, lubrificante e impermeabilizante. Não há menção a limpeza de metais.'
        }
    },
    {
        id: 'q5',
        question: 'Qual era o nome do instrumento romano usado com azeite para a higiene corporal após os banhos?',
        type: 'mcq',
        options: [
            { id: 'A', text: 'Lucerna' },
            { id: 'B', text: 'Estrígil' },
            { id: 'C', text: 'Ânfora' },
            { id: 'D', text: 'Thermae' }
        ],
        correct: 'B',
        feedback: {
            correct: 'Correto! O estrígil era um raspador de metal usado com azeite para limpar a pele após exercícios e banhos.',
            incorrect: 'O estrígil era o raspador de metal usado com azeite para higiene. A lucerna era a lâmpada, a ânfora era o recipiente de transporte e thermae eram os banhos romanos.'
        }
    },
    {
        id: 'q6',
        question: 'Na mitologia grega, quem ofereceu a oliveira como presente aos cidadãos de Atenas?',
        type: 'mcq',
        options: [
            { id: 'A', text: 'Zeus' },
            { id: 'B', text: 'Poseidão' },
            { id: 'C', text: 'Atena' },
            { id: 'D', text: 'Ísis' }
        ],
        correct: 'C',
        feedback: {
            correct: 'Correto! Atena ofereceu a oliveira na disputa com Poseidão, que ofereceu um cavalo. A oliveira foi considerada a dádiva mais valiosa.',
            incorrect: 'Foi Atena quem ofereceu a oliveira. Poseidão ofereceu um cavalo, mas a oliveira foi considerada mais valiosa por produzir óleo para iluminar, curar e alimentar.'
        }
    },
    {
        id: 'q7',
        question: 'Qual o significado literal das palavras "Messias" (hebraico) e "Cristo" (grego)?',
        type: 'mcq',
        options: [
            { id: 'A', text: 'O Abençoado' },
            { id: 'B', text: 'O Ungido' },
            { id: 'C', text: 'O Salvador' },
            { id: 'D', text: 'O Consagrado' }
        ],
        correct: 'B',
        feedback: {
            correct: 'Correto! Ambas as palavras significam "O Ungido", referindo-se à unção com azeite que consagrava reis e sacerdotes.',
            incorrect: 'Messias e Cristo significam literalmente "O Ungido", referindo-se à prática de ungir com azeite para consagração de reis e sacerdotes.'
        }
    },
    {
        id: 'q8',
        question: 'Qual o limite máximo de acidez para um azeite ser classificado como Virgem Extra?',
        type: 'mcq',
        options: [
            { id: 'A', text: '0,4%' },
            { id: 'B', text: '0,8%' },
            { id: 'C', text: '1,0%' },
            { id: 'D', text: '2,0%' }
        ],
        correct: 'B',
        feedback: {
            correct: 'Correto! O azeite Virgem Extra deve ter acidez inferior a 0,8% e zero defeitos sensoriais.',
            incorrect: 'O limite para Virgem Extra é 0,8% de acidez. Além disso, deve ter zero defeitos na prova sensorial e apresentar frutado.'
        }
    },
    {
        id: 'q9',
        question: 'O azeite faz parte da "Tríade Mediterrânica" juntamente com quais outros dois alimentos?',
        type: 'mcq',
        options: [
            { id: 'A', text: 'Pão e Queijo' },
            { id: 'B', text: 'Trigo e Vinho' },
            { id: 'C', text: 'Peixe e Legumes' },
            { id: 'D', text: 'Carne e Frutas' }
        ],
        correct: 'B',
        feedback: {
            correct: 'Correto! A "Tríade Mediterrânica", base da dieta e cultura, é composta por trigo (pão), vinha (vinho) e oliveira (azeite).',
            incorrect: 'A resposta correta é Trigo e Vinho. Estes três elementos formavam a base da alimentação e da economia no Mediterrâneo antigo.'
        }
    },
    {
        id: 'q10',
        question: 'Em Portugal, que código legal antigo já aplicava multas para proteger as oliveiras, demonstrando o seu valor estratégico?',
        type: 'mcq',
        options: [
            { id: 'A', text: 'As Ordenações Afonsinas' },
            { id: 'B', text: 'O Código de Hamurabi' },
            { id: 'C', text: 'O Código Visigótico' },
            { id: 'D', text: 'A Lei das Doze Tábuas' }
        ],
        correct: 'C',
        feedback: {
            correct: 'Correto! O Código Visigótico, que vigorou na Península Ibérica, já continha leis que protegiam as oliveiras com multas, reconhecendo a sua importância económica e estratégica.',
            incorrect: 'A resposta correta é o Código Visigótico. Esta legislação medieval na Península Ibérica já reconhecia o valor das oliveiras, protegendo-as legalmente.'
        }
    }
];